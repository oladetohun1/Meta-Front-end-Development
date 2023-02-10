// Arrays are objects
// In JavaScript, arrays are objects. That means that arrays also have some built-in properties and methods.

// One of the most commonly used built-in methods on arrays are the push() and the pop() methods.

// To add new items to an array, I can use the push() method:

var fruits = [];
fruits.push("apple"); // ['apple']
fruits.push('pear'); // ['apple', 'pear']
fruits.pop()
console.log(fruits) //removes the last item in an array;


// write a function that builds an array with three arguments

function arrayBuilder(one, two, three){
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    console.log(arr);
}

arrayBuilder('korede', 'kolade', 'Tolu')

// Even better, I don't have to console log the newly built array. 

// Instead, I can return it:

function arrayBuilder(one, two, three){
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}

// Additionally, I can save this function call to a variable. 

// I can name it anything, but this time I'll use the name: namesArray.
var namesArray = arrayBuilder('korede', 'kolade', 'Tolu');
console.log(namesArray)
