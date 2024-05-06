const freeShippingLimit = 10;
const outOfStockLimit = 20;
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

function addMessageElement(message) {
  const messageElement = createSpanElement(message);
  mainEl.appendChild(messageElement);
}

function removeMessageElement() {
  const messageElement = document.querySelector('.message');
  messageElement.remove();
}

function handleIncreaseClick() {
  counter++;
  resultEl.innerHTML = counter;
  if (counter === bottomLimit + 1) {
    decreaseBtn.disabled = false;
    removeMessageElement();
  }

  if (counter === freeShippingLimit) {
    addMessageElement(messages.freeShipping);
  }

  if (counter === outOfStockLimit) {
    increaseBtn.classList.add('red');
    removeMessageElement();
    addMessageElement(messages.outOfStock);
  }
}

function handleDecreaseClick() {
  counter--;
  resultEl.innerHTML = counter;

  if (counter === outOfStockLimit - 1) {
    increaseBtn.classList.remove('red');
    removeMessageElement();
    addMessageElement(messages.freeShipping);
  }

  if (counter === freeShippingLimit - 1) {
    removeMessageElement();
  }

  if (counter === bottomLimit) {
    decreaseBtn.disabled = true;
    addMessageElement(messages.bottomLimit);
  }
}

function handleResetClick() {
  counter = 0;
  resultEl.innerHTML = counter;
  decreaseBtn.disabled = true;
  increaseBtn.classList.remove('red');
  removeMessageElement();
}

increaseBtn.addEventListener('click', handleIncreaseClick);
decreaseBtn.addEventListener('click', handleDecreaseClick);
resetBtn.addEventListener('click', handleResetClick);
