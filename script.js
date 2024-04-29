const topLimit = 5;
const bottomLimit = 0;
let counter = bottomLimit;

const increaseBtn = document.querySelector('.increase');
const decreaseBtn = document.querySelector('.decrease');
const resetBtn = document.querySelector('.reset');
const resultEl = document.querySelector('.result');
const messageEl = document.querySelector('.message');

const messageAboutTopLimit = `You have reached the top limit - ${topLimit}!`;
const messageAboutBottomLimit = `You have reached the bottom limit - ${bottomLimit}!`;

function handleIncreaseClick() {
  if (resultEl.innerHTML < topLimit) {
    counter++;
    resultEl.innerHTML = counter;
    if (resultEl.innerHTML > bottomLimit) {
      decreaseBtn.disabled = false;
      messageEl.style.visibility = 'hidden';
    }
  } else {
    messageEl.innerHTML = messageAboutTopLimit;
    messageEl.style.visibility = 'visible';
    increaseBtn.disabled = true;
  }
}

function handleDecreaseClick() {
  if (resultEl.innerHTML > bottomLimit) {
    counter--;
    resultEl.innerHTML = counter;
    if (resultEl.innerHTML < topLimit) {
      increaseBtn.disabled = false;
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
