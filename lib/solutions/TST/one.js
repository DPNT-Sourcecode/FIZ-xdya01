const number = 7556;

if (number % 15 === 0) return "fizz buzz";
else {
    let nr_5 = 0;
    let nr_3 = 0;
    for (let i = 0; i < number.length; i ++){
        if(number[i] === 5) nr_5 = 1;
        if(number[i] === 3) nr_3 = 1;
        console.log(number[i]);
    }
    
    if (nr_5 === 1 && nr_3 === 1) return "fizz buzz";
    else if (nr_5 === 1 && number % 3 === 0) return "fizz buzz";
    else if (nr_3 === 1 && number % 5 === 0) return "fizz buzz";
    else if (nr_3 === 1 || number % 3 === 0) return "fizz";
    else if (nr_5 === 1 || number % 5 === 0) return "buzz";
    else return number;

}




