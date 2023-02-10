// Objects in javascript
// Object Literals and the Dot Notation
var user = {
    rangeTilesPerTurn: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40,
    specialAbility: "young and ambitious",
    greeting: "Let's make some money"
} //creates an object with properties and their values
console.log(user)//to access the usersc
console.log(user.greeting) // to access the value of the greeting value
user.name = "korede"; // add the user name
user.age = 20 //add the user age
user.name = "kolade"; //update the user name
console.log(user)

//object literals and the bracket notation
var house2 = {}; //create an empty object
house2["rooms"] = 4; //using bracket notation
house2['color']= "pink";
house2["priceUSD"] = 12345;
console.log(house2); // {rooms: 4, color: 'pink', priceUSD: 12345}

var car = {};
car.color = "red";
car["color"] = "green";
car["speed"] = 200;
car.speed = 100;
console.log(car); // {color: "green", speed: 100}
// With the brackets notation, I can add space characters inside property names, like this:  
car["number of doors"] = 4;
console.log(car); // {color: 'green', speed: 100, number of doors: 5}

// Additionally, I can add numbers (as the string data type) as property keys: 
car["2022"] = 1901;
console.log(car); // {2022: 1901, color: 'green', speed: 100, number of doors: 5}

// Finally, there's one really useful thing that bracket notation has but is not available in the dot notation: It can evaluate expressions.
// To understand what that means, consider the following example:

var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}
