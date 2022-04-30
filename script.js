const timer = document.getElementById("timer");
const score = document.getElementById("score");
const finalScore = document.getElementById("final-score");
const word = document.getElementById("word");
const input = document.querySelector("input");
const gameContainer = document.getElementById("game-container");
const endGameContainer = document.getElementById("reload-container");
const words = [
  "hello",
  "house",
  "chiken",
  "written",
  "escape",
  "application",
  "sigh",
  "tense",
  "airplane",
  "ball",
  "pies",
  "juice",
  "warlike",
  "bad",
  "north",
  "dependent",
  "steer",
  "silver",
  "highfalutin",
  "superficial",
  "quince",
  "eight",
  "feeble",
  "admit",
  "drag",
  "loving",
];

var countdown = setInterval(runTimer, 1000);
var time = 10;
endGameContainer.style.display = "none";

input.addEventListener("input", () => compare());

function compare() {
  if (word.innerText.toUpperCase() === input.value.toUpperCase()) {
    incrementScore();
    setTimer();
    showNextWord();
  }
}

function setTimer() {
  const difficulty = document.getElementById("difficulty-level");
  time = 2 * difficulty.value;
}

function showNextWord() {
  function getWord() {
    let nextWord = words[Math.floor(Math.random() * words.length)];
    return nextWord === word.innerText ? getWord() : nextWord;
  }
  word.innerText = getWord();
  input.value = "";
}

function incrementScore() {
  score.innerText = parseInt(score.innerText) + 1;
}

function runTimer() {
  time--;
  if (time >= 0) {
    timer.innerText = time;
  } else {
    showEndGame();
  }
}

function showEndGame() {
  gameContainer.style.display = "none";
  endGameContainer.style.display = "block";
  finalScore.innerText = score.innerText;
  clearInterval(countdown);
  countdown = null;
}

function reload() {
  gameContainer.style.display = "block";
  endGameContainer.style.display = "none";
  score.innerText = "0";
  finalScore.innerText = "0";
  input.value = "";
  setTimer();
  countdown = setInterval(runTimer, 1000);
}
