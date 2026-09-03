// ================= DARK MODE =================

const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }else{
        themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

// ================= SCROLL BUTTON =================

const topBtn = document.getElementById("topBtn");

window.onscroll = function(){

    if(document.documentElement.scrollTop > 300){
        topBtn.style.display="block";
    }else{
        topBtn.style.display="none";
    }

}

topBtn.onclick = function(){

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}
// ==========================================
// LANGUAGE TRANSLATION
// ==========================================

const translations = {

    // ==========================================
    // ENGLISH
    // ==========================================

    en: {

        home: "Home",
        about: "About",
        features: "Features",
        disease: "Disease AI",
        analytics: "Analytics",
        contact: "Contact",
        logout: "Logout",

        heroBadge: "🌾 AI Powered Farming",
        heroTitle: "Future of Smart Agriculture",
        heroDescription: "Detect crop diseases, monitor weather, receive fertilizer recommendations and manage irrigation using Artificial Intelligence.",
        getStarted: "Get Started",
        liveDemo: "Live Demo",

        farmersConnected: "Farmers Connected",
        weatherAccuracy: "Weather Accuracy",
        diseasesDetected: "Crop Diseases Detected",
        waterSaved: "Water Saved",

        ourFeatures: "Our AI Features",
        smartSolutions: "Smart Agriculture Solutions",
        featuresDescription: "AI-powered tools that help farmers increase productivity and reduce costs.",

        diseaseDetection: "Crop Disease Detection",
        diseaseDetectionDesc: "Upload a crop image and detect diseases instantly using AI.",

        weatherPrediction: "Weather Prediction",
        weatherPredictionDesc: "Get real-time weather forecasts and farming alerts.",

        smartIrrigation: "Smart Irrigation",
        smartIrrigationDesc: "Receive irrigation alerts based on soil moisture and weather.",

        fertilizerRecommendation: "Fertilizer Recommendation",
        fertilizerRecommendationDesc: "AI recommends the best fertilizer based on crop and soil data.",

        aboutPlatform: "About Our Platform",
        empoweringFarmers: "Empowering Farmers with Artificial Intelligence",
        aboutDescription: "Smart Agriculture AI helps farmers make better decisions using Artificial Intelligence.",

        aiDisease: "AI Disease Detection",
        liveWeather: "Live Weather Forecast",
        irrigationSystem: "Smart Irrigation System",
        fertilizerRec: "Fertilizer Recommendation",
        learnMore: "Learn More",

        diseaseDetectionTitle: "AI Disease Detection",
        uploadCrop: "Upload Crop Image",
        uploadDescription: "Upload your crop image and let AI identify diseases instantly.",
        dragDrop: "Drag & Drop your image here",
        or: "or",
        chooseImage: "Choose Image",
        analyzeAI: "Analyze with AI",

        currentFarmWeather: "Current Farm Weather",
        liveWeatherDashboard: "Live Weather Dashboard",
        weatherDescription: "Monitor weather conditions before making farming decisions.",
        temperature: "Temperature",
        humidity: "Humidity",
        windSpeed: "Wind Speed",
        condition: "Condition",
        weatherUnavailable: "Weather data unavailable.",

        analyticsDashboard: "AI Analytics Dashboard",
        farmPerformance: "Farm Performance Overview",
        analyticsDescription: "AI-generated insights to improve productivity and crop health.",
        cropHealth: "Crop Health",
        healthyCrops: "Healthy Crops",
        soilQuality: "Soil Quality",
        goodSoil: "Good Soil Condition",
        productivity: "Productivity",
        higherYield: "Higher Yield",
        estimatedProfit: "Estimated Profit",
        currentSeason: "Current Season",

        contactUs: "Contact Us",
        growTogether: "Let's Grow Agriculture Together 🌱",
        contactDescription: "Have questions or suggestions? Get in touch with us.",
        contactInformation: "Contact Information",
        sendMessage: "Send Message",

        quickLinks: "Quick Links",
        services: "Services",
        followUs: "Follow Us",

        fertilizerAI: "🌱 AI Fertilizer Recommendation",
        findFertilizer: "Find the Right Fertilizer for Your Crop",
        fertilizerDescription: "Enter your crop and soil information to get a suitable fertilizer recommendation.",

        selectCrop: "Select Crop",
        soilType: "Soil Type",

        nitrogen: "Nitrogen (N)",
        phosphorus: "Phosphorus (P)",
        potassium: "Potassium (K)",

        getFertilizerRecommendation: "Get Fertilizer Recommendation",

        tomato: "Tomato",
        potato: "Potato",
        corn: "Corn",
        apple: "Apple",

        loamy: "Loamy",
        clay: "Clay",
        sandy: "Sandy",
        blackSoil: "Black Soil",

        irrigationTitle: "Smart Irrigation",
        irrigationSubtitle: "AI-based irrigation recommendation for your crop",
        irrigationStatus: "Checking irrigation status...",
        soilMoisture: "Soil Moisture",
        temperature: "Temperature",
        humidity: "Humidity",
        bestTime: "Best Time",
        recommendation: "Recommendation",
        loadingRecommendation: "Loading recommendation...",
        waterNeeded: "Water Needed Today",
        moderateMoisture: "Moderate Moisture",
        noIrrigation: "No Immediate Irrigation",
    },

    // ==========================================
    // MARATHI
    // ==========================================

    mr: {

        home: "मुख्यपृष्ठ",
        about: "आमच्याबद्दल",
        features: "वैशिष्ट्ये",
        disease: "रोग निदान AI",
        analytics: "विश्लेषण",
        contact: "संपर्क",
        logout: "लॉगआउट",

        heroBadge: "🌾 AI आधारित शेती",
        heroTitle: "स्मार्ट शेतीचे भविष्य",
        heroDescription: "कृत्रिम बुद्धिमत्तेच्या मदतीने पिकांचे रोग ओळखा, हवामानावर लक्ष ठेवा, खतांची शिफारस मिळवा आणि सिंचन व्यवस्थापित करा.",
        getStarted: "सुरुवात करा",
        liveDemo: "लाईव्ह डेमो",

        farmersConnected: "जोडलेले शेतकरी",
        weatherAccuracy: "हवामान अचूकता",
        diseasesDetected: "ओळखलेले पिकांचे रोग",
        waterSaved: "वाचवलेले पाणी",

        ourFeatures: "आमची AI वैशिष्ट्ये",
        smartSolutions: "स्मार्ट शेती उपाय",
        featuresDescription: "शेतकऱ्यांची उत्पादकता वाढवण्यासाठी आणि खर्च कमी करण्यासाठी AI आधारित साधने.",

        diseaseDetection: "पिकांचे रोग निदान",
        diseaseDetectionDesc: "पिकाचा फोटो अपलोड करा आणि AI च्या मदतीने रोग त्वरित ओळखा.",

        weatherPrediction: "हवामान अंदाज",
        weatherPredictionDesc: "रिअल-टाइम हवामान अंदाज आणि शेतीसाठी सूचना मिळवा.",

        smartIrrigation: "स्मार्ट सिंचन",
        smartIrrigationDesc: "मातीतील ओलावा आणि हवामानावर आधारित सिंचन सूचना मिळवा.",

        fertilizerRecommendation: "खतांची शिफारस",
        fertilizerRecommendationDesc: "पिक आणि मातीच्या माहितीवर आधारित योग्य खताची AI शिफारस.",

        aboutPlatform: "आमच्या प्लॅटफॉर्मबद्दल",
        empoweringFarmers: "कृत्रिम बुद्धिमत्तेद्वारे शेतकऱ्यांना सक्षम बनवणे",
        aboutDescription: "Smart Agriculture AI शेतकऱ्यांना कृत्रिम बुद्धिमत्तेच्या मदतीने चांगले निर्णय घेण्यास मदत करते.",

        aiDisease: "AI रोग निदान",
        liveWeather: "लाईव्ह हवामान अंदाज",
        irrigationSystem: "स्मार्ट सिंचन प्रणाली",
        fertilizerRec: "खतांची शिफारस",
        learnMore: "अधिक जाणून घ्या",

        diseaseDetectionTitle: "AI रोग निदान",
        uploadCrop: "पिकाचा फोटो अपलोड करा",
        uploadDescription: "पिकाचा फोटो अपलोड करा आणि AI ला रोग ओळखू द्या.",
        dragDrop: "तुमचा फोटो येथे Drag & Drop करा",
        or: "किंवा",
        chooseImage: "फोटो निवडा",
        analyzeAI: "AI द्वारे तपासा",

        currentFarmWeather: "सध्याचे शेती हवामान",
        liveWeatherDashboard: "लाईव्ह हवामान डॅशबोर्ड",
        weatherDescription: "शेतीचे निर्णय घेण्यापूर्वी हवामानाची स्थिती तपासा.",
        temperature: "तापमान",
        humidity: "आर्द्रता",
        windSpeed: "वाऱ्याचा वेग",
        condition: "हवामान स्थिती",
        weatherUnavailable: "हवामानाची माहिती उपलब्ध नाही.",

        analyticsDashboard: "AI विश्लेषण डॅशबोर्ड",
        farmPerformance: "शेती कामगिरीचा आढावा",
        analyticsDescription: "उत्पादकता आणि पिकांचे आरोग्य सुधारण्यासाठी AI आधारित माहिती.",
        cropHealth: "पिकांचे आरोग्य",
        healthyCrops: "निरोगी पिके",
        soilQuality: "मातीची गुणवत्ता",
        goodSoil: "चांगली मातीची स्थिती",
        productivity: "उत्पादकता",
        higherYield: "जास्त उत्पादन",
        estimatedProfit: "अंदाजे नफा",
        currentSeason: "सध्याचा हंगाम",

        contactUs: "आमच्याशी संपर्क साधा",
        growTogether: "चला एकत्रितपणे शेतीचा विकास करूया 🌱",
        contactDescription: "तुमचे प्रश्न किंवा सूचना आहेत का? आमच्याशी संपर्क साधा.",
        contactInformation: "संपर्क माहिती",
        sendMessage: "संदेश पाठवा",

        quickLinks: "महत्त्वाचे दुवे",
        services: "सेवा",
        followUs: "आम्हाला फॉलो करा",

        fertilizerAI: "🌱 AI खत शिफारस",
        findFertilizer: "तुमच्या पिकासाठी योग्य खत शोधा",
        fertilizerDescription: "योग्य खताची शिफारस मिळवण्यासाठी तुमच्या पिकाची आणि मातीची माहिती भरा.",
        selectCrop: "पीक निवडा",
        selectSoil: "मातीचा प्रकार निवडा",
        nitrogen: "नायट्रोजन (N)",
        phosphorus: "फॉस्फरस (P)",
        potassium: "पोटॅशियम (K)",
        enterN: "N चे मूल्य भरा",
        enterP: "P चे मूल्य भरा",
        enterK: "K चे मूल्य भरा",
        getFertilizer: "खताची शिफारस मिळवा",

        tomato: "टोमॅटो",
        potato: "बटाटा",
        corn: "मका",
        apple: "सफरचंद",

        loamy: "गाळाची माती",
        clay: "चिकणमाती",
        sandy: "वालुकामय माती",
        blackSoil: "काळी माती",

        irrigationTitle: "स्मार्ट सिंचन",
        irrigationSubtitle: "तुमच्या पिकासाठी AI आधारित सिंचन शिफारस",
        irrigationStatus: "सिंचन स्थिती तपासत आहे...",
        soilMoisture: "मातीतील ओलावा",
        temperature: "तापमान",
        humidity: "आर्द्रता",
        bestTime: "योग्य वेळ",
        recommendation: "शिफारस",
        loadingRecommendation: "शिफारस लोड होत आहे...",
        waterNeeded: "आज पाणी देणे आवश्यक आहे",
        moderateMoisture: "मातीतील ओलावा मध्यम आहे",
        noIrrigation: "सध्या सिंचनाची गरज नाही",
    },

    // ==========================================
    // HINDI
    // ==========================================

    hi: {

        home: "होम",
        about: "हमारे बारे में",
        features: "विशेषताएँ",
        disease: "रोग पहचान AI",
        analytics: "विश्लेषण",
        contact: "संपर्क",
        logout: "लॉगआउट",

        heroBadge: "🌾 AI आधारित खेती",
        heroTitle: "स्मार्ट कृषि का भविष्य",
        heroDescription: "कृत्रिम बुद्धिमत्ता की मदद से फसल रोगों की पहचान करें, मौसम पर नज़र रखें, उर्वरक की सलाह प्राप्त करें और सिंचाई का प्रबंधन करें.",
        getStarted: "शुरू करें",
        liveDemo: "लाइव डेमो",

        farmersConnected: "जुड़े हुए किसान",
        weatherAccuracy: "मौसम की सटीकता",
        diseasesDetected: "पहचाने गए फसल रोग",
        waterSaved: "बचाया गया पानी",

        ourFeatures: "हमारी AI सुविधाएँ",
        smartSolutions: "स्मार्ट कृषि समाधान",
        featuresDescription: "उत्पादकता बढ़ाने और लागत कम करने में किसानों की मदद करने वाले AI उपकरण।",

        diseaseDetection: "फसल रोग पहचान",
        diseaseDetectionDesc: "फसल की तस्वीर अपलोड करें और AI की मदद से रोग तुरंत पहचानें.",

        weatherPrediction: "मौसम पूर्वानुमान",
        weatherPredictionDesc: "रीयल-टाइम मौसम पूर्वानुमान और खेती संबंधी अलर्ट प्राप्त करें.",

        smartIrrigation: "स्मार्ट सिंचाई",
        smartIrrigationDesc: "मिट्टी की नमी और मौसम के आधार पर सिंचाई अलर्ट प्राप्त करें.",

        fertilizerRecommendation: "उर्वरक की सिफारिश",
        fertilizerRecommendationDesc: "फसल और मिट्टी के डेटा के आधार पर AI सर्वोत्तम उर्वरक की सिफारिश करता है.",

        aboutPlatform: "हमारे प्लेटफॉर्म के बारे में",
        empoweringFarmers: "कृत्रिम बुद्धिमत्ता से किसानों को सशक्त बनाना",
        aboutDescription: "Smart Agriculture AI किसानों को कृत्रिम बुद्धिमत्ता की मदद से बेहतर निर्णय लेने में सहायता करता है.",

        aiDisease: "AI रोग पहचान",
        liveWeather: "लाइव मौसम पूर्वानुमान",
        irrigationSystem: "स्मार्ट सिंचाई प्रणाली",
        fertilizerRec: "उर्वरक की सिफारिश",
        learnMore: "और जानें",

        diseaseDetectionTitle: "AI रोग पहचान",
        uploadCrop: "फसल की तस्वीर अपलोड करें",
        uploadDescription: "अपनी फसल की तस्वीर अपलोड करें और AI को रोग पहचानने दें.",
        dragDrop: "अपनी तस्वीर यहाँ Drag & Drop करें",
        or: "या",
        chooseImage: "तस्वीर चुनें",
        analyzeAI: "AI से जांच करें",

        currentFarmWeather: "वर्तमान खेत का मौसम",
        liveWeatherDashboard: "लाइव मौसम डैशबोर्ड",
        weatherDescription: "खेती के निर्णय लेने से पहले मौसम की स्थिति देखें.",
        temperature: "तापमान",
        humidity: "नमी",
        windSpeed: "हवा की गति",
        condition: "मौसम की स्थिति",
        weatherUnavailable: "मौसम की जानकारी उपलब्ध नहीं है.",

        analyticsDashboard: "AI विश्लेषण डैशबोर्ड",
        farmPerformance: "खेत के प्रदर्शन का अवलोकन",
        analyticsDescription: "उत्पादकता और फसल स्वास्थ्य सुधारने के लिए AI द्वारा तैयार जानकारी.",
        cropHealth: "फसल स्वास्थ्य",
        healthyCrops: "स्वस्थ फसलें",
        soilQuality: "मिट्टी की गुणवत्ता",
        goodSoil: "अच्छी मिट्टी की स्थिति",
        productivity: "उत्पादकता",
        higherYield: "अधिक उत्पादन",
        estimatedProfit: "अनुमानित लाभ",
        currentSeason: "वर्तमान मौसम",

        contactUs: "हमसे संपर्क करें",
        growTogether: "आइए मिलकर कृषि को आगे बढ़ाएँ 🌱",
        contactDescription: "क्या आपके पास कोई प्रश्न या सुझाव है? हमसे संपर्क करें.",
        contactInformation: "संपर्क जानकारी",
        sendMessage: "संदेश भेजें",

        quickLinks: "महत्वपूर्ण लिंक",
        services: "सेवाएँ",
        followUs: "हमें फॉलो करें",
        fertilizerTitle: "अपनी फसल के लिए सही उर्वरक खोजें",
        fertilizerAI: "🌱 AI उर्वरक की सिफारिश",
        findFertilizer: "अपनी फसल के लिए सही उर्वरक खोजें",
        fertilizerDescription: "उपयुक्त उर्वरक की सिफारिश पाने के लिए अपनी फसल और मिट्टी की जानकारी भरें।",
        selectCrop: "फसल चुनें",
        soilType: "मिट्टी का प्रकार",

        nitrogen: "नाइट्रोजन (N)",
        phosphorus: "फॉस्फोरस (P)",
        potassium: "पोटैशियम (K)",

        getFertilizerRecommendation: "उर्वरक की सिफारिश प्राप्त करें",

        tomato: "टमाटर",
        potato: "आलू",
        corn: "मक्का",
        apple: "सेब",

        loamy: "दोमट मिट्टी",
        clay: "चिकनी मिट्टी",
        sandy: "रेतीली मिट्टी",
        blackSoil: "काली मिट्टी",

        irrigationTitle: "स्मार्ट सिंचाई",
        irrigationSubtitle: "आपकी फसल के लिए AI आधारित सिंचाई सुझाव",
        irrigationStatus: "सिंचाई की स्थिति जाँच रहा है...",
        soilMoisture: "मिट्टी की नमी",
        temperature: "तापमान",
        humidity: "आर्द्रता",
        bestTime: "उपयुक्त समय",
        recommendation: "सुझाव",
        loadingRecommendation: "सुझाव लोड हो रहा है...",
        waterNeeded: "आज पानी देना आवश्यक है",
        moderateMoisture: "मिट्टी की नमी मध्यम है",
        noIrrigation: "अभी सिंचाई की आवश्यकता नहीं है",
    }
};

// ==========================================
// CHANGE LANGUAGE
// ==========================================

function changeLanguage(language) {

    const selectedLanguage = translations[language];

    if (!selectedLanguage) {
        return;
    }

    // Normal text
    document.querySelectorAll("[data-i18n]").forEach(element => {

        const key = element.getAttribute("data-i18n");

        if (selectedLanguage[key]) {
            element.textContent = selectedLanguage[key];
        }

    });


    // Input placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {

        const key = element.getAttribute("data-i18n-placeholder");

        if (language === "mr") {

            const placeholders = {
                yourName: "तुमचे नाव",
                yourEmail: "तुमचा ईमेल",
                phoneNumber: "फोन नंबर",
                yourMessage: "तुमचा संदेश"
            };

            element.placeholder = placeholders[key];

        }

        else if (language === "hi") {

            const placeholders = {
                yourName: "आपका नाम",
                yourEmail: "आपका ईमेल",
                phoneNumber: "फोन नंबर",
                yourMessage: "आपका संदेश"
            };

            element.placeholder = placeholders[key];

        }

        else {

            const placeholders = {
                yourName: "Your Name",
                yourEmail: "Your Email",
                phoneNumber: "Phone Number",
                yourMessage: "Your Message"
            };

            element.placeholder = placeholders[key];

        }

    });

}


// ==========================================
// LANGUAGE DROPDOWN
// ==========================================

const languageSelect = document.getElementById("languageSelect");

if (languageSelect) {

    languageSelect.addEventListener("change", function () {

        changeLanguage(this.value);

        // Save selected language
        localStorage.setItem("selectedLanguage", this.value);

    });

    // Load saved language
    const savedLanguage = localStorage.getItem("selectedLanguage");

    if (savedLanguage && translations[savedLanguage]) {

        languageSelect.value = savedLanguage;

        changeLanguage(savedLanguage);

    }

}
// ==========================================
// FERTILIZER LANGUAGE SYNC
// ==========================================

const fertilizerLanguage = document.getElementById("fertilizerLanguage");

if (languageSelect && fertilizerLanguage) {

    fertilizerLanguage.value = languageSelect.value;

    languageSelect.addEventListener("change", function () {
        fertilizerLanguage.value = this.value;
    });

}
// =========================
// AI CHATBOT
// =========================

const chatbotBtn = document.getElementById("chatbot-btn");
const chatbotWindow = document.getElementById("chatbot-window");
const closeChatbot = document.getElementById("close-chatbot");
const sendChat = document.getElementById("send-chat");
const chatInput = document.getElementById("chat-input");
const chatMessages = document.getElementById("chat-messages");

chatbotBtn.addEventListener("click", function () {
    chatbotWindow.style.display = "flex";
});

closeChatbot.addEventListener("click", function () {
    chatbotWindow.style.display = "none";
});

sendChat.addEventListener("click", sendMessage);

chatInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

async function sendMessage() {

    const message = chatInput.value.trim();

    if (message === "") {
        return;
    }

    // User message
    const userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.textContent = message;

    chatMessages.appendChild(userMessage);

    chatInput.value = "";

    chatMessages.scrollTop = chatMessages.scrollHeight;

    try {

        const response = await fetch("/chat", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                message: message,
                language: "en"
            })
        });

        const data = await response.json();

        const botMessage = document.createElement("div");
        botMessage.className = "bot-message";

        if (response.ok) {

            botMessage.textContent =
                "🌱 " + data.reply;

        } else {

            console.error("Server Error:", data);

            botMessage.textContent =
                "❌ " + (data.reply || "AI response error.");
        }

        chatMessages.appendChild(botMessage);

        chatMessages.scrollTop =
            chatMessages.scrollHeight;

    } catch (error) {

        console.error("Chat error:", error);

        const botMessage = document.createElement("div");
        botMessage.className = "bot-message";

        botMessage.textContent =
            "❌ Unable to connect to AI.";

        chatMessages.appendChild(botMessage);
    }
}

// =========================
// SMART IRRIGATION
// =========================

async function loadIrrigationData() {

    try {

        const response = await fetch("/irrigation");

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Irrigation data unavailable");
        }

        document.getElementById("irrigationStatus").textContent =
            data.irrigation_status;

        document.getElementById("soilMoisture").textContent =
            data.soil_moisture + "%";

        document.getElementById("irrigationTemp").textContent =
            data.temperature + "°C";

        document.getElementById("irrigationHumidity").textContent =
            data.humidity + "%";

        document.getElementById("bestIrrigationTime").textContent =
            data.best_time;

        document.getElementById("irrigationRecommendation").textContent =
            data.recommendation;

    } catch (error) {

        console.error("Irrigation Error:", error);

        document.getElementById("irrigationStatus").textContent =
            "Unable to load irrigation data";

        document.getElementById("irrigationRecommendation").textContent =
            "Please try again later.";
    }
}

loadIrrigationData();