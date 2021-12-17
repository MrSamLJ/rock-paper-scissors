
let computerSelection = "null";

//Create computer choice
function computerPlay() {
let randomNumber = Math.floor(Math.random() * 3) + 1;
if (randomNumber === 1) {
console.log('The computer chooses rock');
computerSelection = 'rock';
return;
} else if (randomNumber === 2) {
console.log('The computer chooses paper');
computerSelection = 'paper';
return;
} else {
console.log("The computer chooses scissors!");
computerSelection = 'scissors';
}
}

//Prompt user for their choice
function playerChoose() {
let promptSelection = prompt("Please enter your choice of: Rock, Paper or Scissors", "type here");
playerSelection = promptSelection.toLowerCase();
console.log("The player chooses " + playerSelection);
return playerSelection;
}

//Count wins
let totalUserWins = 0;
let totalComputerWins = 0;
let roundCount = 0;

//Compute and play game
function playRound() {
if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'scissors' && computerSelection === 'rock') || (playerSelection === 'paper' && computerSelection === 'scissors')) {
console.log("Computer wins!"); 
++totalComputerWins;
return; 
} else if 
(playerSelection === computerSelection) {
console.log("Draw!!");
return;
} else {
console.log("User wins!");
++totalUserWins;
return;
}
}

   //Play game 5 times
function game() {
   for (let i = 0; i < 5; i++) {
   console.log(1);
     const playerSelection = playerChoose();
     const computerSelection = computerPlay();
     // Call playRound function, passing in newly returned values
     // from the playerPlay and computerPlay functions
     const currentRound = playRound(playerSelection, computerSelection);
     // Log our result
     console.log("User win count: " + totalUserWins);
     console.log("Computer win count: " + totalComputerWins);
   }
}

//Run game loop
game();

//Give final score
if (totalUserWins > totalComputerWins) {
console.log("The winner is the user!!!");
} else {
console.log("The winner is the computer!!");
};
