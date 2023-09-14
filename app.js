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

function playerSelection() {
  userInput = prompt('Enter "rock", "paper", or "scissors": ');
  userInput = userInput.replace(/\s/g, "");
  userInput = userInput.toLowerCase();

  while (
    userInput != "rock" &&
    userInput != "paper" &&
    userInput != "scissors"
  ) {
    userInput = prompt(
      'Invalid selection. Please enter either "rock", "paper", or "scissors": '
    );
    userInput = userInput.replace(/\s/g, "");
    userInput = userInput.toLowerCase();
  }
  return playerSelection;
}
