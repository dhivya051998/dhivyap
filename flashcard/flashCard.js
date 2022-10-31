function display1() {
    document.querySelector(".content").style.display = "flex";
}
function close1() {
    document.querySelector(".content").style.display = "none";
}
function createBox() {
    var text01 = document.querySelector(".text1").value;
    var text02 = document.querySelector(".text2").value;
    if (text01 == "" || text02 == "") {

    }
    else {
        var text01 = document.querySelector(".text1").value;
        var text02 = document.querySelector(".text2").value;
        var card = document.createElement("div");
        card.className = "emptyBox";
        var text1 = document.createElement("p");
        text1.className = "questionBox";
        text1.innerText = text01;
        card.appendChild(text1);
        var text2 = document.createElement("p");
        text2.innerText = text02;
        text2.className = "answerBox";
        card.appendChild(text2);
        var createDiv = document.createElement("div");
        createDiv.className = "newDiv";
        card.appendChild(createDiv);
        var btn1 = document.createElement("button");
        btn1.innerText = "Edit";
        btn1.className = "editBtn";
        createDiv.appendChild(btn1);
        btn1.addEventListener("click", function (e) {
            document.querySelector(".text1").value = e.target.parentElement.parentElement.children[0].innerText;
            document.querySelector(".text2").value = e.target.parentElement.parentElement.children[1].innerText;
            e.target.parentElement.parentElement.remove();

        })
        var btn2 = document.createElement("button");
        btn2.innerText = "Delete";
        btn2.className = "delBtn";
        createDiv.appendChild(btn2);
        btn2.addEventListener("click", function (e) {
            e.target.parentElement.parentElement.remove();
        })
        var x = document.querySelector(".output");
        x.appendChild(card);
        document.querySelector(".text1").value = "";
        document.querySelector(".text2").value = "";

    }

}