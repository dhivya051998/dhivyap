var totalValue = document.querySelector(".display"); 
function getValue(e) {
    var x = e.target;
    if (x.checked) {
        totalValue.innerText = Math.round(Number(totalValue.innerText) + Number(x.parentElement.lastElementChild.innerText));
    } 
    else { 
        totalValue.innerText = Math.round(Number(totalValue.innerText) - Number(x.parentElement.lastElementChild.innerText));
    }

}
function display(ele) {
    let array =document.querySelectorAll(".productName1");
        array.forEach(element => {
            element.checked = false;
            totalValue.innerText = 0;
        });
    if (ele.checked) {
        let array =document.querySelectorAll(".productName1");
        array.forEach(element => {
            element.checked = true;
        });
        array.forEach(ele =>{
            ele.parentElement.lastElementChild.innerText;
            totalValue.innerText =Math.round(Number(totalValue.innerText) + Number(ele.parentElement.lastElementChild.innerText));
        })
    }
    else{
        let array =document.querySelectorAll(".productName1");
        array.forEach(element => {
            element.checked = false;
            totalValue.innerText = 0;
        });
    }


}