const computerResult = document.querySelector("#computer-result");
const playerResult = document.querySelector("#player-result");
const winnerResult = document.querySelector("#winner-result");
const playerDisplayScore = document.querySelector("#player-display-score");
const computerDisplayScore = document.querySelector("#computer-display-score");

const choices = ["rock", "scissors", "paper"];
let playerScore = 0;
let computerScore = 0;

function getRandomChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function play(playerChoice) {
    const computerChoice = getRandomChoice();

    function computerWin() {
        computerScore++;
        computerResult.textContent = (`Computer: ${computerChoice}`);
        playerResult.textContent = (`Player: ${playerChoice}`);
        winnerResult.textContent = ("Computer Win");

        computerDisplayScore.textContent = computerScore;
    }
    
    function playerWin() {
        playerScore++;
        computerResult.textContent = (`Computer: ${computerChoice}`);
        playerResult.textContent = (`Player: ${playerChoice}`);
        winnerResult.textContent = ("Player Win");

        playerDisplayScore.textContent = playerScore;
    }

    if(computerChoice === playerChoice){
        winnerResult.textContent = ("Draw");
        computerResult.textContent = (`Computer: ${computerChoice}`);
        playerResult.textContent = (`Player: ${playerChoice}`);
    }else if(computerChoice == "rock" && playerChoice == "scissors"){
        computerWin();
    }else if(computerChoice == "rock" && playerChoice == "paper"){
       playerWin();
    }else if (computerChoice == "scissors" && playerChoice == "rock"){
        playerWin();
    }else if (computerChoice == "scissors" && playerChoice == "paper"){
        computerWin();
    }else if (computerChoice == "paper" && playerChoice == "rock"){
        computerWin();
    }else if (computerChoice == "paper" && playerChoice == "scissors"){
        playerWin();
    }else{
        winnerResult.textContent = ("Draw");
    }
    
}

document.getElementById("rock").addEventListener("click", () => play("rock"));
document.getElementById("scissors").addEventListener("click", () => play("scissors"));
document.getElementById("paper").addEventListener("click", () => play("paper"));