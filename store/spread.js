"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const userName = "Shuoss";
console.log(userName);
// default paramters:
const defaultParameterTestFunction = (a, b = 1) => a + b;
// const defaultParameterTestFunction = (a:number = 1, b:number) => {
//     console.log(a);
//     console.log(b);
// }
console.log(defaultParameterTestFunction(3));
// array destructuring 
const deArray = ['shuo', 32, true];
let [myName, myAge, amIcool, ...more] = deArray;
console.log(myName, myAge, amIcool, more);
const deObject = {
    firstName: 'Shuo',
    age: 32,
    sex: 'male'
};
let { firstName: username, age } = deObject, rest = __rest(deObject, ["firstName", "age"]);
console.log(username, age, rest);
