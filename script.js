const startClockBtn = document.querySelector('.startBtn');
const hourText = document.querySelector('.textHour');
const minText = document.querySelector('.textMin');
const secText = document.querySelector('.textSec');

startClockBtn.addEventListener('click', startClock);

function startClock(){
    let date = new Date();
    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    min = formatTime(min);
    sec = formatTime(sec);

    // let time = hours + " : " + min + " : " + sec;
    // console.log(time);

    hourText.textContent = hours;
    minText.textContent = min;
    secText.textContent = sec;
    
    setInterval(startClock, 1000);
}

function formatTime(value){
    if(value < 10){
        value = "0" + value;
    }
    return value;
}