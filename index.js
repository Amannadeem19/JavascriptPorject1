const hourEl = document.querySelector(".hour");
const minEl = document.querySelector(".minute");
const secEl = document.querySelector(".sec");


function Clock(){

    const getTime = new Date();

    const hour = getTime.getHours();
    const mins = getTime.getMinutes();
    const sec = getTime.getSeconds();

    const HourDeg = (hour/12) * 360;
    hourEl.style.transform = `rotate(${HourDeg}deg)`;

    const MinDeg = (mins/60)*360;
    minEl.style.transform = `rotate(${MinDeg}deg)`;

    const secDeg = (sec/60)*360;
    secEl.style.transform  = `rotate(${secDeg}deg)`;



}

setInterval(Clock, 1000);
