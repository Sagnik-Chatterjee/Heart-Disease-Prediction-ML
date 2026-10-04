from flask import Flask, request, jsonify
import pickle
import pandas as pd
import joblib
from flask_cors import CORS
app = Flask(__name__)

CORS(app)

model = joblib.load("LogisticRegr_heart.pkl")
scaler = joblib.load("scaler.pkl")
columns = joblib.load("columns.pkl")

@app.route("/predict", methods=["POST"])
def predict():

    try:

        data = request.get_json()

        print("Received:")
        print(data)

        # Convert to DataFrame
        input_data = pd.DataFrame([data])

        # Numerical columns that were used to fit the scaler
        numerical_cols = [
            "Age",
            "RestingBP",
            "Cholesterol",
            "MaxHR",
            "Oldpeak"
        ]

        # Convert numerical values to numeric
        for col in numerical_cols:
            input_data[col] = pd.to_numeric(input_data[col])

        # Scale ONLY the numerical columns
        input_data[numerical_cols] = scaler.transform(
            input_data[numerical_cols]
        )

        # Put all features in the exact order used during model training
        input_data = input_data[columns]

        # Prediction
        prediction = model.predict(input_data)[0]

        # Probability of HeartDisease = 1
        probability = model.predict_proba(input_data)[0][1]

        return jsonify({
            "prediction": int(prediction),
            "probability": float(probability)
        })

    except Exception as e:

        print("Error:", str(e))

        return jsonify({
            "error": str(e)
        }), 400


if __name__ == "__main__":

    app.run(
        host="127.0.0.1",
        port=5000,
        debug=True
    )