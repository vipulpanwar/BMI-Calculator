function getBMI() {
    var weright, height;
    weight = document.getElementById('weight').value;
    height = document.getElementById('height').value;
    var BMI = (weight) / (height * height);
    BMI = BMI.toFixed(3);

    document.getElementById('result').innerHTML = "Your BMI is. " + BMI;
}