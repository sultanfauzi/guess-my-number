'use strict';

// const message = document.querySelector('.message').textContent = 'Correct Number🚀'

// const num  = document.querySelector('.number').textContent = '23'

// const guess = document.querySelector('.guess').value
let score = 20;
let highscore = 0;

let number = Math.trunc(Math.random() * 20) + 1;
function textMessage(message) {
  document.querySelector('.message').textContent = message;
}
const button = document
  .querySelector('.check')
  .addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
      textMessage('⛔No Number');
    } else if (guess === number) {
      textMessage('🚀 Correct Number');
      document.querySelector('.number').textContent = number;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.guess').disabled = true;
      document.querySelector('.number').style.width = '30rem';
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else if (guess !== number) {
      if (score > 1) {
        textMessage(guess > number ? 'to High 📈' : 'to Low 📉');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        textMessage('💥You lost the game');
        score--;
        document.querySelector('.score').textContent = 0;
      }
    }
  });
const restButton = document
  .querySelector('.again')
  .addEventListener('click', function () {
    score = 20;
    number = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = '?';
    textMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = null;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').disabled = false;
  });
