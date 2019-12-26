var littleOne = [];
var howTheyMarch = ["one by one", "two by two", "three by three", "four by four", "five by five", "six by six", "seven by seven", "eight by eight", "nine by nine", "ten by ten"];

function theAntsGoMarching(){
	for (var i = 0; i < howTheyMarch.length; i++){
		howManyByHowMany;
		console.log(littleOne[i]);
		console.log("And they all go marching down to the ground to get out of the rain, BOOM! BOOM! BOOM!");
	}
}
theAntsGoMarching();

littleOne[0] = "The little one stops to suck her thumb";
littleOne[1] = "The little one stops to tie his shoe";
littleOne[2] = "The little one stops to climb a tree";
littleOne[3] = "The little one stops to shut the door";
littleOne[4] = "The little one stops to take a dive";
littleOne[5] = "The little one stops to pick up sticks";
littleOne[6] = "The little one stops to pray to heaven";
littleOne[7] = "The little one stops to roll a skate";
littleOne[8] = "The little one stops to check the time";
littleOne[9] = "The little one stops to shut The End";

function howManyByHowMany(number){
	var numbers = howTheyMarch;
	var hurrah = " hurrah, hurrah \n";
	var march = "The ants go marching " + numbers;
  debugger
	console.log(march + hurrah + march + hurrah + march);
}

// Create a new project in your TTS directory titled antsGoMarching
//     add an index.html file
//     add a javascript file
//     link the two files together
// In your JS file paste the above code
// There are several errors in this code sample
//     Use your debugger to track those errors down
// We've already given you a debugger statement to start with.
// Your finished output should be something like the image in this folder

