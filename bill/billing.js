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
        document.querySelectorAll("#code,#name,#quantity,#per_unit_price,#amount").forEach((val)=>{
            return val.value="";
        })
    }
}
function deleteItem(i) {
    items.splice(i, 1);
    updateItems();
}
function updateItems() {
    console.log(items)
    total_amount = 0;
    let table = "<tr><th>Code</th><th>Item</th><th>Quantity</th><th>Per_Piece_Price</th><th>Amount</th></tr>";
    for (let i = 0; i < items.length; i++) {
        table += `<tr> <td>${items[i].code}</td><td>${items[i].name}</td><td>${items[i].quantity}</td><td>${items[i].per_unit_price}</td><td>Rs ${items[i].amount}</td><td><button onclick="deleteItem(${i})">Delete</button></td></tr>`
        total_amount += items[i].amount;
    }
    table += `<tr><td>Total amount without GST</td><td>Rs/- ${Number(total_amount)}</td></tr><tr><td>GST (12%)</td><td>Rs/- ${Number(((total_amount / 100) * 12)).toFixed()}</td></tr><tr><td>Total amount with GST </td><td>Rs/- ${(Number(total_amount) + Number((total_amount / 100) * 12)).toFixed()}</td></tr>`;
    document.getElementById('output').innerHTML = table;
}