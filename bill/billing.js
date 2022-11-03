let item = {
    code: 0,
    name: "",
    quantity: 0,
    per_unit_price: 0,
    amount: 0,
}

let items = [];
function getItemCode(e) {
    item.code = e.target.value;
}
function getItemName(e) {
    item.name = e.target.value;
}
function getQuantity(e) {
    item.quantity = e.target.value;
}
function getPrice(e) {
    item.per_unit_price = e.target.value;
    document.getElementById("amount").value = item.per_unit_price * item.quantity;
    item.amount = document.getElementById("amount").value;
}
function addItem() {
    var code = document.getElementById("code").value;
    var pname = document.getElementById("name").value;
    var quantity = document.getElementById("quantity").value;
    var per_unit_price = document.getElementById("per_unit_price").value;
    var amount = document.getElementById("amount").value;
    if (code && pname && quantity && per_unit_price && amount) {
        items.push(item);
        updateItems();
        document.querySelectorAll("#code,#name,#quantity,#per_unit_price,#amount").forEach((val) => {
            return val.value = "";
        })
    }
}
function deleteItem(i) {
    items.splice(i, 1);
    updateItems();
}
function updateItems() {
    console.log(items);
    total_amount = 0;
    for(var i=0; i<items.length; i++){
    var textContent = document.querySelector(".content");
    var parentEle = document.createElement("div");
    parentEle.className="main";
    textContent.appendChild(parentEle);
    var code = document.createElement("span");
    code.innerText = items[i].code;
    parentEle.appendChild(code);
    var item = document.createElement("span");
    item.innerText = items[i].name;
    parentEle.appendChild(item);
    var quantity = document.createElement("span");
    quantity.innerText = items[i].quantity;
    parentEle.appendChild(quantity);
    var price = document.createElement("span");
    price.innerText = items[i].per_unit_price;
    parentEle.appendChild(price);
    var amount = document.createElement("span");
    amount.innerText = items[i].amount;
    parentEle.appendChild(amount);
    var icon = document.createElement("span");
    icon.className="material-symbols-outlined";
    icon.innerText ="delete";
    parentEle.appendChild(icon);
    icon.addEventListener("click", function(e){
        e.target.parentElement.remove();
        document.querySelector(".gross").innerText =Number(document.querySelector(".gross").innerText)-Number(e.target.previousElementSibling.innerText);
    })
    document.querySelector(".gross").innerText =Number(document.querySelector(".gross").innerText)+Number(amount.innerText);
    items=[];
    }
}