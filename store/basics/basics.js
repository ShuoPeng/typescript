"use strict";
function badd(n1, n2, showResults, phrase) {
    var result = n1 + n2;
    if (showResults) {
        console.log(phrase + result);
    }
    return result;
}
var number1 = 5;
var number2 = 2.8;
var show = true;
var resultPhrase = "The result is: ";
badd(number1, number2, show, resultPhrase);
