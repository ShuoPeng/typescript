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
var userName = "Shuoss";
console.log(userName);
// default paramters:
var defaultParameterTestFunction = function (a, b) {
    if (b === void 0) { b = 1; }
    return a + b;
};
// const defaultParameterTestFunction = (a:number = 1, b:number) => {
//     console.log(a);
//     console.log(b);
// }
console.log(defaultParameterTestFunction(3));
// array destructuring 
var deArray = ['shuo', 32, true];
var myName = deArray[0], myAge = deArray[1], amIcool = deArray[2], more = deArray.slice(3);
console.log(myName, myAge, amIcool, more);
var deObject = {
    firstName: 'Shuo',
    age: 32,
    sex: 'male'
};
var username = deObject.firstName, age = deObject.age, rest = __rest(deObject, ["firstName", "age"]);
console.log(username, age, rest);
