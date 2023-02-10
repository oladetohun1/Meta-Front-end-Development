//functional programming

var currencyOne = 100;
var currencyTwo = 0;
var exchangeRate = 1.2;

function convertCurrency(currency, rate){
    return (currency * rate);
};

currencyTwo = convertCurrency(currencyOne, exchangeRate);

console.log(currencyTwo); // 120

// Return values from functions
// Many functions, by default, return the value of undefined.

// An example is the console.log() function.

console.log('Hello');

// So, the value is output in the console, but it's also returned.

// Why is this useful?

// It's useful because I can use return values from one function inside another function.

// Here's an example.

// I'll first code a function that returns a double of a number that it received:

function doubleIt(num) {
    return num * 2;
};

function objectMaker(val) {
    return {
        prop: val
    };
};

objectMaker(20);
doubleIt(10).toString()
objectMaker(doubleIt(100));
