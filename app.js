function getComputerChoice() {
  let rand = Math.floor(Math.random() * 3);
  if (rand == 0) {
    return "rock";
  } else if (rand == 1) {
    return "paper";
  } else if (rand == 2) {
    return "scissors";
  }
}

function playRound() {
  let computerChoice = getComputerChoice();

  if (playerChoice == computerChoice) {
    console.log(
      `You chose ${playerChoice}\nComputer chose ${computerChoice}\nYou Tied`
    );
    ties++;
  } else if (playerChoice == "rock" && computerChoice == "scissors") {
    console.log(
      `You chose ${playerChoice}\nComputer chose ${computerChoice}\nYou Win`
    );
    playerWins++;
  } else if (playerChoice == "scissors" && computerChoice == "rock") {
    console.log(
      `You chose ${playerChoice}\nComputer chose ${computerChoice}\nYou Lose`
    );
    computerWins++;
  } else if (playerChoice == "paper" && computerChoice == "rock") {
    console.log(
      `You chose ${playerChoice}\nComputer chose ${computerChoice}\nYou Win`
    );
    playerWins++;
  } else if (playerChoice == "rock" && computerChoice == "paper") {
    console.log(
      `You chose ${playerChoice}\nComputer chose ${computerChoice}\nYou Lose`
    );
    computerWins++;
  } else if (playerChoice == "scissors" && computerChoice == "paper") {
    console.log(
      `You chose ${playerChoice}\nComputer chose ${computerChoice}\nYou Win`
    );
    playerWins++;
  } else if (playerChoice == "paper" && computerChoice == "scissors") {
    console.log(
      `You chose ${playerChoice}\nComputer chose ${computerChoice}\nYou Lose`
    );
    computerWins++;
  }
}

let playerChoice = "";
let ties = 0;
let playerWins = 0;
let computerWins = 0;
let numRounds = 0;

const buttons = document.querySelectorAll("#cards button");
buttons.forEach((button) =>
  button.addEventListener("click", () => {
    numRounds++;
    console.log(numRounds);
    button.classList.add("playing");
    button.addEventListener("transitionend", function (e) {
      if (e.propertyName !== "transform") return;
      this.classList.remove("playing");
    });
  })
);

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
rock.addEventListener("click", () => {
  playerChoice = "rock";
  playRound();
});
paper.addEventListener("click", () => {
  playerChoice = "paper";
  playRound();
});
scissors.addEventListener("click", () => {
  playerChoice = "scissors";
  playRound();
});
