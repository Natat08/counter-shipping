const freeShippingLimit = 10;
const outOfStockLimit = 20;
const bottomLimit = 0;
let counter = bottomLimit;

const increaseBtn = document.querySelector('.increase');
const decreaseBtn = document.querySelector('.decrease');
const resetBtn = document.querySelector('.reset');
const resultEl = document.querySelector('.result');
const messageEl = document.querySelector('.message');

const messageAboutFreeShipping = 'You have free shipping';
const messageAboutOutOfStock = 'Out of stock';
const messageAboutBottomLimit = `You have reached the bottom limit - ${bottomLimit}`;

function handleIncreaseClick() {
  counter++;
  resultEl.innerHTML = counter;
  if (counter > bottomLimit) {
    decreaseBtn.disabled = false;
    messageEl.style.visibility = 'hidden';
  }

  if (counter >= freeShippingLimit && counter < outOfStockLimit) {
    messageEl.innerHTML = messageAboutFreeShipping;
    messageEl.style.visibility = 'visible';
  }

  if (counter >= outOfStockLimit) {
    increaseBtn.classList.add('red');
    messageEl.innerHTML = messageAboutOutOfStock;
    messageEl.style.visibility = 'visible';
  }
}

function handleDecreaseClick() {
  counter--;
  resultEl.innerHTML = counter;

  if (counter >= freeShippingLimit && counter < outOfStockLimit) {
    increaseBtn.classList.remove('red');
    messageEl.innerHTML = messageAboutFreeShipping;
    messageEl.style.visibility = 'visible';
  }

  if (counter < freeShippingLimit) {
    messageEl.style.visibility = 'hidden';
  }

  if (counter === bottomLimit) {
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
  increaseBtn.classList.remove('red');
}

increaseBtn.addEventListener('click', handleIncreaseClick);
decreaseBtn.addEventListener('click', handleDecreaseClick);
resetBtn.addEventListener('click', handleResetClick);
