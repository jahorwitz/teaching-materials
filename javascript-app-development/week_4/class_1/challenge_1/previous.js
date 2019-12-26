var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice <0.34){
    computerChoice = "rock";
}else if(computerChoice <=0.67){
    computerChoice = "paper";
}
else{
    computerChoice = "scissors";
}
var compare = function(choice1,choice2){
    if(choice1==choice2){
        return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nThe result is a tie!";
    }
    if(choice1=="rock"){
        if(choice2=="scissors"){
            return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nYou won!";
        }
        else{
            return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nYou lost!";
        }
    }
    if(choice1=="paper"){
        if(choice2=="rock"){
            return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nYou won!";
        }
        else{
            return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nYou lost!";
        }
    }
    if(choice1=="scissors"){
        if(choice2=="rock"){
            return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nYou won!";
        }
        else{
            return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nYou lost!";
        }
    }
};

alert(compare(userChoice,computerChoice));