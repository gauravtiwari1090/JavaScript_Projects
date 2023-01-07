'use strict';
// let name =prompt("Sir/Maam Your Name")
alert(
  "Rules-----> 1.Type Number b/w 1 to 20 !!!!!  2.)Don't Provide Invalid Number "
);
let name = prompt('Enter Your Name');


let secretnumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
const displaymessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displaynumber = function (message) {
  document.querySelector('.number').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //when there is no input
  if (!guess) {
    displaymessage('No 🔢 Number !');
    alert(`Please ${name} provide the number in the check box .`);
    // alert(`${name} Please Provide Valid Input`)
  }
  // when my player wins
  else if (guess === secretnumber) {
    displaymessage('🥇😲 Correct Number !');
    displaynumber(secretnumber);
    score++;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#FF5733';

    document.querySelector('.number').style.width = '30rem';
    alert(`You Win ${name} regards from Owner Mr.Gaurav Tiwari`);

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  //when guess is wrong
  else if (guess !== secretnumber) {
    if (score > 1) {
      displaymessage(guess > secretnumber ? 'Too High 📈' : 'Too Low 📉');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displaymessage('😭 You Lost the Game');

      document.querySelector('.score').textContent = 0;
    }
  }
});

//when the guess is too high

//when the guess is to low

// reseting the background here when user click on again
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  displaymessage('Start guessing ...');
  document.querySelector('.score').textContent = score;
  displaynumber('?');
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
