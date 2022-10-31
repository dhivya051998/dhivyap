function calculate() {
    var height = document.getElementById("heightInput").value;
    console.log(height);
    var weight = document.getElementById("weightInput").value;
    console.log(weight);
    document.querySelector(".number").innerHTML = ((weight / height / height) * 10000).toFixed(2);
}