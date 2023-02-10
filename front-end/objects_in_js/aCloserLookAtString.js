// Arrays are iterable

var veggies = ['onion', 'parsley', 'carrot'];

console.log(veggies.length);//check the length of the array;

console.log(veggies[0]);
console.log(veggies[1]);

for (var i = 0; i < veggies.length; i++){
    console.log(veggies[i]);
}

// But hold Up! strings are iterable too

var greeting = 'Howdy';

console.log(greeting.length);

console.log(greeting[0]);
console.log(greeting[1]);

for (var i = 0; i < greeting.length; i++){
    console.log(greeting[i]);
}

// strings !== array

var greet = 'Hello ';
var user  = 'Lisa';

// console.log(greet.pop()) cannot run all methids of arays on stings

console.log(greet + user); //Hello Lisa

console.log( greet.concat(user)); // Hello Lisa
