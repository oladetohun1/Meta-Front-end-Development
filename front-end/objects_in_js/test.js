const meal = ["soup", "steak", "ice cream"]
let [starter] = meal;
console.log(starter);

let obj = {
    key: 1,
    value: 4
};

let output = { ...obj };
output.value -= obj.key;

console.log(output.value);
