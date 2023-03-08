#!/usr/bin/env node
import readlineSync from "readline-sync";
import greeting from "./cli.js";

const rounds = 3;

const playGame = (gameData, gameMessage) => {
  const userName = greeting();
  console.log(gameMessage);

  for (let i = 0; i < rounds; i += 1) {
    // destructure gameData() (returns array)
    const [question, correctAnswer] = gameData();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question("Your answer: ");

    if (userAnswer === correctAnswer) {
      console.log("Correct!");
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct was '${correctAnswer}'.`
      );
      console.log(`Let's try again, ${userName}!`);
      return; // break function execution
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playGame;
