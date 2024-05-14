
import { DEFAULT_TIME } from './constants.js';

const duration = DEFAULT_TIME;
const timer = document.querySelector('.timer');
const modal = document.querySelector('.modal');
const btnOk = document.querySelector('.btn-ok');
const secunds = document.querySelector('.secunds');
const minutes = document.querySelector('.minutes');
const hours = document.querySelector('.hours');

const progress = document.querySelector('.progress')
const reset = document.querySelector('.btn-reset');
const start = document.querySelector('.btn-start');
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
  let timeSec = secunds.innerHTML
  let timeMin = minutes.innerHTML
  let timehour = hours.innerHTML

  countdown = setInterval(() => {
    
    
    
  }, 1000)

}

start.addEventListener('click', startTimer);