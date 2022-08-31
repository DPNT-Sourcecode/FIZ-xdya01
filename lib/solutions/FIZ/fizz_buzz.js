'use strict';

module.exports = function (number) {
    // throw new Error("method not implemented");
    if(number % 15 === 0) return "fizz buzz";
    else if (number % 3 === 0) return "fizz";
    else if (number % 5 === 0) return "buzz";
    else return number;
};