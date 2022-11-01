var Fname = document.getElementById("fname");
var Mail = document.getElementById("mail01");
var pwd = document.getElementById("password");
var cpwd = document.getElementById("cpwd");
var number = document.getElementById("num");
var date = document.getElementById("date");
var gender = document.getElementById("gender");

var nameTooltip = document.querySelector("#tooltip1");
function validate1() {
    var reg = /^[A-Za-z]+$/;
    if (Fname.value == "") {
        nameTooltip.innerText = "please enter the Firstname";
    }
    else if (reg.test(Fname.value) == false) {
        nameTooltip.innerText = "Please enter valid Firstname.";
    }
    else {
        nameTooltip.innerText = "";
    }
}
var mailTooltip = document.querySelector("#tooltip2");
function validate3() {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (Mail.value == "") {
        mailTooltip.innerText = "please enter the Mail Id";

    }
    else if (reg.test(Mail.value) == false) {
        mailTooltip.innerText = "Please enter valid Mail Id.";

    }
    else {
        mailTooltip.innerText = "";
    }
}
var passwordTooltip = document.querySelector("#tooltip3");
function validate4() {
    var reg = /(?=.*\d)(?=.*[a-z]).{8,}/;
    if (pwd.value == "") {
        passwordTooltip.innerText = "please enter the password";

    }
    else if (reg.test(pwd.value) == false) {
        passwordTooltip.innerText = "please enter the valid password";

    }
    else {
        passwordTooltip.innerText = "";
    }
}
var correctpwdTooltip = document.querySelector("#tooltip4");
function validate5() {
    var reg = /(?=.*\d)(?=.*[a-z]).{8,}/;
    if (cpwd.value == "") {
        correctpwdTooltip.innerText = "please enter the password";
    }
    else if (pwd.value != cpwd.value) {
        correctpwdTooltip.innerText = "password mismatched";
        document.querySelector(".btn").style.pointerEvents="none";
    }
    else if (pwd.value == cpwd.value) {
        correctpwdTooltip.innerText = "";
        document.querySelector(".btn").style.pointerEvents="auto";
    }
}

function submitvalidation() {
    if (Fname.value == "" || Mail.value == "" || pwd.value == "" || cpwd.value == "") {
        alert("please fillup the fields")
    }
    else {
        document.querySelector(".box1").style.display = "none";
        document.querySelector(".mainContainer").style.display = "flex";
        document.querySelector(".gmail").innerText = Mail.value;
    }
}
var x = document.getElementById("checkbox");
function show1() {
    if (x.checked) {
        pwd.type = "text";
        cpwd.type = "text";
    } else {
        pwd.type = "password"
        cpwd.type = "password";
    }
}
var numberTooltip = document.querySelector(".numlabel");
function check01() {
    if (number.value == "") {
        numberTooltip.innerText = "please enter the Mobile number";

    }
    else if (number.length < 10) {
        numberTooltip.innerText = "Please enter 10 Digit Number";

    }
    else {
        numberTooltip.innerText = "";
    }
}
var date = document.querySelector(".datelabel");
function check02() {
    if (date.value == "") {
        date.innerText = "please enter the date ";
    }
    else {
        date.innerText = "";
    }
}
var genderVal = document.querySelector(".selectlabel")
function check03() {
    if (gender.value == "") {
        genderVal.innerText = "please select the Gender ";
    }
    else {
        genderVal.innerText = "";
    }
}
function display() {
    if (number.value == "" || date.value == "" || gender.value == "") {
        alert("Please fillup the Fields")
    }
    else {
        alert("Mail Id created Successfully");
        number.value = "";
        date.value = "";
        gender.value = "";
        document.querySelector(".mainContainer").style.display = "none";
        document.querySelector(".box1").style.display = "flex";
        document.querySelectorAll("#fname,#mail01,#password,#cpwd").forEach(element => {
            element.value = "";
            console.log(element);
        });
        x.checked = false;
    }

}
function back() {
    document.querySelector(".box1").style.display = "flex";
    document.querySelector(".mainContainer").style.display = "none";

}