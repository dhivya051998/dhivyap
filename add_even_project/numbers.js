function showbox() {
    var card = document.createElement("div");
    card.className = "model";
    document.getElementById("box").appendChild(card);
    card.innerHTML = Math.floor(Math.random() * 100);
    card.addEventListener("click", function () {
        displaybox(card);
    });
};
function displaybox(card) {
    var a = card.innerText;
    var c = card;
    if (a % 2 === 0) {
        document.querySelector("#white").appendChild(c);
    }
    else {
        document.querySelector("#black").appendChild(c);
    }
};