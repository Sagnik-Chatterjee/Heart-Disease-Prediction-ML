const form = document.getElementById("predictionForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const sex = document.getElementById("sex").value;
    const chestPain =
        document.getElementById("chestPain").value;

    const restingECG =
        document.getElementById("restingECG").value;

    const exerciseAngina =
        document.getElementById("exerciseAngina").value;

    const stSlope =
        document.getElementById("stSlope").value;


    const data = {

        Age: Number(
            document.getElementById("age").value
        ),

        RestingBP: Number(
            document.getElementById("restingBP").value
        ),

        Cholesterol: Number(
            document.getElementById("cholesterol").value
        ),

        FastingBS: Number(
            document.getElementById("fastingBS").value
        ),

        MaxHR: Number(
            document.getElementById("maxHR").value
        ),

        Oldpeak: Number(
            document.getElementById("oldpeak").value
        ),


        // Sex
        Sex_M: sex === "M" ? 1 : 0,


        // Chest Pain
        ChestPainType_ATA:
            chestPain === "ATA" ? 1 : 0,

        ChestPainType_NAP:
            chestPain === "NAP" ? 1 : 0,

        ChestPainType_TA:
            chestPain === "TA" ? 1 : 0,


        // Resting ECG
        RestingECG_Normal:
            restingECG === "Normal" ? 1 : 0,

        RestingECG_ST:
            restingECG === "ST" ? 1 : 0,


        // Exercise Angina
        ExerciseAngina_Y:
            exerciseAngina === "Y" ? 1 : 0,


        // ST Slope
        ST_Slope_Flat:
            stSlope === "Flat" ? 1 : 0,

        ST_Slope_Up:
            stSlope === "Up" ? 1 : 0
    };


    try {

        const response = await fetch(
            "http://localhost:5000/predict",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(data)
            }
        );


        const result = await response.json();


        if (!response.ok) {
            throw new Error(result.error);
        }


        const resultDiv =
            document.getElementById("result");


        if (result.prediction === 1) {

            resultDiv.innerHTML = `
                <h2>Heart Disease Detected</h2>

                <p>
                    Probability:
                    ${(result.probability * 100).toFixed(2)}%
                </p>
            `;

        } else {

            resultDiv.innerHTML = `
                <h2>No Heart Disease Detected</h2>

                <p>
                    Probability:
                    ${(result.probability * 100).toFixed(2)}%
                </p>
            `;
        }

    } catch (error) {

        document.getElementById("result").innerHTML = `
            <p>${error.message}</p>
        `;

    }

});