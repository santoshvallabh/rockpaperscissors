function getComputerChoice () {
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



function playRound (playerChoice, computerChoice) {
    if (playerChoice.toUpperCase() == "ROCK") {
        switch (computerChoice) {
            case "SCISSORS":
                return "Player selected " + playerChoice + ". Computer selected " + computerChoice + ". Player wins!"
            break;
            case "PAPER":
                return "Player selected " + playerChoice + ". Computer selected " + computerChoice + ". Computer wins!"
            break;
            default:
                return "Player selected " + playerChoice + ". Computer selected " + computerChoice + ". It's a tie!"
        }
    }

    else if (playerChoice.toUpperCase() == "SCISSORS") {
        switch (computerChoice) {
            case "PAPER":
                return "Player selected " + playerChoice + ". Computer selected " + computerChoice + ". Player wins!"
            break;
            case "ROCK":
                return "Player selected " + playerChoice + ". Computer selected " + computerChoice + ". Computer wins!"
            break;
            default:
                return "Player selected " + playerChoice + ". Computer selected " + computerChoice + ". It's a tie!"
        }
    }

    else if (playerChoice.toUpperCase() == "PAPER") {
        switch (computerChoice) {
            case "ROCK":
                return "Player selected " + playerChoice + ". Computer selected " + computerChoice + ".. Player wins!"
            break;
            case "SCISSORS":
                return "Player selected " + playerChoice + ". Computer selected " + computerChoice + ".. Computer wins!"
            break;
            default:
                return "Player selected " + playerChoice + ". Computer selected " + computerChoice + ".. It's a tie!"
        }
    }

    else return "That wasn't a valid input, try entering Rock, Paper or Scissors!"

}

function getPlayerChoice () {
 return prompt("Choose Rock, Paper, or Scissors");
} 


function game () {
    let computerScore = 0;
    let playerScore = 0;
    for (let i = 0; i < 5; i++) {
        displayText = playRound (getPlayerChoice(), getComputerChoice());
        if (displayText.includes("Computer wins")) {
            computerScore++;
        }
        else if (displayText.includes("Player wins")) {
            playerScore++;
        }
        console.log (displayText);
        console.log("Here are the scores. Player:" + playerScore + "; Computer:" + computerScore);
    }
}

game ();