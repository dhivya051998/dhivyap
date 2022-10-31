function getValue() {
    var inputVal = document.getElementById("card_num").value;
    if (inputVal.length <= 16) {
        var final = "  ";
        for (var i = 0; i < inputVal.length; i++) {
            if (i % 4 === 0) {
                final += "   " + inputVal[i]; 
            }
            else {
                final += inputVal[i];
            }
        }
        document.querySelector(".card_number").innerHTML = final;
    }
}
function getValue1() {
    var inputVal1 = document.getElementById("card_text").value;
    document.querySelector(".name").innerHTML = inputVal1;
}
function getValueDisplay() {
    var select1 = document.getElementById("selectDate").value;
    document.querySelector(".date").innerHTML = select1;
    var select2 = document.getElementById("model").value;
    document.querySelector(".year").innerHTML = select2;
}
function getcvvValue() {
    var whiteCard = document.querySelector('.newDiv2');
    var val = document.querySelector(".num").value;
    whiteCard.innerText =val;
}
function focusElement(ele){
    document.querySelector("."+ele).classList.add("input_add");
}
function mouseoutFunction(x) {
    document.querySelector("."+x).classList.remove("input_add");
}
function Cardrotate() {
    document.querySelector(".card").classList.remove("rotateCard1");
    document.querySelector(".card").classList.add("rotateCard");
    document.querySelectorAll(".card_list,.btn01,.card_list1").forEach((ele)=>{
        ele.style.display="none";
    });
    var blockCard = document.createElement("div");
    blockCard.className = "newDiv1";
    document.querySelector(".card").appendChild(blockCard);
    var parentEle = document.createElement("div");
    parentEle.className = "para";
    var whiteCard = document.createElement("div");
    whiteCard.className = "newDiv2";
    parentEle.appendChild(whiteCard);
    document.querySelector(".card").appendChild(parentEle);
    var cardIcon = document.createElement("div");
    cardIcon.className = "newDiv3";
    var icon = document.createElement("div");
    icon.className = "card_type1";
    cardIcon.appendChild(icon);
    document.querySelector(".card").appendChild(cardIcon);

}
function display() {
    document.querySelector(".card").classList.add("rotateCard1");
    document.querySelector(".card").classList.remove("rotateCard");
    document.querySelectorAll(".card_list,.btn01,.card_list1").forEach((ele)=>{
        ele.style.display="flex";
    });
    document.querySelectorAll(".newDiv1,.para,.newDiv3").forEach((ele)=>{
        ele.remove();
    });
}
function empty() {
    document.querySelectorAll("#card_num,#card_text,.num,.newDiv3").forEach((x)=>{
        x.value="";
    })
    document.querySelector("#selectDate").value = "Month";
    document.querySelector("#model").value= "Year";
    document.querySelector(".card_number").innerText="#### #### #### ####";
    document.querySelector(".name").innerText="FULL NAME";
    document.querySelector(".date").innerText="MM";
    document.querySelector(".year").innerText="YY";

}
function createCard() {
    var num = document.querySelector("#card_num").value; 
    var name = document.querySelector("#card_text").value;
    var month = document.querySelector("#selectDate").value;
    var year = document.querySelector("#model").value;
    var cvvNum = document.querySelector(".num").value;
    if (num == "" || name == "" || month == "Month" || year == "Year" || cvvNum == "") {
        alert("please fill the field");
    }else{
        alert("create debit card successfully");
        empty();
    }
}