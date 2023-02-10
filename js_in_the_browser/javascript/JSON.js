//convert a JSON string to a regular js object and vice versa

const jsonStr = '{"greeting":"hello"}'


const aPlainObj = JSON.parse(jsonStr);

aPlainObj.response = 'hi';

console.log(aPlainObj);

//vice versa

const data = {
    firstName: "John",
    lastName: "Doe",
    greeting: "Hello"
}
jsonFmt = JSON.stringify(data);
console.log(jsonFmt);