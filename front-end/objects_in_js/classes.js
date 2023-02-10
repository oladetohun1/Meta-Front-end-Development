// classes -> They are essentially a blueprint that you can repeatedly use to build new objects of a certain kind, as many times as you like
/* classes contains:
-> The class name - which must start with capital letter
-> The constructor function- This is used when instantiating new objects, instances of a given class
-> Methods - as many methods that may be needed may be added after adding the constructor
*/
//you can now have access to the objects and properties of the class
//  For example

class Car {
    constructor(color, speed){
        this.color = color;
        this.speed = speed;
    }

    turboOn(){
        console.log("turbo is on!");
    }
}
const car = new Car;
car.turboOn();