function darkTheme(){
    document.querySelector("#dark2").setAttribute("disabled", true);
    
}
function myFunction(){
    document.querySelector("#dark2").removeAttribute("disabled");
    document.querySelector("#dark1").setAttribute("disabled", true);
    var a = document.querySelector("#dark1");
    var b = document.querySelector("#dark2");
        if(a.hasAttribute("disabled") == true){
            a.removeAttribute("disabled");
            b.setAttribute("disabled", true);
        }
        else{
            a.setAttribute("disabled", true);
            b.removeAttribute ("disabled");
        }
    
}

setTimeout(() => {
    document.querySelector(".lineDiv1").style.display ="none";
    document.querySelector(".image_container").style.display ="none";
    document.querySelector(".container").style.display ="grid";
},2000);
function display(){
    document.querySelector(".zaskNew2").style.display = "flex";
    
}
function mOut(){
    document.querySelector(".zaskNew2").style.display = "none";
}
function display1(){
    document.querySelector(".iframeDiv").style.display = "flex";
}
function display1Out(){
    document.querySelector(".iframeDiv").style.display = "none";
}
function myfunction(){
    document.querySelector(".filterFrame").style.display = "flex";

}
function block(){
    document.querySelector(".filterFrame").style.display = "none";
}
function move(){
    document.querySelector(".sidepar1").style.display = "grid";
}
function moveOver(){
    document.querySelector(".sidepar1").style.display = "none";
}
