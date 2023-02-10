// Let us explore how the random method works

//Generate a decimal number between 0 and 0.99
Math.random();

// save it to a variable;
var randonNum = Math.random();

//log the value of randomNum to the console
console.log(randonNum);

//log the value multiplied by 10;
console.log(randonNum * 10);

// Let us explore how the Ceil method works
// Round up any decimal number to the neares integer

// var rounded = Math.ceil(0.0001);
// var rounded = Math.ceil(0.5);
// var rounded = Math.ceil(0.99);
// var rounded = Math.ceil(1.01);
// var rounded = Math.ceil(1.5);
var rounded = Math.ceil(2.99);

console.log(rounded);

// A code to implement this two methods

// Random Integer

// Get a random decimal number between 0 and 0.99... and save it to a variable

var decimal = Math.random() * 10;

// Rounding up the value of decimal
var rounded = Math.ceil(decimal);

//log the  value of rounded to the console
console.log(rounded);
