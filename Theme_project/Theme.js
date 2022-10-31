function resize() {
    document.querySelector(".mainDiv").classList.toggle("sizeBox");
}
function darkTheme() {
   document.body.classList.toggle("dark");
   document.querySelector("#light").style.display="flex";
   document.querySelector("#dark").style.display="none";
}
function lightTheme() {
   document.querySelector("#dark").style.display="flex";
   document.querySelector("#light").style.display="none";
   document.body.classList.remove("dark");
}