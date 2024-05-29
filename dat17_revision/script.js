// console.log("hello world!!");
let buttons = document.querySelectorAll("button");
console.log(buttons);
let userScore = document.getElementById("user-score");
let ElecomputerScore = document.getElementById("computer-score");
let resultLine = document.getElementById("result");

function computerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let randomChoice = Math.floor(Math.random() * 3);
  // console.log(randomChoice);
  return choices[randomChoice];
}

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    let result = playGame(button.id, computerChoice());
  });
});

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice, computerChoice) {
  // console.log("jdsfbv");
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
    userScore.textContent = playerScore;
    resultLine.innerText = "You win " + playerChoice + " beats " + computerChoice;
  } else {
    computerScore++;
    ElecomputerScore.textContent = computerScore;
    resultLine.innerText = "Computer win " + computerChoice + " beats " + playerChoice;
  }
}
