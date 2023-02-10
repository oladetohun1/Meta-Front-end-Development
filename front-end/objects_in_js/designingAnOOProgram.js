/*
Designing an OO Program
In this reading, I will show you how to create classes in JavaScript, using all the concepts you've learned so far.

Specifically, I'm preparing to build the following inheritance hierarchy:

                  Animal
                   /    \
                Cat      Bird
             /    \          \
      HouseCat   Tiger      Parrot

There are two keywords that are essential for OOP with classes in JavaScript.

These keywords are extends and super.

The extends keyword allows me to inherit from an existing class.

Based on the above hierarchy, I can code the Animal class like this:

*/

class Animal{
    constructor(color, energy){
        this.color = color;
        this.energy = energy;
    };
    isActive(){

    };
    sleep(){
        
    };
    getColor(){

    };
};
class Cat extends Animal{

};
class Bird extends Animal{

};

class HouseCat extends Cat{

};
class Tiger extends cat{

};

class Parrot extends Bird{
    
};
