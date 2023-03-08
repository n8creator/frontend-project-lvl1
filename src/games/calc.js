#!/usr/bin/env node
import playGame from '../index.js';

const gameMessage = 'What is the result of the expression?';

const returnGameData = () => {
  // set random numbers
  const first = Math.floor(Math.random() * 10);
  const second = Math.floor(Math.random() * 10);

  // set random operator
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];

  // calculate expression
  let correctAnswer;
  switch (operator) {
    case '+':
      correctAnswer = first + second;
      break;
    case '-':
      correctAnswer = first - second;
      break;
    case '*':
      correctAnswer = first * second;
      break;
    default:
      break;
  }

  // generate question as a string
  const question = `${first} ${operator} ${second}`;

  // return array of [number, correct answer]
  return [question, String(correctAnswer)];
};

export default () => {
  playGame(returnGameData, gameMessage);
};
