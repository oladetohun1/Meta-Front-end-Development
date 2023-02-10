/*
OOP PRINCIPLES
-> inheritance
-> Encapsulaton
-> Abstraction
-> polymorphism
*/

// ## Inheritance
// There is one or more sub-classes of "things" that inherit the properties of the base class (sometimes also referred to as the "super-class")
// There is a base class of "Animal".

// There is another class, a sub-class inheriting from "Animal", and the name of this class is "Bird".

// Next, there is another class, inheriting from "Bird", and this class is "Eagle".

// Thus, in the above example, I'm modelling objects from the real world by constructing relationships between Animal, Bird, and Eagle. Each of them are separate classes, meaning, each of them are separate blueprints for specific object instances that can be constructed as needed.

// To setup the inheritance relation between classes in JavaScript, I can use the extends keyword, as in class B extends A.

class Aminal {} //base class
class Bird extends Animal {} //A subcllass Bird inheririting from Animal
class Eagle extends Bird {} // Another subclass Eagle inheriring from Bird

// ## Encapsulation

// In the simplest terms, encapsulation has to do with making a code implementation "hidden" from other users, in the sense that they don't have to know how my code works in order to "consume" the code.
// for example ==> consider the code:
"abc".toUpperCase()
// I don't really need to worry or even waste time thinking about how the toUpperCase() method works. All I want is to use it, since I know it's available to me. Even if the underlying syntax - that is, the implementation of the toUpperCase() method changes - as long as it doesn't break 
// my code, I don't have to worry about what it does in the background, or even how it does it.

// ## Abstraction
// Abstraction is all about writing code in a way that will make it more generalized
/*
It helps to think of it in the following terms: 

An abstraction is about extracting the concept of what you're trying to do, rather than dealing with a specific manifestation of that concept. 

Encapsulation is about you not having access to, or not being concerned with, how some implementation works internally.

While both the encapsulation and abstraction are important concepts in OOP, it requires more experience with programming in general to really delve into this topic.

For now, it's enough to be aware of their existence in OOP.
*/

// ##Polymorphism
// Polymorphism is a word derived from the Greek language meaning "multiple forms". An alternative translation might be: "something that can take on many shapes".
/*
So, to understand what polymorphism is about, let's consider some real-life objects.

A door has a bell. It could be said that the bell is a property of the door object. This bell can be rung. When would someone ring a bell on the door? Obviously, to get someone to show up at the door.

Now consider a bell on a bicycle. A bicycle has a bell. It could be said that the bell is a property of the bicycle object. This bell could also be rung. However, the reason, the intention, and the result of somebody ringing the bell on a bicycle is not the same as ringing the bell on a door.

The above concepts can be coded in JavaScript as follows:
*/
const bicycle = {
    bell: function() {
        return "Ring, ring! Watch out, please!"
    }
}
const door = {
    bell: function() {
        return "Ring, ring! Come here, please!"
    }
}

// So, I can access the bell() method on the bicycle object, using the following syntax:  
bicycle.bell(); // "Get away, please"
// I can also access the bell() method on the door object, using this syntax:  
door.bell(); // "Come here, please"

function ringTheBell(thing) {
    console.log(thing.bell())
}
/*
Now I have declared a ringTheBell() function. It accepts a thing parameter - which I expect to be an object, namely, either the bicycle object or the door object.

So now, if I call the ringTheBell() function and pass it the bicycle as its single argument, here's the output:
*/

ringTheBell(bicycle); // Ring, ring! Watch out, please!
// However, if I invoke the ringTheBell() function and pass it the door object, I'll get the following output: 
ringTheBell(door); // "Ring, ring! Come here, please!"

// To reiterate, polymorphism is useful because it allows developers to build objects that can have the exact same functionality, namely, functions with the exact same name, which behave exactly the same. However, at the same time, you can override some parts of the shared functionality or even the complete functionality, in some other parts of the OOP structure.

// // Here's an example of polymorphism using classes in JavaScript:

class Bird {
    useWings() {
        console.log("Flying!")
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings()
        console.log("Barely flapping!")
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Diving!")
    }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"
/*
The Penguin and Eagle sub-classes both inherit from the Bird super-class. The Eagle sub-class inherits the useWings() method from the Bird class, but extends it with an additional console log. The Penguin sub-class doesn't inherit the useWings() class - instead, it has its own implementation, although the Penguin class itself does extend the Bird class.  
*/