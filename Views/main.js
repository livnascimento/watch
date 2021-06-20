const secDiv = document.getElementById('sec');
const minDiv = document.getElementById('min');
const hourDiv = document.getElementById('hour');

console.log(secDiv);

setInterval(setTime, 1000);

function setTime(){
    let date = new Date();
    console.log(date);

    let sec = date.getSeconds() / 60;
    let min = date.getMinutes() / 60;
    let hour= date.getHours() / 12;

    secDiv.style.transform = "rotate(" + (sec * 360) + "deg)";
    minDiv.style.transform = "rotate(" + (min * 360) + "deg)";
    hourDiv.style.transform = "rotate(" + (hour * 360) + "deg)";
};

setTime();