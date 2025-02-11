document.addEventListener('DOMContentLoaded', () => {
    const computerChoiceDisplay = document.querySelector(".computer-choice");
    const playerChoiceDisplay = document.querySelector(".player-choice");
    const finalResult = document.querySelector(".final-result");
    const playerScoreDisplay = document.querySelector(".player-score .score-value");
    const computerScoreDisplay = document.querySelector(".computer-score .score-value");
    const buttons = document.querySelectorAll(".btn-choice");

    const choices = {
        rock: {id: "rock", label: "Batu", icon: "fa-hand-rock"},
        scissors: {id: "scissors", label: "Gunting", icon: "fa-hand-scissors"},
        paper: {id: "paper", label: "Kertas", icon: "fa-hand-paper"}
    };

    let playerScore = 0;
    let computerScore = 0;

    function getComputerChoice() {
        const keys = Object.keys(choices);
        return choices[keys[Math.floor(Math.random() * keys.length)]];
    }

    function updateDisplay(computerChoice, playerChoice, result) {
        computerChoiceDisplay.innerHTML = `<i class="fas ${computerChoice.icon}"></i> ${computerChoice.label}`;
        playerChoiceDisplay.innerHTML = `<i class="fas ${playerChoice.icon}"></i> ${playerChoice.label}`;
        
        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = computerScore;
        
        finalResult.textContent = result;
        finalResult.style.color = result.includes("Menang") ? "#28a745" : "#dc3545";
    }

    function determineWinner(computerChoice, playerChoice) {
        if (computerChoice.id === playerChoice.id) {
            return "Seri!";
        }
        
        const winConditions = {
            rock: "scissors",
            scissors: "paper",
            paper: "rock"
        };
        
        return winConditions[playerChoice.id] === computerChoice.id 
            ? "Player Menang!" 
            : "Komputer Menang!";
    }

    function play(selectedChoice) {
        const playerChoice = choices[selectedChoice];
        
        // Validasi pilihan player
        if (!playerChoice) {
            console.error("Pilihan tidak valid!");
            return;
        }
        
        const computerChoice = getComputerChoice();
        const result = determineWinner(computerChoice, playerChoice);
        
        if (result === "Player Menang!") playerScore++;
        if (result === "Komputer Menang!") computerScore++;
        
        updateDisplay(computerChoice, playerChoice, result);
    }

    // Event listeners
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            play(button.id);
            finalResult.style.animation = 'none';
            void finalResult.offsetHeight;
            finalResult.style.animation = 'pop 0.3s ease';
        });
    });
});