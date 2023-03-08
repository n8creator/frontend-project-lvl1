#!/usr/bin/env node
import playGame from '../index.js';

const gameMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const returnGameData = () => {
  // set random number
  const number = Math.floor(Math.random() * 10);

  // generate question and correct answer
  const question = number;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  // return array of [number, correct answer]
  return [String(question), String(correctAnswer)];
};

export default () => {
  playGame(returnGameData, gameMessage);
};
