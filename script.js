const freeShippingLimit = 10;
const outOfStockLimit = 15;
const bottomLimit = 0;
let counter = bottomLimit;

const increaseBtn = document.querySelector('.increase');
const decreaseBtn = document.querySelector('.decrease');
const resetBtn = document.querySelector('.reset');
const resultEl = document.querySelector('.result');
const mainEl = document.querySelector('main');

const messages = {
  freeShipping: 'You have free shipping',
  outOfStock: 'Out of stock',
  bottomLimit: `You have reached the bottom limit - ${bottomLimit}`,
};

function createSpanElement(message) {
  const newSpan = document.createElement('span');
  newSpan.className = 'message';
  newSpan.innerHTML = message;
  return newSpan;
}

function addMessageElement(parentElement, message) {
  const messageElement = createSpanElement(message);
  parentElement.appendChild(messageElement);
}

function removeMessageElement() {
  const messageElement = document.querySelector('.message');
  messageElement.remove();
}

function handleIncreaseClick() {
  counter++;
  resultEl.innerHTML = counter;
  if (counter > bottomLimit) {
    decreaseBtn.disabled = false;
  }

  if (counter === freeShippingLimit) {
    addMessageElement(mainEl, messages.freeShipping);
  }

  if (counter === outOfStockLimit) {
    increaseBtn.classList.add('red');
    removeMessageElement();
    addMessageElement(mainEl, messages.outOfStock);
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
