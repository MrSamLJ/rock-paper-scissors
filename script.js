//Defining constant areas & variables based on ID's
const counterArea = document.querySelector('#counter');
const info = document.querySelector('#info');
const roundsLeft = document.querySelector('#roundsLeft');
const counterText = document.querySelector('#counterText');
const logPlayerChoice = document.querySelector('#logPlayerChoice');
const logComputerChoice = document.querySelector('#logComputerChoice');
const winningText = document.querySelector('#winningText');
const overallWinner = document.querySelector('#overallWinnerText');
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

//Define images
const images = document.querySelectorAll('img');

let playerSelection = '';

//Add event listeners to all images and pull in alt tag
images.forEach((img) => {
img.addEventListener('click', () => {
 playerSelection = img.getAttribute("alt");
 winningText.className = '';
 computerPlay();
 playRound();
});
});

//Count wins
let totalUserWins = 0;
let totalComputerWins = 0;
let roundCount = 0;
let numberOfRoundsLeft = 5;


//Compute and play game
function playRound() {
   //If statement showing the computer won.
if ((playerSelection === 'rock' && computerSelection === 'paper') || +
(playerSelection === 'scissors' && computerSelection === 'rock') || +
 (playerSelection === 'paper' && computerSelection === 'scissors')) {
   ++totalComputerWins;
    winningText.classList.add('loose');
   winningText.textContent = "Result = Computer wins!";
   updateScores();
   //Else it's a draw.
} else if 
(playerSelection === computerSelection) {
   winningText.classList.add('draw');
   winningText.textContent = "Result = It's a draw!";
   updateScores();
} else {
   //Unless user wins.
   ++totalUserWins;
       winningText.classList.add('win');
   winningText.textContent = "Result = User wins!";
   updateScores();
}

//Update the scores
function updateScores() {
   ++roundCount;
   --numberOfRoundsLeft;
   roundsLeft.textContent = `${numberOfRoundsLeft} rounds left!`;
   logPlayerChoice.textContent = `User selects...${playerSelection}`;
   logComputerChoice.textContent = `Computer selects...${computerSelection}`;
   counterText.textContent = `Score so far: User = ${totalUserWins} & Computer = ${totalComputerWins}.`;
   if (roundCount === 5) {
      chooseWinner();
   };
};


//If round count = 5 remove two headers and display winner text.
function chooseWinner() {
   let removed = counterArea.removeChild(info);
   let button = document.createElement('button');
   button.textContent = 'Play again!';
      button.addEventListener('click', refreshPage);
counterArea.appendChild(button);
   if (totalUserWins > totalComputerWins) {
      overallWinner.classList.add('win');
      overallWinner.textContent = `Winner, winner chicken dinner! User wins ${totalUserWins} games to ${totalComputerWins}`;      
   } else {
      overallWinner.classList.add('loose');
      overallWinner.textContent = `Sorry :( Computer wins ${totalComputerWins} games to ${totalUserWins}`;
   }
}
};

//Refresh page function
function refreshPage() {
location.reload();
}
