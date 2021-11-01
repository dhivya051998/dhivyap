var person=[
    {
        name: "red",
        age : 23
    },
    {
        name: "green",
        age : 24
    },
    {
        name: "blue",
        age : 21
    },
    {
        name: "orange",
        age : 23
    },
    {
        name: "yellow",
        age : 20
    }

    ];
    
    function display(){
        var a = document.querySelector(".box");
        var b = a.cloneNode(true);
        b.removeAttribute("id");
        var c = document.querySelector(".container");
        c.appendChild(b);
        var random = Math.round(Math.random()*4);
        b.querySelector(".name").innerText = person[random].name;
        b.querySelector(".age").innerText = person[random].age;
        document.querySelector(".container").appendChild(b);
        


    }