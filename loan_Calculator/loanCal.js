function getMonth() {
    var amount = document.getElementById("lamount").value;
    var rate = document.getElementById("rate").value;
    var month = document.getElementById("month").value;
    var value1 = Number(amount) * Number(rate)/100;
    var y = Number(amount) + value1;
    console.log(y);
    var z = Math.round(y/month);
    document.querySelector(".amount").innerHTML = z;
    document.querySelector(".footer").style.visibility = "visible";
}