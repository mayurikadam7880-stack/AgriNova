import pandas as pd
import pickle
from sklearn.ensemble import RandomForestClassifier

# ==========================================
# CROP RECOMMENDATION DATA
# ==========================================

data = {
    "N": [90, 85, 60, 74, 78, 69, 50, 45, 80, 55],
    "P": [42, 58, 55, 35, 42, 37, 40, 35, 45, 30],
    "K": [43, 41, 44, 40, 35, 42, 38, 30, 50, 25],
    "temperature": [20, 21, 23, 26, 24, 22, 18, 17, 25, 19],
    "humidity": [80, 82, 75, 65, 70, 78, 85, 90, 72, 88],
    "ph": [6.5, 6.7, 6.2, 6.8, 6.4, 6.6, 5.8, 5.5, 6.3, 5.9],
    "rainfall": [200, 220, 180, 120, 150, 190, 250, 280, 160, 230],
    "crop": [
        "Rice",
        "Rice",
        "Wheat",
        "Maize",
        "Cotton",
        "Sugarcane",
        "Potato",
        "Tomato",
        "Maize",
        "Potato"
    ]
}

df = pd.DataFrame(data)

# ==========================================
# FEATURES AND TARGET
# ==========================================

X = df.drop("crop", axis=1)
y = df["crop"]

# ==========================================
# TRAIN MODEL
# ==========================================

model = RandomForestClassifier(
    n_estimators=100,
    random_state=42
)

model.fit(X, y)

# ==========================================
# SAVE MODEL
# ==========================================

with open("model/crop_recommendation_model.pkl", "wb") as file:
    pickle.dump(model, file)

print("==========================================")
print("CROP RECOMMENDATION MODEL TRAINED!")
print("Model saved successfully.")
print("==========================================")