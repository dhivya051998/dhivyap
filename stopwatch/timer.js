var x;
var num = 0;
function display() {
    clearInterval(x);
    document.getElementById("min").innerHTML = num++;
    x = setInterval(display, 1000);

}
function stop() {
    clearInterval(x);
}
function reset() {
    clearInterval(x);
    num = 0;
    document.getElementById("min").innerHTML = num;

}
