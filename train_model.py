import tensorflow as tf
from tensorflow.keras import layers, models
from tensorflow.keras.applications import MobileNetV2
from tensorflow.keras.preprocessing.image import ImageDataGenerator

# ==============================
# DATASET PATH
# ==============================

DATASET_PATH = r"C:\Users\mayur\OneDrive\Desktop\Agriweb\plantvillage"

IMG_SIZE = 224
BATCH_SIZE = 32

# ==============================
# LOAD DATASET
# ==============================

datagen = ImageDataGenerator(
    rescale=1.0 / 255,
    validation_split=0.2
)

train_data = datagen.flow_from_directory(
    DATASET_PATH,
    target_size=(IMG_SIZE, IMG_SIZE),
    batch_size=BATCH_SIZE,
    class_mode="categorical",
    subset="training",
    shuffle=True
)

validation_data = datagen.flow_from_directory(
    DATASET_PATH,
    target_size=(IMG_SIZE, IMG_SIZE),
    batch_size=BATCH_SIZE,
    class_mode="categorical",
    subset="validation",
    shuffle=False
)

# ==============================
# MODEL
# ==============================

base_model = MobileNetV2(
    weights="imagenet",
    include_top=False,
    input_shape=(IMG_SIZE, IMG_SIZE, 3)
)

base_model.trainable = False

model = models.Sequential([
    base_model,

    layers.GlobalAveragePooling2D(),

    layers.Dense(128, activation="relu"),

    layers.Dropout(0.3),

    layers.Dense(
        train_data.num_classes,
        activation="softmax"
    )
])

# ==============================
# COMPILE
# ==============================

model.compile(
    optimizer="adam",
    loss="categorical_crossentropy",
    metrics=["accuracy"]
)

# ==============================
# TRAIN
# ==============================

history = model.fit(
    train_data,
    validation_data=validation_data,
    epochs=5
)

# ==============================
# SAVE MODEL
# ==============================

model.save("model/crop_disease_model.keras")

print("\n===================================")
print("MODEL TRAINING COMPLETED!")
print("Model saved successfully.")
print("===================================")