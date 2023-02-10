// Rest is used tounpack items
const top7 = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven'
]

//destructuring syntax

const [] = top7;

const [first, second, third, ...secondVisit] = top7

console.log(top7);
console.log(secondVisit);
console.log(first);

function addTaxToPrices(taxRate, ...itemsBought){
    return itemsBought.map(item => taxRate * item)

}

let shoppingCart = addTaxToPrices(1.1, 46, 89, 35, 79);

console.log(shoppingCart);