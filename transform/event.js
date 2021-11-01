function display(e){
    var a = e.x;
    var b = e.y;
    var c = a+b;
    var d = document.querySelector(".circle");
    d.style.left = a +"px";
    d.style.top = b +"px";
    var e = document.querySelector(".container");
    e.style.backgroundColor = "rgb("+a%255+" , "+b%255+" , "+c%255+")";

}