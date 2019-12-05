//If a number is divisible by 3, print "Fizz"
//If a number is divisible by 5, print "Buzz"
//If both, print "FizzBuzz"
//If neither, print the number


let num = 5;

//Your solution here

// if(num % 3 === 0 && num % 5 === 0) {
//     console.log("FizzBuzz");
// } else if (num % 3 === 0) {
//     console.log("Fizz");
// } else if (num % 5 === 0) {
//     console.log("Buzz");
// } else {
//     console.log(num);
// }



let result = "";

if(num % 3 === 0) {
    result += "Fizz";
}

if(num % 5 === 0) {
    result += "Buzz";
}

if(result === "") {
    result = num;
}

console.log(result);
