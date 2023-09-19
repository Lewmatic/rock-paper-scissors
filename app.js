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
    wins++;
  } else if (playerChoice == "scissors" && computerChoice == "rock") {
    console.log(
      `You chose ${playerChoice}\nComputer chose ${computerChoice}\nYou Lose`
    );
    losses++;
  } else if (playerChoice == "paper" && computerChoice == "rock") {
    console.log(
      `You chose ${playerChoice}\nComputer chose ${computerChoice}\nYou Win`
    );
    wins++;
  } else if (playerChoice == "rock" && computerChoice == "paper") {
    console.log(
      `You chose ${playerChoice}\nComputer chose ${computerChoice}\nYou Lose`
    );
    losses++;
  } else if (playerChoice == "scissors" && computerChoice == "paper") {
    console.log(
      `You chose ${playerChoice}\nComputer chose ${computerChoice}\nYou Win`
    );
    wins++;
  } else if (playerChoice == "paper" && computerChoice == "scissors") {
    console.log(
      `You chose ${playerChoice}\nComputer chose ${computerChoice}\nYou Lose`
    );
    losses++;
  }
  numRounds++;

  if (numRounds === 5) {
    endGame();
  }
}

function endGame() {
  const results = document.getElementById("results");
  if (wins > losses) {
    results.textContent = "You Win!";
  } else if (wins < losses) {
    results.textContent = "You Lose :(";
  } else results.textContent = "You Tied";
  numRounds = 0;
  wins = 0;
  losses = 0;
  ties = 0;
}

let playerChoice = "";
let wins = 0;
let losses = 0;
let ties = 0;
let numRounds = 0;

const buttons = document.querySelectorAll("#cards button");
buttons.forEach((button) =>
  button.addEventListener("click", () => {
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
const score = document.getElementById("score");

rock.addEventListener("click", () => {
  playerChoice = "rock";
  playRound();
  if (ties > 0) {
    score.textContent = `Score: W-${wins} / L-${losses} / T-${ties}`;
  } else score.textContent = `Score: W-${wins} / L-${losses}`;
});
paper.addEventListener("click", () => {
  playerChoice = "paper";
  playRound();
  if (ties > 0) {
    score.textContent = `Score: W-${wins} / L-${losses} / T-${ties}`;
  } else score.textContent = `Score: W-${wins} / L-${losses}`;
});
scissors.addEventListener("click", () => {
  playerChoice = "scissors";
  playRound();
  if (ties > 0) {
    score.textContent = `Score: W-${wins} / L-${losses} / T-${ties}`;
  } else score.textContent = `Score: W-${wins} / L-${losses}`;
});
