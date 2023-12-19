function getComputerChoice() {
    const random = Math.floor(Math.random() * 3)
    switch (random) {
        case 1:
            return "ROCK"
            break;
        case 2:
            return "PAPER"
            break;
        default:
            return "SCISSORS"
            break;
    }
}


function playRound(playerChoice, computerChoice) {
    if (playerChoice.toUpperCase() == "ROCK") {
        switch (computerChoice) {
            case "SCISSORS":
                return "Player selected " + playerChoice + ". Computer selected " + computerChoice + ". Player wins the round!!"
                break;
            case "PAPER":
                return "Player selected " + playerChoice + ". Computer selected " + computerChoice + ". Computer wins the round!!"
                break;
            default:
                return "Player selected " + playerChoice + ". Computer selected " + computerChoice + ". It's a tie!"
        }
    }

    else if (playerChoice.toUpperCase() == "SCISSORS") {
        switch (computerChoice) {
            case "PAPER":
                return "Player selected " + playerChoice + ". Computer selected " + computerChoice + ". Player wins the round!"
                break;
            case "ROCK":
                return "Player selected " + playerChoice + ". Computer selected " + computerChoice + ". Computer wins the round!"
                break;
            default:
                return "Player selected " + playerChoice + ". Computer selected " + computerChoice + ". It's a tie!"
        }
    }

    else if (playerChoice.toUpperCase() == "PAPER") {
        switch (computerChoice) {
            case "ROCK":
                return "Player selected " + playerChoice + ". Computer selected " + computerChoice + ".. Player wins the round!"
                break;
            case "SCISSORS":
                return "Player selected " + playerChoice + ". Computer selected " + computerChoice + ".. Computer wins the round!"
                break;
            default:
                return "Player selected " + playerChoice + ". Computer selected " + computerChoice + ".. It's a tie!"
        }
    }

    else return "That wasn't a valid input, try entering Rock, Paper or Scissors!"

}

function getPlayerChoice() {
    return prompt("Choose Rock, Paper, or Scissors");
}


const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', () => {
    playRoundResult = playRound("Rock", getComputerChoice());
    game(playRoundResult);
});

const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', () => {
    playRoundResult = playRound("paper", getComputerChoice());
    game(playRoundResult);
});

const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', () => {
    playRoundResult = playRound("scissors", getComputerChoice());
    game(playRoundResult);
});

function game(playRoundResult) {
    let computerScore = 0;
    let playerScore = 0;
    const divResult = document.querySelector('#result');
    //for (let i = 0; i < 5; i++) {
    displayText = playRoundResult;
    if (displayText.includes("Computer wins")) {
        currentScore = updateScore("Computer");
        divResult.textContent = displayText;
        checkWinner(currentScore, "Computer")

    }
    else if (displayText.includes("Player wins")) {
        currentScore = updateScore("Player");
        divResult.textContent = displayText;
        checkWinner(currentScore, "Player")
    } else divResult.textContent = displayText;
    

  //  console.log(displayText);
  //  console.log("Here are the scores. Player:" + playerScore + "; Computer:" + computerScore);
    // }
}

function updateScore(roundWinner) {
const divResult = document.querySelector('#result');
const compScore = document.querySelector('#compScore');
const playerScore = document.querySelector('#playerScore');
let currentCompScore = parseInt(compScore.textContent);
let currentPlayerScore = parseInt(playerScore.textContent);
console.log(currentCompScore);
console.log(currentPlayerScore);

if (roundWinner == "Computer") {
    currentCompScore++;
    compScore.textContent = currentCompScore;
    return currentCompScore;
} else {
    currentPlayerScore++;
    playerScore.textContent = currentPlayerScore;
    return currentPlayerScore;
}



}

function checkWinner(currentScore, winner) {
const divResult = document.querySelector('#result');
const compScore = document.querySelector('#compScore');
const playerScore = document.querySelector('#playerScore');
    if (currentScore == 5) {
        if (winner = "Computer") {
            divResult.textContent = "Game over, Computer won the game! Scores resetting to 0";
        } else {
            divResult.textContent = "Game over, Player won the game! Scores resetting to 0";
        }
        compScore.textContent = "0";
        playerScore.textContent = "0";
    }
}