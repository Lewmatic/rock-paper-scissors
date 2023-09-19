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

/*function game() {
  let numRounds = 1;
  let playerChoice = "";
  let computerChoice = "";
  while (numRounds <= 5) {
    playerChoice = getPlayerChoice();
    computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
    numRounds++;
  }
  console.log(
    `Final Score:\nPlayer Wins - ${playerWins}\nComputer Wins - ${computerWins}\nTies - ${ties}`
  );
}
*/

let ties = 0;
let playerWins = 0;
let computerWins = 0;
//game();


