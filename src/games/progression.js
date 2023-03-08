#!/usr/bin/env node
import playGame from "../index.js";

const gameMessage = "What number is missing in the progression?";

// get random int value between min (is inclusive) and max (is exclusive)
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

// define arithmetic progression funcion
const generateProgression = (step, limit) =>
  Array.from({ length: limit }, (_, i) => (i + 1) * step);

const returnGameData = () => {
  // generate values to set progression
  const n = getRandomInt(1, 5);
  const lim = getRandomInt(8, 15);

  // generate progression & set correct answer
  const progression = generateProgression(n, lim);
  const index = getRandomInt(0, progression.length - 1);
  const correctAnswer = progression[index];

  // clone progressioin and modify guessed value at index
  const modifiedProgression = [...progression];
  modifiedProgression[index] = "..";

  // generate question
  const question = modifiedProgression.join(" ");

  // return array of [number, correct answer]
  return [question, String(correctAnswer)];
};

export default () => {
  playGame(returnGameData, gameMessage);
};
