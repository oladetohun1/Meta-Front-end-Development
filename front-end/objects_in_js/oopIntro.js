//oop is a paradigm such as functional programming
// paradigm in programming -> a way or a style to write code


//using functional programming to see the difference
var shoes = 100;
var stateTax = 1.2;

function totalPrice(shoes, tax) {
    return shoes * tax;
}

var toPay = totalPrice(shoes, stateTax);
console.log(toPay);

//using the oop paradigm

// first style
var purchase  = {
    shoes : 100,
    stateTax : 1.2,
    totalPrice: function() {
        var price = purchase.shoes * purchase.stateTax;
        console.log('Total price:' , price);
    }
}
purchase.totalPrice()

var purchase  = {
    shoes : 100,
    stateTax : 1.2,
    totalPrice: function() {
        var price = this.shoes * this.stateTax;
        console.log('Total price:' , price);
    }
}
purchase.totalPrice()