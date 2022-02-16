var increase = 1;
var value = [];
var newDiv = [];
var a = 1;
var displayTime = 0;
function move() {
    var moveDiv = document.querySelector(".box1");
    var x = document.querySelector(".box2");
    var inputValue = document.querySelector("#time").value;
    var boxDiv = document.querySelector(".box");
    var divWidth = boxDiv.getBoundingClientRect().width;
    console.log(divWidth);
    var z = inputValue/divWidth;
    displayTime +=z;
    document.querySelector(".box1").innerText = displayTime.toFixed(2);
    if (a <= divWidth){  
        x.style.left = (500 + a) + "px";
        moveDiv.style.left = (500+a) + "px";
        a++;
    }
    for (i = 0; i < value.length; i++) {
        if ( value[i] == (500+a)) {
           newDiv[i].style.backgroundColor = "#78c9c8";
         
        }
    }
}
function display(){
    // var moveDiv = document.querySelector(".box1");
    // var x = document.querySelector(".box2");
    var boxDiv = document.querySelector(".box");
    var divWidth = boxDiv.getBoundingClientRect().width;
    var inputValue = document.querySelector("#time").value;
    var z = inputValue/divWidth;
    setInterval(() => {
        if (a <= divWidth){
            move(); 
        }  
     },z*1000);
}
function createBox(e) {
    var x = document.querySelector(".createDiv1");
    var y = x.cloneNode(true);
    y.removeAttribute("id");
    var create = document.querySelector(".container");
    create.appendChild(y);
    y.style.left = e.x + "px";
    value.push(e.x);
    

    var a = document.querySelector(".createDiv2");
    var b = a.cloneNode(true);
    b.removeAttribute("id");
    var create = document.querySelector(".container");
    create.appendChild(b);
    b.style.left = e.x + "px";
    var inputValue = document.querySelector("#time").value;
    var x = e.x - 500;
    newDiv.push(b);
    console.log(newDiv);
    var boxDiv = document.querySelector(".box");
    var divWidth = boxDiv.getBoundingClientRect().width;
    // var percentage = x / 600 * 100;
    // var time = 60 / 100 * percentage;
    // b.innerHTML = "0" + ":" + Math.floor(time) + "<br>" + "Task- " + increase;
    // increase++;
    var position = inputValue/divWidth*x;
    console.log(position);
    b.innerHTML = position.toFixed(2);
}

