'use strict';

module.exports = function (number) {
    // throw new Error("method not implemented");
    switch (number) {
        case (number % 3 === 0):
            return "fizz";
            break;
        case (number % 5 === 0):
            return "buzz"; //3 si 5 sunt prime intre ele, deci cautam multiplu de 15
            break;
        case (number % 15 === 0):
            return "fizz buzz";    
            break;
        case (number):
            return number;
            break;
    }
};