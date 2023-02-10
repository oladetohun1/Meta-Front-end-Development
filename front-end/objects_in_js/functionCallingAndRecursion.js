//Funcion calling and recursion
//scope
/*
scope is all about code accessibility
for example -> what variable can a function access within code
*/
var num1 = 10;
function score(){
    console.log(num1);
}

score();

/*
The functional programming paradigm
Learning Objectives
Be able to explain that there are several programming paradigms

Be able to explain the basic difference between the two predominant programming paradigms: functional programming and object-oriented programming

Understand, at a very high level, how the functional programming paradigm works

"There are actually several styles of coding, also known as paradigms. A common style is called functional programming, or FP for short.

In functional programming, we use a lot of functions and variables.
*/

function getTotal(a,b) {
    return a + b
}
var num1 = 2;
var num2 = 3;

var total = getTotal(num1, num2);
// When writing FP code, we keep data and functionality separate and pass 
// data into functions only when we want something computed.

function getDistance(mph, h) {
    return mph * h
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);

// In functional programming, functions return new values and then use those values somewhere else in the code.

function getDistance(mph, h) {
    return mph * h
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);

console.log(distance); // <====== THIS HERE!

/*
Another style is object-oriented programming (OOP). In this style, we group data and functionality as properties and methods inside objects.

For example, if I have a virtualPet object, I can give it a sleepy property and a nap() method:
*/

