'use strict';

// Selecting elements
const body = document.querySelector('.body');
const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');

const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add('hidden');
let currentScore = 0;

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  // 2. Display dice
  diceEL.classList.remove('hidden');
  diceEL.src = `./img/dice-${dice}.png`;

  // 3. Check for rolled 1:
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    current0EL.textContent = currentScore;
  } else {
    //switch to next player
  }
});

// Create guide alert
let i = 0;
if (screen.width < 1050) {
  while (i < 3) alert('This website is only available for computers');
  i++;
  body.style.display = 'none';
}
if (screen.height < 1050) {
  while (i < 3) alert('This website is only available for computers');
  i++;
  body.style.display = 'none';
}
