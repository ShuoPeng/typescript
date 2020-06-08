"use strict";
function badd(n1, n2, showResults, phrase) {
    const result = n1 + n2;
    if (showResults) {
        console.log(phrase + result);
    }
    return result;
}
const number1 = 5;
const number2 = 2.8;
const show = true;
const resultPhrase = "The result is: ";
badd(number1, number2, show, resultPhrase);
