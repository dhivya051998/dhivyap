function showElement1(){
    document.querySelector(".allTaskbtn").style.display="flex";
    document.querySelector(".toggle_btn1").style.backgroundColor ="#DE3963";
    document.getElementById("listIcon").style.display="none";
}
function showElement2(){
    document.getElementById("listIcon").style.display="flex";
    document.querySelector(".allTaskbtn").style.display="none";
}
function display1(num){
    document.querySelectorAll("#task1,#task2,#task3,#task4").forEach((ele)=>{
         ele.style.display="none";
    })
    document.getElementById('task'+num).style.display='block'
    document.querySelector(".allTaskbtn").style.display="none";
    document.getElementById("listIcon").style.display="flex";
}