//-----------------------------------------------------//
// STYLING START

//change body color
const body = document.querySelector('body');
body.style.backgroundColor = 'black';
//make body flex display
body.style.display = 'flex';
body.style.flexDirection = 'column';
body.style.padding = '16px';

//position heading in center of header container
const header = document.querySelector('#header');
header.style.display = 'flex';
header.style.justifyContent = 'center';
header.style.textAlign = 'center';
header.style.marginBottom = '8px';
//style header 
header.style.border = '4px dotted crimson';

//style h1s
const headings = document.querySelectorAll('h1');
for (let i=0; i<headings.length; i++){
    headings[i].style.color = 'white';
    headings[i].style.fontFamily = 'monospace';
}

//align buttons in container
const container = document.querySelector('#container');
container.style.display = 'flex';
container.style.justifyContent = 'space-around';
//style container
container.style.padding = '32px';
container.style.border = '4px dotted aquamarine';
container.style.marginBottom = '8px';

//style buttons
const buttons = document.querySelectorAll('button');
for (let i=0; i<buttons.length; i++){
    buttons[i].style.backgroundColor = 'black';
    buttons[i].style.padding = '8px';
    buttons[i].style.borderRadius = '8px';
    buttons[i].style.border = 'thin solid white';
    buttons[i].style.fontFamily = 'monospace';
    buttons[i].style.fontWeight = 'bold';
    buttons[i].style.color = 'white';
}

//style results container
const results = document.querySelector('#results');
results.style.display = 'flex';
results.style.flexDirection = 'column';
results.style.justifyContent = 'center';
results.style.border = '4px dotted darkviolet';

//style results heading
const resultsHeading = document.querySelector('#resultsHeading');
resultsHeading.style.display = 'flex';
resultsHeading.style.textAlign = 'center';
resultsHeading.style.justifyContent = 'center';

//style score container
const score = document.querySelector('#score');
score.style.display = 'flex';
score.style.justifyContent = 'space-around';
score.style.color = 'white';
score.style.fontFamily = 'monospace';

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