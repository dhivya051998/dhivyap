setInterval(rotate,1000);
var hour = document.querySelector(".hours");
var minute = document.querySelector(".minutes");
var second = document.querySelector(".seconds");
function rotate(){
    var date = new Date();
    var secondCount = date.getSeconds()/60;
    var minuteCount = (secondCount+date.getMinutes())/60;
    var hourCount = (minuteCount+date.getHours())/12;
    setValue(hour,hourCount);
    setValue(minute,minuteCount);
    setValue(second,secondCount);
}
function setValue(ele,value){
    ele.style.setProperty("--rotation",`${value*360}deg`);
}