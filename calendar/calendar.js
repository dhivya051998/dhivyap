function display(el) {
    if (document.querySelector(".select")) {
        document.querySelector(".select").classList.remove("select");
    }
    el.classList.add('select');

}
// var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var x = 0;
document.querySelector("#month").innerHTML = month[x] + " 2021";

var days = [6, 2, 2, 5, 7, 3, 5, 1, 4, 6, 2, 4];
var y = 0;
document.querySelector(".one").style.gridColumnStart = days[y];

function display1() {
    x = x-1;
    if (x < 0) {
        x = 11;
    }
    y = y-1;
    if (y < 0) {
        y = 11;
    }
    date();
};
function display2() {
    x = x+1;
    if (x > 11) {
        x = 0;
    }
    y = y+1;
    if (y > 11) {
        y = 0;
    }
    date();
};
function date(){
    document.querySelector("#month").innerHTML = month[x] + " 2021";
    document.querySelector(".one").style.gridColumnStart = days[y];  
     if (x == 1) {
        document.querySelector(".date29").style.display = "none";
        document.querySelector(".date30").style.display = "none";
        document.querySelector(".date31").style.display = "none";
    }
    else if (x == 3 || x == 5 || x == 8 || x == 10) {
        document.querySelector(".date31").style.display = "none";
    }
    else {
        document.querySelector(".date29").style.display = "flex";
        document.querySelector(".date30").style.display = "flex";
        document.querySelector(".date31").style.display = "flex";
    }
    
}