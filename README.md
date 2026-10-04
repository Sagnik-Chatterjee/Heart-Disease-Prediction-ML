# Heart Disease Prediction

A machine learning-based web application that predicts the likelihood of heart disease using clinical and physiological patient attributes.

The project covers the machine learning workflow from **Exploratory Data Analysis (EDA) and data preprocessing to model training, evaluation, model selection, and deployment through a Flask REST API**.

---

## Features

* Exploratory Data Analysis (EDA) of the heart disease dataset
* Data preprocessing and feature transformation
* Categorical feature encoding
* Feature scaling
* Training and evaluation of multiple classification algorithms
* Comparison of different machine learning models
* Logistic Regression selected as the final prediction model
* Flask REST API for serving predictions
* Interactive frontend built using HTML, CSS, and JavaScript
* Saved trained model and preprocessing objects for inference

---

## Machine Learning Models

The following supervised machine learning classification algorithms were implemented and evaluated:

* **Logistic Regression**
* **Naive Bayes**
* **K-Nearest Neighbors (KNN)**
* **Decision Tree**
* **Support Vector Machine (SVM)**

After evaluating the models, **Logistic Regression** was selected as the final model used by the application.

---

## Model Performance

The final Logistic Regression model achieved:

| Metric   |      Score |
| -------- | ---------: |
| Accuracy | **85.87%** |
| F1 Score | **87.38%** |

The F1 Score provides a balance between precision and recall and is useful for evaluating classification performance.

---

## Input Features

The final model uses the following 15 features:

```text
Age
RestingBP
Cholesterol
FastingBS
MaxHR
Oldpeak
Sex_M
ChestPainType_ATA
ChestPainType_NAP
ChestPainType_TA
RestingECG_Normal
RestingECG_ST
ExerciseAngina_Y
ST_Slope_Flat
ST_Slope_Up
```

The categorical features are converted into numerical representations during preprocessing.

---

## Project Workflow

```text
Heart Disease Dataset
        │
        ▼
Exploratory Data Analysis
        │
        ▼
Data Preprocessing
        │
        ├── Feature Encoding
        │
        └── Feature Scaling
        │
        ▼
   Model Training
        │
        ├── Logistic Regression
        ├── Naive Bayes
        ├── K-Nearest Neighbors (KNN)
        ├── Decision Tree
        └── Support Vector Machine (SVM)
        │
        ▼
   Model Evaluation
        │
        ▼
 Final Logistic Regression Model
        │
        ▼
 Model Serialization
        │
        ├── LogisticRegr_heart.pkl
        ├── scaler.pkl
        └── columns.pkl
        │
        ▼
    Flask REST API
        │
        ▼
      Frontend
```

---

## Project Structure

```text
Heart-Disease-Prediction/
│
├── Frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── Backend/
│   ├── app.py
│   ├── LogisticRegr_heart.pkl
│   ├── scaler.pkl
│   └── columns.pkl
│
├── EDA/
│   └── Heart.ipynb
│
├── .gitignore
└── README.md
```

> The original `heart.csv` dataset is excluded from the repository using `.gitignore`.

---

## Technologies Used

### Machine Learning

* Python
* Pandas
* NumPy
* Scikit-learn
* Matplotlib
* Seaborn
* Joblib

### Backend

* Python
* Flask
* Flask-CORS

### Frontend

* HTML5
* CSS3
* JavaScript

### Development Tools

* Jupyter Notebook
* Git
* GitHub

---

## Exploratory Data Analysis

The `EDA/Heart.ipynb` notebook contains the exploratory analysis and model development process.

The analysis includes:

* Understanding the dataset
* Examining feature distributions
* Exploring relationships between features
* Analyzing the target variable
* Data preprocessing
* Encoding categorical variables
* Feature scaling
* Training multiple classification models
* Evaluating model performance
* Selecting the final model

---

## Data Preprocessing

The dataset contains both numerical and categorical features.

### Feature Encoding

Categorical variables such as:

* Sex
* Chest Pain Type
* Resting ECG
* Exercise-Induced Angina
* ST Slope

are transformed into numerical features.

### Feature Scaling

The following numerical features are scaled during preprocessing:

```text
Age
RestingBP
Cholesterol
MaxHR
Oldpeak
```

The fitted scaler is saved as:

```text
scaler.pkl
```

This allows the same preprocessing transformation to be applied to new input data.

---

## Model Evaluation

Five classification algorithms were trained and evaluated:

```text
Logistic Regression
Naive Bayes
K-Nearest Neighbors
Decision Tree
Support Vector Machine
```

Based on the evaluation results, **Logistic Regression** was selected as the final model for the prediction application.

The trained model is stored in:

```text
LogisticRegr_heart.pkl
```

---

## Backend

The backend is implemented using **Flask** and provides a REST API for making predictions.

The Flask application loads the following files:

```text
LogisticRegr_heart.pkl
scaler.pkl
columns.pkl
```

### Model Files

| File                     | Purpose                                   |
| ------------------------ | ----------------------------------------- |
| `LogisticRegr_heart.pkl` | Trained Logistic Regression model         |
| `scaler.pkl`             | Fitted scaler used for numerical features |
| `columns.pkl`            | Feature columns and their expected order  |

These files allow the application to perform predictions without retraining the model every time the Flask server starts.

---

## API

### `POST /predict`

The frontend sends the patient's information to the Flask API.

The backend performs the following steps:

```text
User Input
    │
    ▼
Receive JSON Data
    │
    ▼
Create DataFrame
    │
    ▼
Arrange Features
    │
    ▼
Apply Feature Scaling
    │
    ▼
Load Logistic Regression Model
    │
    ▼
Generate Prediction
    │
    ▼
Return Response
```

The API returns the prediction generated by the trained Logistic Regression model.

---

## Frontend

The frontend is built using vanilla HTML, CSS, and JavaScript.

### `index.html`

Contains the structure of the prediction form and user interface.

### `style.css`

Contains the styling and layout of the application.

### `script.js`

Handles:

* Form input
* User interaction
* Collecting patient information
* Sending requests to the Flask API
* Processing the API response
* Displaying the prediction result

---

## Running the Project Locally

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd Heart-Disease-Prediction
```

### 2. Create a Virtual Environment

```bash
python -m venv venv
```

Activate it on Windows:

```bash
venv\Scripts\activate
```

### 3. Install the Required Libraries

Install the Python libraries used by the project:

```bash
pip install flask flask-cors pandas numpy scikit-learn joblib
```

If you want to work with the EDA notebook, install Jupyter and the visualization libraries as well:

```bash
pip install jupyter matplotlib seaborn
```

### 4. Start the Flask Backend

Navigate to the backend directory:

```bash
cd Backend
```

Run the Flask application:

```bash
python app.py
```

The Flask server will start locally.

### 5. Run the Frontend

Open:

```text
Frontend/index.html
```

in your browser.

Make sure the API URL configured in `script.js` points to the Flask backend.

---

## Dataset

The project uses a heart disease dataset containing clinical and physiological attributes such as:

* Age
* Sex
* Resting Blood Pressure
* Cholesterol
* Fasting Blood Sugar
* Maximum Heart Rate
* Oldpeak
* Chest Pain Type
* Resting ECG
* Exercise-Induced Angina
* ST Slope

The original dataset is not included in the GitHub repository and is excluded using `.gitignore`.

---

## Results

The final Logistic Regression model achieved:

**Accuracy:** 85.87%

**F1 Score:** 87.38%

The model was selected after evaluating the implemented classification algorithms on the prepared dataset.

---

## Future Improvements

* Perform cross-validation for more robust model evaluation
* Experiment with additional classification algorithms
* Improve the frontend user experience
* Display prediction probabilities
* Add more visualizations to the application
* Deploy the application to a cloud platform
* Containerize the application using Docker

---

## Disclaimer

This project is developed for **educational and demonstration purposes only**.

The predictions generated by this application should not be considered medical advice or used as a substitute for professional medical diagnosis.

---

## Author

**Sagnik Chatterjee**

Engineering Student | Full-Stack Developer | Machine Learning Enthusiast
