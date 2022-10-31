function updateInput() {
    document.querySelector(".range1").classList.add("range2");
    document.querySelector(".box2").style.display="flex";
    var val = document.getElementById("inputVal").value
    var rangeval = document.querySelector(".range").value;
    document.getElementById('textInput').innerHTML = rangeval + "%";
    var x = val*rangeval/100;
    document.querySelector(".amount").innerHTML=Math.round(x);
    document.querySelector(".amount1").innerHTML=Math.round(Number(val) + Number(x));
}
function myFun(){
   updateInput();
}
function remove(){
    document.querySelector(".range1").classList.remove("range2");
}