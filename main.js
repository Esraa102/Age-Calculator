let inputDate = document.querySelector(".age-calc input");
let calcBtn = document.querySelector(".calc");
let weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let todayDate = new Date();
inputDate.max = new Date().toISOString().split("T")[0];
calcBtn.onclick = () => {
    calcAge();
}


function calcAge() {
if (inputDate.value !== "") {
    document.querySelector(".age-container").innerHTML = "";
    let birthDate = new Date(inputDate.value);
    let diff = todayDate - birthDate;
    let years = Math.floor(diff / (1000 * 60 * 60  * 24 * 365));
    let months = Math.floor((diff % (1000 * 60 * 60  * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    let days = Math.floor((diff % (1000 * 60 * 60  * 24 * 30))  / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60  * 24)) / (1000 * 60 * 60 ));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let div = document.createElement("div");
    div.innerHTML = `Your Are <span>${years}</span> Years , <span>${months}</span> Months, <span>${days}</span> Days, <span>${hours}</span> Hours and <span>${minutes}</span> Minutes Old`
    document.querySelector(".age-container").appendChild(div);
    let birthDayP = document.createElement("p");
    birthDayP.innerHTML = `You Were Born At <span>${weekDays[birthDate.getDay()]}</span>`;
    document.querySelector(".age-container").appendChild(birthDayP);
    inputDate.value = "";
}
else  {
    document.querySelector(".age-container").innerHTML = "";
    alert("Enter Your Birth Date");
}
}


