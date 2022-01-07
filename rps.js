// //create rock button +++
// const rockButton = document.createElement('button');
// rockButton.textContent = 'i am rock button';
// rockButton.addEventListener('click', playRound);
// document.body.appendChild(rockButton);

// //create paper button +++
// const paperButton = document.createElement('button');
// paperButton.textContent = 'i am paper button';
// paperButton.addEventListener('click', playRound);
// document.body.appendChild(paperButton);

// //create scissors button
// const scissorsButton = document.createElement('button');
// scissorsButton.textContent = 'i am scissors button';
// scissorsButton.addEventListener('click', playRound);
// document.body.appendChild(scissorsButton);

//function to get user's selection, check if it's valid 
// function playerPlay(){
// // //initialize boolean to check move validity +++
// //     let validMove = false;
// // //ask for player input +++    
// //     let playerMove = prompt("please enter your move: rock, paper, or scissors");
// // //check for valid input 
// //     do {
// //         if (playerMove.toLowerCase() !== "rock" &&
// //             playerMove.toLowerCase() !== "paper"&&
// //             playerMove.toLowerCase() !== "scissors") {
// //             playerMove = prompt("please enter a VALID move: rock, paper, or scissors"); 
// //         } else {
// //             validMove = true;
// //         }
// //     } while (!validMove);

//     let playerMove;
// //assign player move according to which button is clicked 
//     if (rockButton.addEventListener('click', ()=> {playerMove = "rock";})) {
        
//     } else if (paperButton.onclick === true) {
//         playerMove = "paper";
//     } else if (scissorsButton.onclick === true){
//         playerMove = "scissors";
//     }
// //return user input +++
//     return playerMove;
// }

//change body color
const body = document.querySelector('body');
body.style.backgroundColor = 'black';

//align buttons in container
const container = document.querySelector('#container');
container.style.display = 'flex';
container.style.justifyContent = 'space-around';
//style container
container.style.padding = '32px';
container.style.border = '4px dotted aquamarine';
container.style.backgroundColor = 'darkslategrey';

//style buttons
const buttons = document.querySelectorAll('button');
for (let i=0; i<buttons.length; i++){
    buttons[i].style.backgroundColor = 'darkseagreen';
    buttons[i].style.padding = '8px';
    buttons[i].style.borderRadius = '8px';
    buttons[i].style.border = 'thin solid black';
}


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
    console.log("player's selection is " + playerSelection.toLowerCase());
    let computerSelection = computerPlay();
    console.log("computer's selection is " + computerSelection);
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
        console.log("you lose! " + computerSelection + " beats " + playerSelection.toLowerCase());
        result = "computer won";
        return result;
    } else if (playerWins === true){
        console.log("you win! " + playerSelection.toLowerCase() + " beats " + computerSelection);
        result = "player won";
        return result;
    } else {
        console.log("it's a draw!");
        result = "draw";
        return result;
    }
}

//function that plays specified number of game rounds and reports winner +++
// function game(){
// //initialise variables +++
//     let numberOfRounds = 5;
//     let computerScore = 0;
//     let playerScore = 0;
//     let result;
//     result = playRound();
//         switch (result){
//             case "computer won":
//                 computerScore += 1;
//                 break;
//             case "player won":
//                 playerScore += 1;
//                 break;
//             case "draw":
//                 break;
//         }
//         console.log("the current score is: computer= " + computerScore + " player= " + playerScore);
// //loop for number of rounds and score tally +++
//     // for (let i=1; i<=numberOfRounds; i++){
        
//     // } 
//     if (computerScore>playerScore){
//         console.log("computer wins! try harder next time");
//     } else if (playerScore>computerScore){
//         console.log("you have triumphed! your trophy will arrive in 2-3 shipping days");
//     } else {
//         console.log("it's a tie! care for another go?");
//     }
// }

// call game function +++
//game();

















