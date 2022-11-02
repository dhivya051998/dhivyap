function createEle(taskList, inputContent, iconEle, eleId) {
    var createEle = document.createElement("div");
    createEle.className = "incompletetaskBox";
    createEle.id = eleId;
    var taskContent = document.createElement("p");
    taskContent.innerText = inputContent;
    createEle.appendChild(taskContent);
    var icon = document.createElement("div");
    icon.className = "todo_action";
    var add = document.createElement("span");
    add.className = "material-symbols-outlined";
    add.innerText = iconEle;
    add.addEventListener("click", function(ele){
        if(add.innerText=="check"){
            addElement(ele);
        }
        else{
            lessElement(ele);
        }
    })
    icon.appendChild(add);
    var remove = document.createElement("span");
    remove.className = "material-symbols-outlined";
    remove.innerText = "delete";
    remove.addEventListener("click", removeElement);
    icon.appendChild(remove);
    createEle.appendChild(icon);
    taskList.appendChild(createEle);
    document.querySelector(".input_field").value = "";
}
function addElement(e) {
    var taskList1 = document.querySelector(".complete");
    var content = e.target.parentElement.parentElement.children[0].innerText;
    e.target.parentElement.parentElement.remove()
    createEle(taskList1,content, "close", "todo_complete");
}
function lessElement(e){
    var taskList = document.querySelector(".incomplete");
    var content1 = e.target.parentElement.parentElement.children[0].innerText;
    e.target.parentElement.parentElement.remove()
    createEle(taskList,content1, "check", "todo_incomplete");
}
function removeElement(e) {
    e.target.parentElement.parentElement.remove();
}
function createTask() {
    var taskList = document.querySelector(".incomplete");
    var inputContent = document.querySelector(".input_field");
    if (inputContent.value != "") {
        createEle(taskList, inputContent.value, "check", "todo_incomplete");
    }
}