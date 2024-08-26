const display = document.querySelector("#display");
const player = document.querySelector("#player");
const winner = document.querySelector("#winner");
const pS = document.querySelector("#player-score");
const cS = document.querySelector("#computer-score");

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
            display.textContent = (`Computer: ${computerChoice}`);
            player.textContent = (`Player: ${playerChoice}`);
            winner.textContent = ("Computer Win");
            cS.textContent = computerScore;
    }
    
    function playerWin() {
        playerScore++;
        display.textContent = (`Computer: ${computerChoice}`);
        player.textContent = (`Player: ${playerChoice}`);
        winner.textContent = ("Player Win");
        pS.textContent = playerScore;
    }

    // Logika perbandingan dan penambahan skor
    // Tampilkan hasil di DOM
    if(computerChoice === playerChoice){
        winner.textContent = ("Draw");
        display.textContent = (`Computer: ${computerChoice}`);
        player.textContent = (`Player: ${playerChoice}`);
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
        winner.textContent = ("Draw");
    }
    
}

document.getElementById("rock").addEventListener("click", () => play("rock"));
document.getElementById("scissors").addEventListener("click", () => play("scissors"));
document.getElementById("paper").addEventListener("click", () => play("paper"));