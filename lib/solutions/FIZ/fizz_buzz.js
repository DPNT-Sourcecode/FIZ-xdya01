'use strict';

module.exports = function (number) {
    // throw new Error("method not implemented");
    let nr_5 = 0;
    let nr_3 = 0;
    let deluxe = 1; //presupunem ca numarul are deja toate cifrele identice, iar in While verificam acest lucru; Daca variabile isi modifica valoarea in 0, atunci numarul nu este "deluxe";
    let copy_number = number;
    if(copy_number < 10){
        deluxe = 0;
        if(copy_number === 3) nr_3 = 1;
        if(copy_number === 5 ) nr_5 = 1; 
    }
    else{
    while (copy_number !== 0 && (!nr_5 || !nr_3)) {

        if (copy_number >= 10) {
            let u = Math.floor(copy_number / 10);
            if (u % 10 !== copy_number % 10) deluxe = 0;
        }

        if (copy_number % 10 === 5) nr_5 = 1; //am gasit o cifra de 5
        else if (copy_number % 10 === 3) nr_3 = 1; //am gasit o cifra de 3

        copy_number = Math.floor(copy_number / 10);
    }
    }

    if (deluxe === 1 && number % 15 === 0) {
        if(number % 2) return "fizz buzz deluxe";
        else return "fizz buzz fake deluxe";
    }
    else if(deluxe === 1 && (nr_3 === 1 || number % 3 === 0) && number % 5) {
        if (number % 2) return "fizz fake deluxe";
        else return "fizz deluxe";
    }
    else if (deluxe === 1 && (nr_5 === 1 || number % 5 === 0) && number % 3) {
        if(number % 2) return "buzz fake deluxe";
        else return "buzz deluxe";
    }
    else if ((nr_5 === 1 || number % 5 === 0) && (nr_3 === 1 || number % 3 === 0)) return "fizz buzz";
    else if (nr_3 === 1 || number % 3 === 0) return "fizz";
    else if (nr_5 === 1 || number % 5 === 0) return "buzz";
    else if (deluxe === 1) {
        if (number % 2) return "fake deluxe";
        else return "deluxe";
    }
    else return number;
    
};