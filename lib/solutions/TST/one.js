const number = 577;
if (number % 15 === 0) return "fizz buzz";
else {
    let nr_5 = 0;
    let nr_3 = 0;
    let copy_number = number;
    while (copy_number !== 0) {
        if (copy_number % 10 === 5) nr_5 = 1; //am gasit o cifra de 5
        else if (copy_number % 10 === 3) nr_3 = 1; //am gasit o cifra de 3

        copy_number = copy_number / 10;
    }
    console.log(nr_5);
    if (nr_5 === 1 && nr_3 === 1) return "fizz buzz";
    else if (nr_5 === 1 && number % 3 === 0) return "fizz buzz";
    else if (nr_3 === 1 && number % 5 === 0) return "fizz buzz";
    else if (nr_3 === 1 || number % 3 === 0) return "fizz";
    else if (nr_5 === 1 || number % 5 === 0) return "buzz";
    else return number;

}