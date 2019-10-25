const ipTime = document.getElementById('ip_time');
const countTime = document.getElementById('para_countTime');
let currentTime = 5;
let btnStart = document.getElementById('btn_start');
let btnStop = document.getElementById('btn_stop');

let timer = setInterval(myTimer, 1000);

btnStart.addEventListener('click',()=>{
    btnStart.disabled = true;
    currentTime = ipTime.value;
    timer = setInterval(myTimer, 1000);
    myTimer()
    
})
btnStop.addEventListener('click',()=>{
    btnStart.disabled = false;
    clearInterval(timer);
    countTime.innerHTML = "Stopped";
})

function myTimer() {
    countTime.innerHTML = currentTime;
    currentTime--;
    if(currentTime < 0){
        clearInterval(timer);
        countTime.innerHTML = "Time's up";
    }
}
