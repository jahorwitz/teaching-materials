// Rock Paper Scissors in the Browser

// Loading your Rock Paper Scissors script into an HTML page
// Once loaded:
//     Access the variables/arrays
//     Call functions from console
// Make the program interactive
// Ask the user for input
// Place the winning results on the page

let hands = ["rock", "paper", "scissors"];

document.getElementById("rock").addEventListener('click', (event) => {
    let computerHand = getComputerHand();
    let result = compare(computerHand, "rock");
    displayResult(result);
});

document.getElementById("paper").addEventListener('click', (event) => {
    let computerHand = getComputerHand();
    let result = compare(computerHand, "paper");
    displayResult(result);
});

document.getElementById("scissors").addEventListener('click', (event) => {
    let computerHand = getComputerHand();
    let result = compare(computerHand, "scissors");
    displayResult(result);
});

document.getElementById("play-again").addEventListener('click', (event) => {
    let computerHand = getComputerHand();
    resetGame();
});

function getComputerHand() {
    return hands[parseInt(Math.random() * 10) % 3];
    // return hands[1];
}

function compare(computer, player) {
    //Your code here
    console.log(`Player Choice: ${player}, Computer Choice: ${computer}`);

    let computerIndex = hands.indexOf(computer);
    let playerIndex = hands.indexOf(player);

    let result = computerIndex - playerIndex;

    if (result === 0) {
        return "It's a tie!";
    } else if (result === 1 || result === -2) {
        return "Computer wins!";
    } else {
        return "You win!";
    }
        
}

function displayResult(result) {
    document.getElementById("choices").style.display = "none";
    document.getElementById("play-again").style.display = "block";
    document.getElementById("result").innerHTML = result;
}

function resetGame() {
    document.getElementById("choices").style.display = "block";
    document.getElementById("play-again").style.display = "none";
    document.getElementById("result").innerHTML = null;
}