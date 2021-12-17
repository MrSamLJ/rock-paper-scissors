let computerSelection = "null";

//Create computer choice
function computerPlay() {
let randomNumber = Math.floor(Math.random() * 3) + 1;
if (randomNumber === 1) {
computerSelection = 'rock';
return;
} else if (randomNumber === 2) {
computerSelection = 'paper';
return;
} else {
computerSelection = 'scissors';
}
}

//Firing here as game function commented out.
computerPlay();

//Define images
const images = document.querySelectorAll('img');

let playerSelection = '';

//Add event listeners to all images and pull in alt tag
images.forEach((img) => {
img.addEventListener('click', () => {
 playerSelection = img.getAttribute("alt");
 playRound();
});
});

//Prompt user for their choice
// function playerChoose() {
// let promptSelection = prompt("Please enter your choice of: Rock, Paper or Scissors", "type here");
// playerSelection = promptSelection.toLowerCase();
// console.log("The player chooses " + playerSelection);
// return playerSelection;
// }

//Firing here as game function commented out.
// playerChoose();

//Count wins
let totalUserWins = 0;
let totalComputerWins = 0;
let roundCount = 0;

const winningText = document.querySelector('#winningText');
const logPlayerChoice = document.querySelector('#logPlayerChoice');
const logComputerChoice = document.querySelector('#logComputerChoice');
const counterText = document.querySelector('#counterText');


//Compute and play game
function playRound() {
if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'scissors' && computerSelection === 'rock') || (playerSelection === 'paper' && computerSelection === 'scissors')) {
   ++totalComputerWins;
   logPlayerChoice.textContent = `User selects ${playerSelection}`;
   logComputerChoice.textContent = `Computer selects ${computerSelection}`;
   winningText.classList.add('loose');
   winningText.textContent = "Computer wins!";
   counterText.textContent = `Total User wins: ${totalUserWins} & Total Computer wins: ${totalComputerWins} +
& round count: ${roundCount}`;

return; 
} else if 
(playerSelection === computerSelection) {
   logPlayerChoice.textContent = `User selects ${playerSelection}`;
   logComputerChoice.textContent = `Computer selects ${computerSelection}`;
   winningText.textContent = "It's a draw!";
   counterText.textContent = `Total User wins: ${totalUserWins} & Total Computer wins: ${totalComputerWins} +
& round count: ${roundCount}`;

return;
} else {
   ++totalUserWins;
    logPlayerChoice.textContent = `User selects ${playerSelection}`
   logComputerChoice.textContent = `Computer selects ${computerSelection}`;
   winningText.classList.add('win');
   winningText.textContent = "User wins!";
   counterText.textContent = `Total User wins: ${totalUserWins} & Total Computer wins: ${totalComputerWins} +
& round count: ${roundCount}`;
return;
}
}

//    //Play game 5 times
// function game() {
//    for (let i = 0; i < 5; i++) {
//    console.log(1);
//      const playerSelection = playerChoose();
//      const computerSelection = computerPlay();
//      // Call playRound function, passing in newly returned values
//      // from the playerPlay and computerPlay functions
//      const currentRound = playRound(playerSelection, computerSelection);
//      // Log our result
//      console.log("User win count: " + totalUserWins);
//      console.log("Computer win count: " + totalComputerWins);
//    }
// }

//Run game loop
// game();

// //Give final score
// if (totalUserWins > totalComputerWins) {
// console.log("The winner is the user!!!");
// } else {
// console.log("The winner is the computer!!");
// };
