const freeShippingLimit = 10;
const bottomLimit = 0;
let counter = bottomLimit;

const increaseBtn = document.querySelector('.increase');
const decreaseBtn = document.querySelector('.decrease');
const resetBtn = document.querySelector('.reset');
const resultEl = document.querySelector('.result');
const messageEl = document.querySelector('.message');

const messageAboutFreeShipping = 'You have free shipping';
const messageAboutBottomLimit = `You have reached the bottom limit - ${bottomLimit}!`;

function handleIncreaseClick() {
  counter++;
  resultEl.innerHTML = counter;
  if (resultEl.innerHTML > bottomLimit) {
    decreaseBtn.disabled = false;
    messageEl.style.visibility = 'hidden';
  }

  if (resultEl.innerHTML >= freeShippingLimit) {
    messageEl.innerHTML = messageAboutFreeShipping;
    messageEl.style.visibility = 'visible';
  }
}

function handleDecreaseClick() {
  if (resultEl.innerHTML > bottomLimit) {
    counter--;
    resultEl.innerHTML = counter;
    if (resultEl.innerHTML < freeShippingLimit) {
      messageEl.style.visibility = 'hidden';
    }
  } else {
    messageEl.innerHTML = messageAboutBottomLimit;
    messageEl.style.visibility = 'visible';
    decreaseBtn.disabled = true;
  }
}

function handleResetClick() {
  counter = 0;
  resultEl.innerHTML = counter;
  decreaseBtn.disabled = true;
  increaseBtn.disabled = false;
  messageEl.style.visibility = 'hidden';
}

increaseBtn.addEventListener('click', handleIncreaseClick);
decreaseBtn.addEventListener('click', handleDecreaseClick);
resetBtn.addEventListener('click', handleResetClick);
