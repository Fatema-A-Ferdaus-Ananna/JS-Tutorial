//js timing event methods
//setTimeOut() - a work will happend after a certain time
//setInterval() - it will repeat a work after certain time

// setTimeout(()=>{
//     document.write("hello");
// }, 2000)


// setTimeout(display, 2000);

// function display(){
//     document.write("display ");
// }


const saveBtn = document.querySelector(".save");
const msg = document.querySelector(".para");
const read = document.querySelector(".read");
const countBtn = document.querySelector(".count");
const timecount = document.querySelector(".time_count");
const readingtime = document.querySelector(".reading_time");
const stopBtn = document.querySelector(".stop");

read.style.display = "none";
countBtn.style.display = "none";
stopBtn.style.display = "none";

saveBtn.addEventListener('click', registerUser);

function registerUser(){
    msg.textContent = "User Registration Successful"

    setTimeout(()=>{
        msg.textContent = "";
        saveBtn.style.display = "none";
        read.style.display = "block";
        countBtn.style.display = "block";
    }, 2000);
}

countBtn.addEventListener('click', displayCount);
stopBtn.addEventListener('click', stopCounting);

let flag = true;


function displayCount(){
    readingtime.style.display = "none";
    stopBtn.style.display = "block";
    flag = true;
    let count= 1;
    timecount.textContent = count;

   setInterval(()=>{
        if(flag == false){
            count = 0;
            return;
        }
        else{
            count++;
            timecount.textContent = count;
            let reading_time = "Your Reading Time " + count + " second";
            readingtime.textContent = reading_time;
        }
    }, 1000);
}

function stopCounting(){
    flag = false;
    stopBtn.style.display = "none";
    readingtime.style.display = "block";
}


