function getComputerChoice() {
  let rand = Math.floor(Math.random() * 3);
  let computerChoice = "";
  if (rand == 0) {
    computerChoice += "rock";
  } else if (rand == 1) {
    computerChoice += "paper";
  } else if (rand == 2) {
    computerChoice += "scissors";
  }
  return computerChoice;
}

function getPlayerChoice() {
  let playerChoice = prompt('Enter "rock", "paper", or "scissors": ');
  playerChoice = playerChoice.replace(/\s/g, "");
  playerChoice = playerChoice.toLowerCase();

  while (
    playerChoice != "rock" &&
    playerChoice != "paper" &&
    playerChoice != "scissors"
  ) {
    playerChoice = prompt(
      'Invalid selection. Please enter either "rock", "paper", or "scissors": '
    );
    playerChoice = playerChoice.replace(/\s/g, "");
    playerChoice = playerChoice.toLowerCase();
  }
  return playerChoice;
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice == computerChoice) {
    console.log(
      `You chose ${playerChoice}\nComputer chose ${computerChoice}\nYou Tied`
    );
  } else if (playerChoice == "rock" && computerChoice == "scissors") {
    console.log(
      `You chose ${playerChoice}\nComputer chose ${computerChoice}\nYou Win`
    );
  } else if (playerChoice == "scissors" && computerChoice == "rock") {
    console.log(
      `You chose ${playerChoice}\nComputer chose ${computerChoice}\nYou Lose`
    );
  } else if (playerChoice == "paper" && computerChoice == "rock") {
    console.log(
      `You chose ${playerChoice}\nComputer chose ${computerChoice}\nYou Win`
    );
  } else if (playerChoice == "rock" && computerChoice == "paper") {
    console.log(
      `You chose ${playerChoice}\nComputer chose ${computerChoice}\nYou Lose`
    );
  } else if (playerChoice == "scissors" && computerChoice == "paper") {
    console.log(
      `You chose ${playerChoice}\nComputer chose ${computerChoice}\nYou Win`
    );
  } else if (playerChoice == "paper" && computerChoice == "scissors") {
    console.log(
      `You chose ${playerChoice}\nComputer chose ${computerChoice}\nYou Lose`
    );
  }
}