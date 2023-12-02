function calculateFactorial(number){

    if(typeof number != "number"){
        return new Error("Wrong data type");
    }

    if(number < 0){
        return new Error("Factorial is only defined for positive integers");
    }

    if(!Number.isInteger(number)){  
        return new Error("Factorial is only defined for positive integers, not decimals"); 
    }

    if(number == 0 || number == 1){
        return 1;
    }

    return number*calculateFactorial(number - 1);
}
//tests
console.log(calculateFactorial(0));
console.log(calculateFactorial(1));
console.log(calculateFactorial(2));
console.log(calculateFactorial(3));
console.log(calculateFactorial(4));
console.log(calculateFactorial(5));
console.log(calculateFactorial(6));
console.log(calculateFactorial(7));
console.log(calculateFactorial(8));
console.log(calculateFactorial(0.2));
console.log(calculateFactorial(-1));
console.log(calculateFactorial("2"));
