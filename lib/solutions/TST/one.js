const number = 3510;
let nr_5 = 0;
let nr_3 = 0;
let deluxe = 0;
let copy_number = number;
let digits = 0;
if (copy_number < 10) {
    deluxe = 0;
    if (copy_number === 3) nr_3 = 1;
    if (copy_number === 5) nr_5 = 1;
}
else {
    while (copy_number !== 0) {

        // if (copy_number >= 10) {
        //     let u = Math.floor(copy_number / 10);
        //     if (u % 10 !== copy_number % 10) deluxe = 0;
        // }

        if (copy_number % 10 === 5) nr_5++;
        else if (copy_number % 10 === 3) nr_3++;

        digits++;
        copy_number = Math.floor(copy_number / 10);
    }
}
//stabilim daca numarul este deluxe
if (number % 3 === 0 && nr_3 === digits && nr_5 === 0 && number % 5) deluxe = 1;
if (number % 5 === 0 && nr_5 === digits && nr_3 === 0 && number % 3) deluxe = 1;

if (deluxe === 1 && number % 15 === 0) {
    if (number % 2) return "fizz buzz fake deluxe";
    else return "fizz buzz deluxe";
}
if (deluxe === 1 && nr_3 === digits && number % 3 === 0) {
    if (number % 2) return "fizz fake deluxe";
    else return "fizz deluxe";
}
else if (deluxe === 1 && nr_5 === digits && number % 5 === 0) {
    if (number % 2) return "buzz fake deluxe";
    else return "buzz deluxe";
}
else if ((nr_5 > 0 || number % 5 === 0) && (nr_3 > 0 || number % 3 === 0)) console.log("fizz buzz");
else if (nr_3 > 0 || number % 3 === 0) return "fizz";
else if (nr_5 > 0 || number % 5 === 0) return "buzz";
else return number;
