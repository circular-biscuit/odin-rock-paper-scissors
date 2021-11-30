

//randomly returns either rock, paper, or scissors +++
function computerPlay() {
//declare array of rock, paper, & scissors +++ 
    const elements = ["rock", "paper", "scissors"];
//assign random element to new variable +++
    let computerMove = elements[Math.floor(Math.random()*elements.length)];
//return random of array[0-2] +++
    return computerMove;
}

//function to get user's selection, check if it's valid 
function playerPlay(){
//initialize boolean to check move validity +++
    let validMove = false;
//ask for player input +++    
    let playerMove = prompt("please enter your move: rock, paper, or scissors");
//check for valid input 
    do {
        if (playerMove.toLowerCase() !== "rock" &&
            playerMove.toLowerCase() !== "paper"&&
            playerMove.toLowerCase() !== "scissors") {
            playerMove = prompt("please enter a VALID move: rock, paper, or scissors"); 
        } else {
            console.log("your move is valid");
            validMove = true;
        }
    } while (!validMove);
//return user input +++
    return playerMove;
}

//function to play a round +++
function playRound(playerSelection, computerSelection){
//declare results variables +++
    let computerWins, playerWins, draw;
//initialize results variables as false +++
    computerWins = false;
    playerWins = false;
    draw = false;

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
// output booleans +++
    console.log("playerWins = " + playerWins);
    console.log("computerWins = " + computerWins);
    console.log("draw = " + draw);
//return with message +++ 
    if (computerWins === true){
        return "you lose! " + computerSelection + " beats " + playerSelection.toLowerCase();
    } else if (playerWins === true){
        return "you win! " + playerSelection.toLowerCase() + " beats " + computerSelection;
    } else {
        return "draw"
    }
}



//get player move and output in console
let playerSelection = playerPlay();
console.log("player's selection is " + playerSelection.toLowerCase());
//get computer move and output in console +++
let computerSelection = computerPlay();
console.log("computer's selection is " + computerSelection);

console.log(playRound(playerSelection, computerSelection));