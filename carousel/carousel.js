var parentEle = document.querySelector(".main");
var image = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJQ7ObBrhv7lsowpjupmP02YEAMgudaXfX1Q&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuwj_u_pycUAyBRrOtiBG8CDSVdmUsbSs-1Q&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ305E_jx0OZgPzgaSB3nQhGm5I8dvUPjs6YQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ekMdCVMy3I1iXhK53i0uMPuD5SRSK3OOvg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ77PyJdnWUNBayxNiM85T9RgkPGhsUQtnHJQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZr_73Io5m-f4dY4R-UIEvhGOZyDhl4s8y0w&usqp=CAU"
];
var count = 0;
var array = image.length - 1;
(function createEle() {
    image.forEach((item) => {
        var element = document.createElement("img");
        element.className = "childele";
        element.src = item;
        parentEle.appendChild(element);
    })
})();
function previous() {
    count--;
    var x = document.querySelector(".main");
    x.style.transition = "transform 0.4s ease-in-out";
    x.style.transform += 'translateX(250px)';
    if (count == 0) {
        document.querySelector(".previous").disabled = "true";
    }
    if (count == array - 1) {
        document.querySelector(".next").removeAttribute("disabled");
    }

}
function next() {
    count++;
    var x = document.querySelector(".main");
    x.style.transition = "transform 0.4s ease-in-out";
    x.style.transform += 'translateX(-250px)';
    if (count == array) {
        document.querySelector(".next").disabled = "true";
    }
    if (count == 1) {
        document.querySelector(".previous").removeAttribute("disabled");
    }


}
