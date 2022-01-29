//-----------------------------------------------------//
// STYLING START

//create results display box
let resultsCounter = document.createElement('div');
resultsCounter.style.display = 'flex';
resultsCounter.style.justifyContent = 'space-around';
results.appendChild(resultsCounter);

//create computer score counter
let computerCounter = document.createElement('h1');
computerCounter.style.color = 'white';
computerCounter.style.fontFamily = 'monospace';
computerCounter.textContent = 0;
resultsCounter.appendChild(computerCounter);

//create player score counter
let playerCounter = document.createElement('h1');
playerCounter.style.color = 'white';
playerCounter.style.fontFamily = 'monospace';
playerCounter.textContent = 0;
resultsCounter.appendChild(playerCounter);

//create results message display box
let resultsMessage = document.createElement('h2');
resultsMessage.style.display = 'flex';
resultsMessage.style.justifyContent = 'center';
resultsMessage.style.color = 'white';
resultsMessage.style.fontFamily = 'monospace';
resultsMessage.style.textAlign = 'center';
resultsMessage.textContent = 'place your wagers...';
results.appendChild(resultsMessage);

// STYLING END
//-----------------------------------------------------//
// GAME FUNCTIONALITY START

//randomly returns either rock, paper, or scissors +++
function computerPlay() {
    //declare array of rock, paper, & scissors +++ 
        const elements = ["rock", "paper", "scissors"];
    //assign random element to new variable +++
        let computerMove = elements[Math.floor(Math.random()*elements.length)];
    //return random of array[0-2] +++
        return computerMove;
    }

//function to play a round +++
function playRound(playerMove){
//get user and computer selections +++
    let playerSelection = playerMove;
    let computerSelection = computerPlay();
//declare and initialize results variables +++
    let computerWins = false;
    let playerWins = false;
    let draw = false;
//apply game conditions +++
    if (computerSelection.toLowerCase() === "rock"){
        if (playerSelection.toLowerCase() === "scissors"){
            computerWins = true;
        } else if (playerSelection.toLowerCase() === "paper"){
            playerWins = true;
        } else {
            draw = true;
        }
    }
    if (computerSelection.toLowerCase() === "paper"){
        if (playerSelection.toLowerCase() === "rock"){
            computerWins = true;
        } else if (playerSelection.toLowerCase() === "scissors"){
            playerWins = true;
        } else {
            draw = true;
        }
    }
    if (computerSelection.toLowerCase() === "scissors"){
        if (playerSelection.toLowerCase() === "paper"){
            computerWins = true;
        } else if (playerSelection.toLowerCase() === "rock"){
            playerWins = true;
        } else {
            draw = true;
        }
    }
//declare result variable to be returned
    let result;
//return with message +++ 
    if (computerWins === true){
        resultsMessage.textContent = ("you lose! " + computerSelection + " beats " + playerSelection.toLowerCase());
        result = "computer won";
        return result;
    } else if (playerWins === true){
        resultsMessage.textContent = ("you win! " + playerSelection.toLowerCase() + " beats " + computerSelection);
        result = "player won";
        return result;
    } else {
        resultsMessage.textContent = ("it's a draw!");
        result = "draw";
        return result;
    }
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => game('rock'));
paper.addEventListener('click', () => game('paper'));
scissors.addEventListener('click', () => game('scissors'));

let computerScore = 0;
let playerScore = 0;

//function that plays specified number of game rounds and reports winner +++
function game(playerMove){
//initialise variables +++
    let result;
    if (computerScore<5 && playerScore<5){
        result = playRound(playerMove);
        switch (result){
            case "computer won":
                computerScore += 1;
                if (computerScore === 5){
                    resultsMessage.textContent = 'truly, life is the misery we endure between disappointments';
                }
                computerCounter.textContent = (computerScore);
                break;
            case "player won":
                playerScore += 1;
                if (playerScore === 5) {
                    resultsMessage.textContent = "say one thing for you, say you're a winner";
                }
                playerCounter.textContent = (playerScore);
                break;
            case "draw":
                break;
        }
    }
}

// GAME FUNCTIONALITY END
//-----------------------------------------------------//