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
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(`What's your name? `, (name) => {
    console.log(`Hi, ${name}!`)
    readline.close()
});