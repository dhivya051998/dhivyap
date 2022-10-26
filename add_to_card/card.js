var productObject = [
    {
        productName: "Bedside Tables",
        amount: "4999",
    },
    {
        productName: "Coffee Tables",
        amount: "4999",
    },
    {
        productName: "Rocking Charis",
        amount: "2000",
    },
    {
        productName: "Sofa",
        amount: "10000",
    },
    {
        productName: "Tv",
        amount: "10000",
    },
    {
        productName: "Fan",
        amount: "5000",
    },

]

function filter(event) {
    var search = productObject.filter((item) => {
        return item.productName.toLowerCase().includes(event.target.value.toLowerCase());
    })
    showElement(search);
}


function showElement(productObject) {
    document.querySelector(".product").innerHTML = "";
    for (var i = 0; i < productObject.length; i++) {
        var card = document.createElement("div");
        card.className = "newCard";
        var text = document.createElement("p");
        text.innerText = productObject[i].productName;
        card.appendChild(text);
        var amount = document.createElement("p");
        amount.innerText = productObject[i].amount;
        card.appendChild(amount);
        var btn = document.createElement("button");
        btn.innerText = "Add to Card";
        btn.className = "button";
        btn.addEventListener("click",createEle)
        card.appendChild(btn);
        document.querySelector(".product").appendChild(card);
    }
}
showElement(productObject);

var num = 1;
var count = 1;
 function createEle (e) {
    var x = e.target.parentElement.children[0].innerText;
    var y = e.target.parentElement.children[1].innerText;
    var productDiv = document.querySelector(".details");
    var product = document.createElement("p");
    product.innerText = x;
    productDiv.appendChild(product);

    var costDiv = document.querySelector(".details");
    var cost = document.createElement("p");
    cost.className = "ProductCost"
    cost.innerText = y;
    costDiv.appendChild(cost);

    var quantityDiv = document.querySelector(".details");
    var less = document.createElement("span");
    less.className = "less";
    less.innerText = "-";
    less.addEventListener("click", lessQuantity);
    quantityDiv.appendChild(less);
    
    var quantity = document.createElement("p");
    quantity.className = "quantityCount"+(num++);
    quantity.innerText = 1;
    quantityDiv.appendChild(quantity);


    var add = document.createElement("span");
    add.className = "add";
    add.innerText = "+";
    add.addEventListener("click", addQuantity);
    quantityDiv.appendChild(add);

    var totalDiv = document.querySelector(".details");
    var total = document.createElement("p");
    total.id = "quantityCount"+(count++);
    total.innerText = Number(cost.innerText) * Number(quantity.innerText);
    totalDiv.appendChild(total);
    document.querySelector(".grossTotal").innerText = Number(document.querySelector(".grossTotal").innerText) + Number(total.innerText);
}


function lessQuantity(e) {
    var quantity = e.target.nextElementSibling;
    var quantityClass = quantity.className;
    var total =document.getElementById(quantityClass).innerText;
    var cost = e.target.previousElementSibling;
    quantity.innerText = Number(quantity.innerText) - 1;
    document.getElementById(quantityClass).innerText= Number(cost.innerText) * Number(quantity.innerText);
    var totalAmount =document.getElementById(quantityClass).innerText;
    document.querySelector(".grossTotal").innerText =Number(document.querySelector(".grossTotal").innerText)-Number(total- totalAmount);
    if (quantity.innerText==0) {
        document.querySelector(".less").style.pointerEvents = "none";
    }
}

function addQuantity(e) {
    var x =e.target.nextElementSibling.innerText;
    var quantity = e.target.previousElementSibling;
    var cost = e.target.previousElementSibling.previousElementSibling.previousElementSibling;
    quantity.innerText = Number(quantity.innerText) + 1;
    e.target.nextElementSibling.innerText= Number(cost.innerText) * Number(quantity.innerText);
    var y =e.target.nextElementSibling.innerText;
    document.querySelector(".grossTotal").innerText = Number(document.querySelector(".grossTotal").innerText) + Number(y-x);
}



