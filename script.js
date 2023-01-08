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
function playRound(playerSelection,computerSelection) {
    //Ensure playerSelection is case insensitive.
    playerSelection = playerSelection.toLowerCase();
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

// Create a function called game()


function game() {
    // Call playRound() inside the game function
    // Play a 5 round match
    let score = 0;
    for (let i=0; i<5; i++) {
        // Ask the user for their solection
        const playerChoice = prompt("Choose Rock, Paper or Scissors");
        // Get the computers selection
        const computerChoice = getComputerChoice();
        let result = playRound(playerChoice,computerChoice);
        console.log(result);
        // Check if the ouput contains the word "win"
        if (result.includes('win')) {
            // Keep score
            score += 2;
        } else if (result.includes('draw')) {
            score += 1;
        }
        console.log(`${score/2} out of ${i+1}`);
        
    }
    // Report a winner at the end of match.//
    if (score >= 6) {
        return `You win! Your score was ${score/2} out of 5`;
    } else if (score === 5) {
        return "Draw!";
    } else {
        return `You lose! Your score was ${score/2} out of 5`
    }
}

console.log(game());

// const playerSelection = "RoCK";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection,computerSelection));
