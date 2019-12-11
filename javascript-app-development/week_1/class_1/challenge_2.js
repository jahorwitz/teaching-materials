let temp = 50;
let rain = false;
let indoors = true;


console.log(`The temperature is ${temp} degrees`);

if (temp > 80 && rain == false) {
  console.log('Time to swim');
} else if (temp < 79 || rain == true) {
  console.log('Stay inside');
}
