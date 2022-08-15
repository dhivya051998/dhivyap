var vehicle1 = {
    id: "V001",
    type: "car"
}
var vehicle2 = {
    id: "V002",
    type: "van"
}
var vehicle3 = {
    id: "V003",
    type: "bus"
}
var tolltime = new Date().getTime();
var tollbooths = {
    "Tb011": {
        id: "Tb011",
        pairboothId: "Tb012",
        passedvehicles: {
            "V001": { time: tolltime - (10 * 1000 * 60 * 60) },
            // "V002": { time: tolltime - (10 * 1000 * 60 * 60) },
            // "V003": { time: tolltime - (40 * 1000 * 60 * 60) }, 
        }

    },
    "Tb012": {
        id: "Tb012",
        pairboothId: "Tb011",
        passedvehicles: {
            "V001": { time: tolltime - (10 * 1000 * 60 * 60) },
            // "V002": { time: tolltime - (10 * 1000 * 60 * 60) },
            // "V003": { time: tolltime - (10 * 1000 * 60 * 60) },

        },

    }
}
function myFunction(tollbooth, vehicle, total) {
    var charges = 0;
    var v = vehicle;
    var currentTime = new Date().getTime();
    if ((tollbooths[tollbooth].passedvehicles[v] != null)) {
        var billingTime = tollbooths[tollbooth].passedvehicles[v].time;
        var diff = Math.round((currentTime - billingTime) / (1000 * 60 * 60));
        console.log(diff);
        if (diff < 24) {
            charges = 0;
        }
        else {
            var pairbooth = tollbooths[tollbooth].pairboothId;
            if ((tollbooths[pairbooth].passedvehicles[v] != null)) {
                var billing = tollbooths[pairbooth].passedvehicles[v].time;
                console.log(billing, currentTime);
                var currentTime = new Date().getTime();
                var diff1 = Math.round((currentTime - billing) / (1000 * 60 * 60));
                console.log(diff1);
                if (diff1 < 24) {
                    charges = 0;
                    if (total == 0) {
                        charges = 0;
                    }
                    else {
                        charges = 30;
                    }

                } else {
                    charges = 50;  
                    tollbooths[tollbooth].passedvehicles[v] = { time: currentTime };
                }
            } else {
                charges = 50;
                tollbooths[tollbooth].passedvehicles[v] = { time: currentTime };

            }
        }
    } else {
        var pairbooth = tollbooths[tollbooth].pairboothId;
        if ((tollbooths[pairbooth].passedvehicles[v] != null)) {
            var billing = tollbooths[pairbooth].passedvehicles[v].time;
            console.log(billing, currentTime);
            var currentTime = new Date().getTime();
            var diff1 = Math.round((currentTime - billing) / (1000 * 60 * 60));
            console.log(diff1);
            if (diff1 < 24) {
                charges = 30;

            } else {
                charges = 50;
                tollbooths[tollbooth].passedvehicles[v] = { time: currentTime };
            }
        } else {
            charges = 50;
            tollbooths[tollbooth].passedvehicles[v] = { time: currentTime };

        }
    }
    return charges;
}


function move(el) {
    document.querySelector(".toll_road1").appendChild(el);
    setTimeout(newDiv, 1000);
    function newDiv() {
        el.classList.add("box1");
    };
    setTimeout(newDiv2, 6000);
    function newDiv2() {
        var vehicle = el.getAttribute("id");
        var a = el.innerText;
        el.innerText = myFunction("Tb012", vehicle, a);
        el.classList.add("box2");
    };
    setTimeout(newDiv3, 12000);
    function newDiv3() {
        document.querySelector(".toll_road4").appendChild(el);
        el.classList.remove("box1");
        el.classList.remove("box2");
    };
    el.removeAttribute('onclick');
    el.addEventListener("click", newDiv4);
    function newDiv4() {
        el.style.top = '0%';
        document.querySelector(".toll_road2").appendChild(el);
        setTimeout(() => {
            el.style.top = '45%';
            el.style.transitionDuration = '2s';
            el.style.transitionDelay = "1s";
        }, 1000);
        setTimeout(() => {
            var vehicle = el.getAttribute("id");
            var a = el.innerText;
            el.innerText = myFunction("Tb011", vehicle, a);
            el.style.top = "85%";
            el.style.transitionDuration = "2s";
        }, 4000);
        setTimeout(() => {
            el.style.top = "0%";
            document.querySelector(".toll_road3").appendChild(el);
        }, 7000);
       

    };

};
