
function move(){
   var x = new Date();
   var d = x.getDate();
   var h = x.getHours();
   var m = x.getMinutes();
   var s = x.getSeconds();
   document.querySelector(".time").innerHTML = d + "," + h + ":" + m  + ":" + s;
  

}
setInterval(move, 1000);

