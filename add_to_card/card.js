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

]

function filter(event){
    var search=productObject.filter((item)=>{
        return item.productName.toLowerCase().includes(event.target.value.toLowerCase());
    })
    showElement(search);
    }
showElement(productObject);
function showElement(productObject){
document.querySelector(".product").innerHTML="";   
for (var i = 0; i < productObject.length; i++) {
    var card = document.createElement("div");
    card.className = "newCard";
    var text = document.createElement("p");
    text.innerText = productObject[i].productName;
    card.appendChild(text);
    var amount = document.createElement("p");
    amount.innerText =productObject[i].amount;
    card.appendChild(amount);
    var btn = document.createElement("button");
    btn.innerText = "Add to Card";
    btn.className = "button";
    btn.addEventListener("click", function (e) {
        var x = e.target.parentElement.children[0].innerText;
        var y = e.target.parentElement.children[1].innerText;
        var productDiv = document.querySelector(".productList");
        var product = document.createElement("p");
        product.innerText = x;
        productDiv.appendChild(product);
        var costDiv = document.querySelector(".cost");
        var cost = document.createElement("p");
        cost.innerText = y;
        costDiv.appendChild(cost);
        document.querySelector(".total").innerText =parseInt(document.querySelector(".total").innerText )+parseInt(y);
    })
    card.appendChild(btn);
    document.querySelector(".product").appendChild(card);
}
}


