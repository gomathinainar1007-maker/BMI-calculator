function calculateBMI() {

    let height = Number(
        document.getElementById("height").value
    );

    let weight = Number(
        document.getElementById("weight").value
    );

    if (height <= 0 || weight <= 0) {
        document.getElementById("result").innerText =
            "Please enter valid values";
        return;
    }

    let heightMeter = height / 100;

    let bmi = weight / (heightMeter * heightMeter);

    document.getElementById("result").innerText =
        "Your BMI is " + bmi.toFixed(2);
}
function clearFields() {
    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("result").innerHTML = "";
}