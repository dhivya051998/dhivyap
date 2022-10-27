function getValue(ele) {
    var num = document.querySelector(".number");
    num.innerText = num.innerText + ele;
}
function result(){
    var num = document.querySelector(".number").innerText;
    var element = num.split("");
    var operator =["+","-","*","/"];
    for(var i=0; i<element.length; i++){
        if(operator.includes(element[i])){
            var index =element.indexOf(element[i]);
            var beforeEle =element.slice(0,index);
            var afterEle =element.slice(index+1,element.length);
            var beforeCount = beforeEle.join("");
            var afterCount = afterEle.join("");
            if("+"==element[i]){
                document.querySelector(".number").innerText = Number(beforeCount)+Number(afterCount);
            }
            else if("-"==element[i]){
                document.querySelector(".number").innerText = Number(beforeCount)-Number(afterCount);
            }
            else if("*"==element[i]){
                document.querySelector(".number").innerText = Number(beforeCount)*Number(afterCount);
            }
            else if("/"==element[i]){
                document.querySelector(".number").innerText = Number(beforeCount)/Number(afterCount);
            }
           
        }
    }
}
function remove(){
    document.querySelector(".number").innerText="";  
}