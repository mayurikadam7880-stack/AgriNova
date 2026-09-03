from flask import Flask, render_template, request, jsonify, session, redirect, url_for
import sqlite3
import requests
import os
import ollama
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
import numpy as np


# ==============================
# LOAD TRAINED AI MODEL
# ==============================

model = load_model("model/crop_disease_model.keras")

CLASS_NAMES = [
    "Apple___Apple_scab",
    "Apple___Black_rot",
    "Apple___Cedar_apple_rust",
    "Apple___healthy",
    "Corn___Cercospora_leaf_spot",
    "Corn___Common_rust",
    "Corn___healthy",
    "Potato___Early_blight",
    "Potato___Late_blight",
    "Potato___healthy",
    "Tomato___Early_blight",
    "Tomato___Late_blight",
    "Tomato___Leaf_Mold",
    "Tomato___Septoria_leaf_spot",
    "Tomato___healthy"
]


# ==============================
# FLASK APP
# ==============================

app = Flask(__name__)

app.secret_key = "smart-agriculture-secret-key"

UPLOAD_FOLDER = "static/images"
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER

os.makedirs(UPLOAD_FOLDER, exist_ok=True)


# ==============================
# OLLAMA LOCAL AI
# =======================
print("Ollama Local AI: READY")

#=================
# database function
#==================
def init_db():
    conn = sqlite3.connect("users.db")

    cursor = conn.cursor()

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL
        )
        
    """)

    conn.commit()
    conn.close()


init_db()
# ==============================
# OPENWEATHER API
# ==============================

API_KEY = "ad20e625faaf22ac3cf1293ff5bc828f"
CITY = "Aurangabad"


def get_weather():

    url = f"https://api.openweathermap.org/data/2.5/weather?q={CITY}&appid={API_KEY}&units=metric"

    try:
        response = requests.get(url, timeout=10)

        print("Weather API Status:", response.status_code)
        print("Weather API Response:", response.text)

        if response.status_code == 200:

            data = response.json()

            weather = {
                
                "city": data["name"],
                "temperature": data["main"]["temp"],
                "humidity": data["main"]["humidity"],
                "wind": data["wind"]["speed"],
                "description": data["weather"][0]["description"].title()

                 }

            return weather

        return None

    except Exception as e:

        print("Weather Error:", e)

        return None
    

     # =========================
# SMART IRRIGATION
# =========================

@app.route("/irrigation")
def irrigation():

    # Demo soil moisture value
    soil_moisture = 28

    weather = get_weather()

    if weather is None:
        return jsonify({
            "error": "Unable to fetch weather data"
        }), 500

    # Irrigation decision
    if soil_moisture < 30:

        irrigation_status = "Water Needed Today"
        recommendation = "Soil moisture is low. Irrigation is recommended."

        # Best irrigation time
        best_time = "6:30 PM"

    elif soil_moisture < 50:

        irrigation_status = "Moderate Moisture"
        recommendation = "Monitor soil moisture. Light irrigation may be required."

        best_time = "Tomorrow Morning"

    else:

        irrigation_status = "No Immediate Irrigation"
        recommendation = "Soil moisture is sufficient. No irrigation required now."

        best_time = "Not Required"

    return jsonify({
        "city": weather["city"],
        "soil_moisture": soil_moisture,
        "temperature": weather["temperature"],
        "humidity": weather["humidity"],
        "weather": weather["description"],
        "irrigation_status": irrigation_status,
        "best_time": best_time,
        "recommendation": recommendation
    })
 #======= WEATHER ROUTE=====

@app.route("/weather")
def weather():
    weather_data = get_weather()

    if weather_data:
        return jsonify(weather_data)

    return jsonify({
        "error": "Unable to fetch weather data"
    }), 500
# ==============================
# 15 CLASS NAMES
# ==============================

class_names = [
    "Potato - Early Blight",
    "Potato - Late Blight",
    "Potato - Healthy",
    "Pepper Bell - Bacterial Spot",
    "Pepper Bell - Healthy",
    "Tomato - Bacterial Spot",
    "Tomato - Early Blight",
    "Tomato - Late Blight",
    "Tomato - Leaf Mold",
    "Tomato - Septoria Leaf Spot",
    "Tomato - Spider Mites",
    "Tomato - Target Spot",
    "Tomato - Mosaic Virus",
    "Tomato - Yellow Leaf Curl Virus",
    "Tomato - Healthy"
]


# ==============================
# RECOMMENDATIONS
# ==============================

recommendations = {

    "Potato - Early Blight":
        "Remove infected leaves and apply a recommended fungicide.",

    "Potato - Late Blight":
        "Remove infected plant parts and use an appropriate fungicide.",

    "Potato - Healthy":
        "Crop appears healthy. Continue proper irrigation and monitoring.",

    "Pepper Bell - Bacterial Spot":
        "Remove infected leaves and avoid overhead irrigation.",

    "Pepper Bell - Healthy":
        "Crop appears healthy. Continue regular monitoring.",

    "Tomato - Bacterial Spot":
        "Remove infected leaves and avoid watering leaves directly.",

    "Tomato - Early Blight":
        "Remove affected leaves and apply a recommended fungicide.",

    "Tomato - Late Blight":
        "Remove infected plant material and apply suitable fungicide.",

    "Tomato - Leaf Mold":
        "Improve air circulation and reduce excess humidity.",

    "Tomato - Septoria Leaf Spot":
        "Remove infected leaves and apply recommended fungicide.",

    "Tomato - Spider Mites":
        "Inspect the underside of leaves and use suitable pest control.",

    "Tomato - Target Spot":
        "Remove infected leaves and apply appropriate fungicide.",

    "Tomato - Mosaic Virus":
        "Remove infected plants and control insect vectors.",

    "Tomato - Yellow Leaf Curl Virus":
        "Control whiteflies and remove severely infected plants.",

    "Tomato - Healthy":
        "Crop appears healthy. Continue normal irrigation and monitoring."
}


# ==============================
# HOME PAGE
# ==============================

@app.route("/")
def home():

    if "user_id" not in session:
        return render_template("login.html")

    weather = get_weather()

    return render_template(
        "index.html",
        weather=weather,
        image_path=None,
        disease="",
        confidence="",
        recommendation=""
    )


# ==============================
# IMAGE UPLOAD + AI PREDICTION
# ==============================

@app.route("/upload", methods=["POST"])
def upload():

    if "image" not in request.files:
        return "No File Selected"

    file = request.files["image"]

    if file.filename == "":
        return "No File Selected"

    filepath = os.path.join(
        app.config["UPLOAD_FOLDER"],
        file.filename
    )

    file.save(filepath)

    image_path = "images/" + file.filename

    disease, confidence = predict_disease(filepath)

    recommendation = recommendations.get(
        disease,
        "Monitor the crop regularly and follow suitable agricultural practices."
    )

    return render_template(
        "index.html",
        weather=get_weather(),
        image_path=image_path,
        disease=disease,
        confidence=f"{confidence:.2f}%",
        recommendation=recommendation
    )


    # ==============================
    # PREPARE IMAGE FOR AI MODEL
    # ==============================

    img = image.load_img(
        filepath,
        target_size=(224, 224)
    )

    img_array = image.img_to_array(img)

    img_array = img_array / 255.0

    img_array = np.expand_dims(
        img_array,
        axis=0
    )


    # ==============================
    # AI PREDICTION
    # ==============================

    prediction = model.predict(img_array, verbose=0)

    predicted_index = np.argmax(prediction[0])

    confidence_value = float(
        prediction[0][predicted_index]
    ) * 100

    disease = class_names[predicted_index]

    confidence = f"{confidence_value:.2f}%"

    recommendation = recommendations.get(
        disease,
        "Please consult an agriculture expert."
    )

# =======================
# LOGIN
# =======================

@app.route("/login", methods=["GET", "POST"])
def login():

    if request.method == "POST":

        email = request.form["email"]
        password = request.form["password"]

        conn = sqlite3.connect("users.db")
        cursor = conn.cursor()

        cursor.execute(
            """
            SELECT * FROM users
            WHERE email = ? AND password = ?
            """,
            (email, password)
        )

        user = cursor.fetchone()

        conn.close()

        if user:

            # Create login session
            session["user_id"] = user[0]
            session["user_name"] = user[1]
            session["user_email"] = user[2]

            return render_template(
                "index.html",
                weather=get_weather(),
                image_path=None,
                disease="",
                confidence="",
                recommendation=""
            )

        return "Invalid Email or Password"

    return render_template("login.html")


# =======================
# SIGNUP
# =======================

@app.route("/signup", methods=["GET", "POST"])
def signup():

    if request.method == "POST":

        name = request.form["name"]
        email = request.form["email"]
        password = request.form["password"]
        confirm_password = request.form["confirm_password"]

        if password != confirm_password:
            return "Passwords do not match"

        try:

            conn = sqlite3.connect("users.db")
            cursor = conn.cursor()

            cursor.execute(
                """
                INSERT INTO users (name, email, password)
                VALUES (?, ?, ?)
                """,
                (name, email, password)
            )

            conn.commit()
            conn.close()

            return render_template("login.html")

        except sqlite3.IntegrityError:

            return "Email already registered"


    return render_template("signup.html")


# =======================
# LOGOUT
# =======================

@app.route("/logout")
def logout():

    # Clear login session
    session.clear()

    return render_template("login.html")
# ===============================
# AI CHATBOT
# ===============================

@app.route("/chat", methods=["POST"])
def chat():

    try:
        data = request.get_json() or {}

        user_message = data.get("message", "").strip()
        language = data.get("language", "en")

        if not user_message:
            return jsonify({
                "reply": "Please enter your question."
            }), 400

        language_name = {
            "en": "English",
            "mr": "Marathi",
            "hi": "Hindi"
        }.get(language, "English")

        prompt = f"""
You are AgriNova AI Assistant, a helpful smart farming assistant.

Answer the farmer's question in {language_name}.

Focus on:
- crop diseases
- crop care
- fertilizers
- irrigation
- weather-related farming advice
- general agricultural practices

Response rules:
- Give a short and direct answer.
- Give only 3 to 5 important points.
- Use simple farmer-friendly language.
- Avoid unnecessary technical terms.
- If the selected language is Marathi, answer only in simple Marathi.
- If the selected language is Hindi, answer only in simple Hindi.
- If the selected language is English, answer only in simple English.
- Do not repeat the farmer's question.

Farmer's question:
{user_message}
"""

        # ===============================
        # OLLAMA LOCAL AI
        # ===============================

        response = ollama.chat(
            model="llama3.2",
            messages=[
                {
                    "role": "user",
                    "content": prompt
                }
            ]
        )

        return jsonify({
            "reply": response["message"]["content"]
        })

    except Exception as e:

        print("================================")
        print("AI ERROR:", repr(e))
        print("================================")

        return jsonify({
            "reply": f"AI service error: {str(e)}"
        }), 500

 # ===============================
# AI FERTILIZER RECOMMENDATION
# ===============================

@app.route("/fertilizer", methods=["POST"])
def fertilizer():

    try:

        crop = request.form.get("crop", "")
        soil = request.form.get("soil", "")

        nitrogen = request.form.get("nitrogen", "0")
        phosphorus = request.form.get("phosphorus", "0")
        potassium = request.form.get("potassium", "0")

        language = request.form.get("language", "en")

        language_name = {
            "en": "English",
            "mr": "Marathi",
            "hi": "Hindi"
        }.get(language, "English")

        # ===============================
        # AI PROMPT
        # ===============================

        prompt = f"""
You are AgriNova AI, a helpful farming assistant.

Give fertilizer guidance for the farmer using the information below.

Crop: {crop}
Soil Type: {soil}
Nitrogen (N): {nitrogen}
Phosphorus (P): {phosphorus}
Potassium (K): {potassium}

Answer in {language_name}.

Response rules:
- Give a short and direct answer.
- Give only 3 to 5 important points.
- Use simple farmer-friendly language.
- Avoid unnecessary technical terms.
- Do not repeat the input information.
- Do not give unsafe or excessive fertilizer doses.
- Mention that exact fertilizer quantity should be based on soil-test results and crop growth stage.
"""

        # ===============================
        # OLLAMA AI
        # ===============================

        response = ollama.chat(
            model="llama3.2",
            messages=[
                {
                    "role": "user",
                    "content": prompt
                }
            ]
        )

        ai_reply = response["message"]["content"]

        fertilizer_result = {
            "crop": crop,
            "soil": soil,
            "fertilizer": "AI Recommended",
            "advice": ai_reply
        }

        return render_template(
            "index.html",
            weather=get_weather(),
            image_path=None,
            disease="",
            confidence="",
            recommendation="",
            fertilizer_result=fertilizer_result
        )

    except Exception as e:

        print("================================")
        print("FERTILIZER AI ERROR:", repr(e))
        print("================================")

        return "Unable to generate fertilizer recommendation."
    # ==============================
    # WEATHER
    # ==============================
weather = get_weather()
def predict_disease(image_path):

    img = image.load_img(
        image_path,
        target_size=(224, 224)
    )

    img_array = image.img_to_array(img)

    img_array = np.expand_dims(
        img_array,
        axis=0
    )

    img_array = img_array / 255.0

    predictions = model.predict(img_array, verbose=0)

    predicted_index = np.argmax(predictions[0])

    confidence = float(
        predictions[0][predicted_index]
    ) * 100

    disease = CLASS_NAMES[predicted_index]

    return disease, confidence

# ==============================
# RUN FLASK
# ==============================

if __name__ == "__main__":
    app.run(debug=True)