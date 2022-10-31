var content = document.querySelector(".picture");
var width1 = content.offsetWidth;
var height1 = content.offsetHeight;
function increase() {
    width1 += 20;
    height1 += 20;
    content.style.width = width1 + "px";
    content.style.height = height1 + "px";
}
function decrease() {
    width1 -= 20;
    height1 -= 20;
    content.style.width = width1 + "px";
    content.style.height = height1 + "px";
}