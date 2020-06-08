const userName = "Shuoss";

console.log(userName);

// default paramters:

const defaultParameterTestFunction = (a: number, b: number = 1) => a + b;

// const defaultParameterTestFunction = (a:number = 1, b:number) => {
//     console.log(a);
//     console.log(b);
// }

console.log(defaultParameterTestFunction(3));

// array destructuring 

const deArray = ['shuo', 32, true];

let [ myName, myAge, amIcool, ...more ] = deArray;

console.log(myName, myAge, amIcool, more);

const deObject = {
    firstName: 'Shuo',
    age: 32,
    sex: 'male'
}

let {firstName: username, age, ...rest} = deObject;
console.log(username, age, rest);