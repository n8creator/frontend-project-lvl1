#!/usr/bin/env node
import playGame from '../index.js';

const gameMessage = 'Find the greatest common divisor of given numbers.';

const returnGameData = () => {
  // set random numbers
  const first = Math.floor(Math.random() * 10);
  const second = Math.floor(Math.random() * 10);

  // find NOD function
  const findNOD = (x, y) => {
    if (y > x) {
      return findNOD(y, x);
    } if (!y) {
      return x;
    }
    return findNOD(y, x % y);
  };

  const correctAnswer = findNOD(first, second);

  // generate question as a string
  const question = `${first} ${second}`;

  // return array of [number, correct answer]
  return [question, String(correctAnswer)];
};

export default () => {
  playGame(returnGameData, gameMessage);
};
