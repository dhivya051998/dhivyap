function convertWeight(){ 
    var input = document.querySelector("input").value;
    var option = document.querySelector("select").value;
    if(input == ""){
        alert("Please enter a weight.");
    }
    else{
        if(option === "kg"){
            document.querySelector(".value").innerHTML=(input * 0.45).toFixed(2) + "lbs";
           
        }
        else if(option === "pounds"){
            document.querySelector(".value").innerHTML= (input*2.2).toFixed(2) + "kg";
        }
    }
}