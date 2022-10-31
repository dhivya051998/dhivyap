function showEmployees(ele){
    var element = document.querySelectorAll(".Front-EndDeveloper,.Back-EndDeveloper,.ProjectManager");
    element.forEach(box => {
        box.style.display="none";
        var x = document.querySelectorAll("." + ele);
        x.forEach(y=>{
            y.style.display ="flex";
        }) 
    });
}
function displayAll(){
    var element = document.querySelectorAll(".Front-EndDeveloper,.Back-EndDeveloper,.ProjectManager");
    element.forEach(box => {
        box.style.display="flex";
    })
}