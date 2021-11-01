
setInterval(display, 500);
var increase = 1;
var value = [];
var a = 1;
function display(){
    var x = document.querySelector(".box2");
    if(a<=600){
        x.style.left = (500+a) + "px";
        a++;
    }
    for(i=0; i<value.length; i++){
        if((500+a) == value[i]){
            document.querySelector(".createDiv2").style.backgroundColor = "red";
            // alert("same position");
        }
    }
} 
function createBox(e){
    var x = document.querySelector(".createDiv1");
    var y = x.cloneNode(true);
    y.removeAttribute("id");
    var create = document.querySelector(".box");
    create.appendChild(y);
    y.style.left = e.x + "px";
    value.push(e.x);
    console.log(value);

 
    var a = document.querySelector(".createDiv2");
    var b = a.cloneNode(true);
    b.removeAttribute("id");
    var create = document.querySelector(".box");
    create.appendChild(b);
    b.style.left = e.x+ "px"; 
    var x = e.x - 500;
    var percentage = x/600*100;
    var time = 60/100*percentage;
    b.innerHTML = "0" +":" + Math.floor(time)+ "<br>" +"Task- "+increase;
    increase++;
   
    
}  

