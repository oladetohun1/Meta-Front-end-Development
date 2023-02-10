// inheritance in JavaScript is based around the prototype object.
// All objects that are built from the prototype share the same functionality.

// For now though, you first need to define the Train class, using the following syntax:

class Train {
  // So, you use the class keyword, then specify the name of your class,
  // with the first letter capitalized, and then you add an opening and a closing curly brace.
  constructor(color, lightsOn) {
    // In between the curly braces, the first piece of code that you need
    // to define is the constructor:
    //     The constructor will be used to build properties on the future object instance of the Train class.
    //     For now, let's say that there are only two properties that each object instance of the Train
    //     class should have at the time it gets instantiated: color and
    //     lightsOn.
    this.color = color;
    this.lightsOn = lightsOn
  };
//   Notice the syntax of the constructor. The constructor is a special function in my Train class.

// First of all, notice that there is no function keyword. Also, notice that the keyword constructor is used to define this function. You give your constructor function parameters inside an opening and closing parenthesis, just like in regular functions. The names of parameters are color and lightsOn.  

// Next, inside the constructor function's body, you assigned the passed-in color parameter's value to this.color, and the passed-in lightsOn parameter's value to this.lightsOn.

// What does this this keyword here represent?

// It's the future object instance of the Train class.

// Essentially, this is all the code that you need to write to achieve two things: 

// This code allows me to build new instances of the Train class. 

// Each object instance of the Train class that I build will have its own custom properties of color and lightsOn.

// Now, to actually build a new instance of the Train class, I need to use the following syntax:


}

//build a new instance of the train class

var myFirstTrain = new Train('red', false) ;//This means the color property is set to red and the lightsonn properties is set to false
//it also needs to be assigned to  a variable
console.log(myFirstTrain);

//you can build more instance of the train. Even if you give them the same properties they are still speperate objects.
var mySecondTrain = new Train('blue', false);
var myThirdTrain = new Train('blue', false);
console.log(mySecondTrain);
console.log(myThirdTrain);

// However, this is not all that classes can offer.

// You can also add methods to classes, and these methods will then be shared by all future instance objects of my Train class.

// For example:

class Trains {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

/*
Now, there are four methods on your Trains class: 
toggleLights(), lightsStatus(),  getSelf() and getPrototype().

The toggleLights method uses the logical not operator, !. This operator will change the value stored in the lightsOn property of the future instance object of the Train class; hence the !this.lightsOn. And the = operator to its left means that it will get assigned to this.lightsOn, meaning that it will become the new value of the lightsOn property on that given instance object.

The lightsStatus() method on the Train class just reports the current status of the lightsOn variable of a given object instance.

The getSelf() method prints out the properties on the object instance it is called on.

The getPrototype() console logs the prototype of the object instance of the Train class. The prototype holds all the properties shared by all the object instances of the Train class. To get the prototype, you'll be using JavaScript's built-in Object.getPrototypeOf() method, and passing it this object - meaning, the object instance inside of which this method is invoked.

Now you can build a brand new train using this updated Train class:
*/
var train4 = new Trains('red', false);
train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype();

//polymorphism usng class => Inheriting from the base class and then overriding th
// inherited behaviour.
// Example

class HighSpeedTrain extends Trains {
    //This makes the train class a base class, or the super-class of the HighspeedTrain
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    /*
    Notice the slight difference in syntax in the constructor of the HighSpeedTrain class, namely the use of the super keyword.

In JavaScript classes, super is used to specify what property gets inherited from the super-class in the sub-class.

In this case, I choose to inherit both the properties from the Train super-class in the HighSpeedTrain sub-class.

These properties are color and lightsOn.

Next, you add the additional properties of the HighSpeedTrain class inside its constructor, namely, the passengers and highSpeedOn properties.

Next, inside the constructor body, you use the super keyword and pass in the inherited color and lightsOn properties that come from the Train class. On subsequent lines you assign passengers to this.passengers, and highSpeedOn to this.highSpeedOn.

Notice that in addition to the inherited properties, you also automatically inherit all the methods that exist on the Train prototype, namely, the toggleLights(), lightsStatus(), getSelf(), and getPrototype() methods.

Now let's add another method that will be specific to the HighSpeedTrain class: the toggleHighSpeed() method.


    */

// now let's add another method that will be specifc to HighSpeedTrain
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }

    /*
    Additionally, imagine you realized that you don't like how the toggleLights() method from the super-class works, and you want to implement it a bit differently in the sub-class. You can add it inside the HighSpeedTrain class. 

    */
    toggleLights() {
        super.toggleLigths();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}

var train5 = new Trains('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);

console.log(train5);
console.log(highSpeed1);
train5.getPrototype(); // {constructor: ƒ, toggleLights: ƒ, lightsStatus: ƒ, getSelf: ƒ, getPrototype: ƒ}
highSpeed1.getPrototype(); // Train {constructor: ƒ, toggleHighSpeed: ƒ, toggleLights: ƒ}
