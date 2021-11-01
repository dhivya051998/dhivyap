function move(e){
    var circle = document.querySelector(".circle");
    var node = circle.cloneNode(true);
    node.removeAttribute("id");
    var z = document.querySelector(".container");
    z.appendChild(node);
    node.style.left = e.x + "px";
    node.style.top = e.y + "px";
    var color = document.querySelector("#color").value;
    var size = document.querySelector("#size").value;
    node.style.backgroundColor = color;
    node.style.height = size + "px";
    node.style.width = size + "px";
    

}