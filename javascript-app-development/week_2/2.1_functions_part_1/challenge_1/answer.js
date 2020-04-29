// Calculating Gratuity

// create a variable titled billAmount and store a random number (ie: 100)
// create a function titled gratuity()
// gratutity should:
// multiply the value of billAmount by 20%
// return the value
// create a function titled totalWithGrat()
// totalWithGrat should:
// take in the amount as an argument
// call the gratutity function
// add that to the original bill amount
// return the total bill + gratuity
// append new total to the following phrase and log to the console:
// "your total including gratuity is:"

// Limitation: You can only invoke the totalWithGrat function when logging the result
// Extra: Find a way to fix the decimal point to only 2 places, ie: 100.00

let billAmount = 100.74;

let gratuity = (amount) => {
    return amount * 0.2;
}

let totalWithGrat = (amount) => {
    return amount + gratuity(amount);
}

console.log(`your total including gratuity is: $${totalWithGrat(billAmount).toFixed(2)}`);