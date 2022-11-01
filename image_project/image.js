function showImage(img_class){
    document.querySelector(".container").style.pointerEvents="none";
    document.querySelector(".allDiv").style.opacity = "0.2";
    document.querySelector(".scale1").style.display = "flex";
    var comment_fields = document.querySelector(".scale1");
    comment_fields.classList.add(img_class);
} 
function closeDiv() {
    document.querySelector(".container").style.pointerEvents="auto";
    document.querySelector(".scale1").style.display = "none";
    document.querySelector(".allDiv").style.opacity = "";
}
