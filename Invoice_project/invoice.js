function createEle(incomeDiv, add, value1, isAdd) {
    var create = document.createElement("div");
    create.className = "createDiv";
    var des = document.createElement("div");
    des.className = "desDiv";
    des.innerText = add;
    create.appendChild(des);
    var val = document.createElement("div");
    val.className = "desDiv text1";
    val.innerText = value1;
    create.appendChild(val);
    var icon = document.createElement("div");
    icon.className = "iconImage";
    icon.addEventListener("click", isAdd ? addFun : lessFun);
    create.appendChild(icon);
    incomeDiv.appendChild(create);
}
var budgetIncome = document.querySelector(".budget_income");
var budgetValue = document.querySelector(".budget_value");
var budgetExpense = document.querySelector(".budget_expense");
function addFun(e) {
    e.target.parentElement.remove();
    budgetIncome.innerText = Math.round(Number(budgetIncome.innerText) - Number(e.target.parentElement.children[1].innerText));
    budgetValue.innerText = budgetIncome.innerText - budgetExpense.innerText;
}
function lessFun(e) {
    e.target.parentElement.remove();
    budgetExpense.innerText = Math.round(Number(budgetExpense.innerText) - Number(e.target.parentElement.children[1].innerText));
    budgetValue.innerText = budgetIncome.innerText - budgetExpense.innerText;
}
var add = document.querySelector(".add_description");
var value1 = document.querySelector(".add_value");
function display() {
    if (add.value == "" && value1.value == "") {

    }
    else if ((document.querySelector(".add_type").options[0].selected == true) || (document.querySelector(".add_type").options[1].selected == true)) {
        var incomeDiv = document.querySelector(".income");
        createEle(incomeDiv, add.value, value1.value, true);
        budgetIncome.innerText = Math.round(Number(budgetIncome.innerText) + Number(value1.value));
        budgetValue.innerText = budgetIncome.innerText;
        add.value = "";
        value1.value = "";
    }
    else {
        var expenseDiv = document.querySelector(".expense");
        createEle(expenseDiv, add.value, value1.value, false);
        budgetExpense.innerText = Math.round(Number(budgetExpense.innerText) + Number(value1.value));
        budgetValue.innerText = budgetIncome.innerText - budgetExpense.innerText;
        add.value = "";
        value1.value = "";

    }

}
