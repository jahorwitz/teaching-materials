//Rock - Paper - Scissors

        // Define a hands array with the values 'rock', 'paper', and 'scissors';
        // Define a function called getComputerHand() that returns a hand from the array using parseInt(Math.random()*10)%3)
        // Define a function called compare() that
            // Takes two choices as arguments
            // Determines the winner
            // Logs the hands played by each
            // Returns a string indicating the result
        // Play a game

// This is an example of taking user input from the command line in Node.js
let hands = ["rock", "paper", "scissors"];
// 0, 1, 2
// 2 beats 1 -> true
// 1 beats 0 -> true
// 0 beats 2 -> true

// player chooses 0
// computer chooses 0 -> tie
// computer chooses 1 -> computer wins
// computer chooses 2 -> computer loses

// choice1 - choice2 = ?

// 0 - 0 = 0 -> tie
// 0 - 1 = -1 -> choice 2 wins
// 0 - 2 = -2 -> choice 1 wins

// 1 - 0 = 1 -> choice 1 wins
// 1 - 1 = 0 -> tie
// 1 - 2 = -1 -> choice 2 wins

// 2 - 0 = 2 -> choice 2 wins
// 2 - 1 = 1 -> choice 1 wins
// 2 - 2 = 0 -> tie

// result = 0 -> tie
// result = 1, -2 -> choice 1 wins
// result = -1, 2 -> choice 2 wins

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(`rock, paper, or scissors? `, (choice) => {
    //Your code here
    let computerHand = getComputerHand();
    compare(computerHand, choice);

    readline.close()
});

function getComputerHand() {
    //return hands[parseInt(Math.random() * 10) % 3];
    return hands[1];
}

function compare(computer, player) {
    //Your code here
    console.log(`Player Choice: ${player}, Computer Choice: ${computer}`);

    let computerIndex = hands.indexOf(computer);
    let playerIndex = hands.indexOf(player);

    let result = computerIndex - playerIndex;

    if (result === 0) {
        console.log("It's a tie!");
    } else if (result === 1 || result === -2) {
        console.log("Computer wins!");
    } else {
        console.log("You win!");
    }
        
}