
import { DEFAULT_TIME } from './constants.js';

const duration = DEFAULT_TIME;
const timer = document.querySelector('.timer');
const modal = document.querySelector('.modal');
const btnOk = document.querySelector('.btn-ok');
const secunds = document.querySelector('.secunds');
const minutes = document.querySelector('.minutes');
const hours = document.querySelector('.hours');

const progress = document.querySelector('.progress');

const reset = document.querySelector('.btn-reset');
const start = document.querySelector('.btn-start');
const pause = document.querySelector('.btn-pause');
const modalHour = document.getElementById('hour');
const modalMinute = document.getElementById('minute');
const modalSec = document.getElementById('sec');

function getModalProperts() {
  modal.classList.add('show')
}

function setModalProperts() {
  let sec = modalSec.value < 10 ? '0' + modalSec.value : modalSec.value
  let min = modalMinute.value < 10 ? '0' + modalMinute.value : modalMinute.value
  let hour = modalHour.value < 10 ? '0' + modalHour.value : modalHour.value

  secunds.innerText = sec;
  minutes.innerText = min;
  hours.innerText = hour;
  modal.classList.remove('show')
}

timer.addEventListener('click', getModalProperts);
btnOk.addEventListener('click', setModalProperts);

let countdown = null;

function startTimer() {
  let timehour = +hours.innerHTML
  let timeMin = +minutes.innerHTML
  let timeSec = +secunds.innerHTML

  let newSeconds = timeSec + timeMin * 60 + timehour * 3600

  countdown = setInterval(() => {

    if (newSeconds) {
      setDate(--newSeconds)

    }

    if (newSeconds < 0) {
      clearInterval(countdown);
    }
    
    // ни как не могу сообразить как сделать progressBar..

  }, 1000);

  const line = document.querySelector('.line');
  let width = 100
  line.style.width = `${width}%`;


  function setDate() {
    const remHours = Math.floor(newSeconds / 3600).toString().padStart(2, '0');
    const remMinutes = Math.floor((newSeconds % 3600) / 60).toString().padStart(2, '0');
    const remSecunds = (newSeconds % 60).toString().padStart(2, '0');

    hours.textContent = remHours;
    minutes.textContent = remMinutes;
    secunds.textContent = remSecunds;
  }

}


function pauseTimer() {
  clearInterval(countdown);
  countdown = null;
}

function resetTimer() {
  clearInterval(countdown);
  hours.textContent = '00';
  minutes.textContent = '00';
  secunds.textContent = '00';
}

start.addEventListener('click', startTimer);
pause.addEventListener('click', pauseTimer);
reset.addEventListener('click', resetTimer);

