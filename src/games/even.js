#!/usr/bin/env node
import playGame from '../index.js';

const gameMessage = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0);

const returnGameData = () => {
  // set random number and check if it is correct
  const num = Math.floor(Math.random() * 100);
  const correctAnswer = isEven(num) ? 'yes' : 'no';

  // return array of [number, correct answer]
  return [num, correctAnswer];
};

export default () => {
  playGame(returnGameData, gameMessage);
};
