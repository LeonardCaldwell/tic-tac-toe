// Create a function called getComputerChoice
function getComputerChoice() {
    // Randomly select "rock", "paper", "scissors"
        //Create a variable to accept an int 0,1,2
    let randomNumber = 0;
        //Get a random number between 0 and 1
    randomNumber = Math.random();
        //Multiply this number by 3 and then round it down to the nearest whole number.
    randomNumber = Math.floor(randomNumber * 3);
        //If the number is 0 return rock
    if (randomNumber === 0) {
        return "rock";
    }
        //elseif the number is 1 return paper
    else if (randomNumber === 1) {
        return "paper"
    }
        //else return scissors
    else {
        return "scissors";
    }
}

// Create a function that plays a single round of Rock Paper Scissors
// Takes two parameters "playerSelection" and "computerSelection".
function playRound(playerSelection) {
    //Ensure playerSelection is case insensitive.
    const computerSelection = getComputerChoice();
    //Check the winner of the round by comparing the selections. Return the result in a string such as "You Lose! Rock beats Scissors!"
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return "It's a draw!";
        } else if (computerSelection === "paper") {
            return "You lose! Paper beats rock!";
        } else if (computerSelection === "scissors") {
            return "You win! Rock beats scissors!";
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "paper") {
            return "It's a draw!";
        } else if (computerSelection === "scissors") {
            return "You lose! Scissors beats paper!";
        } else if (computerSelection === "rock") {
            return "You win! Paper beats rock!";
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "scissors") {
            return "It's a draw!";
        } else if (computerSelection === "rock") {
            return "You lose! Rock beats scissors!";
        } else if (computerSelection === "paper") {
            return "You win! scissors beats paper!";
        }
    }
}

let playerScore = 0;
let compScore = 0;
let rounds = 1;

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    const playerChoice = 'rock';
    const result = playRound(playerChoice);
    if (result.includes('win')) {
        playerScore += 1;
    } else if (result.includes('lose')) {
        compScore += 1;
    }
    container.textContent = `${result} Player ${playerScore} vs Computer ${compScore}`;
    rounds++;
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    const playerChoice = 'paper';
    const result = playRound(playerChoice);
    if (result.includes('win')) {
        playerScore += 1;
    } else if (result.includes('lose')) {
        compScore += 1;
    }
    container.textContent = `${result} Player ${playerScore} vs Computer ${compScore}`;
    rounds++;
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    const playerChoice = 'scissors';
    const result = playRound(playerChoice);
    if (result.includes('win')) {
        playerScore += 1;
    } else if (result.includes('lose')) {
        compScore += 1;
    }
    container.textContent = `${result} Player ${playerScore} vs Computer ${compScore}`;
    rounds++;
});

const container = document.querySelector('#container');
