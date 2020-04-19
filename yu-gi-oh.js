// isDivisible by returns a funtion as a variable
function isDivisible(divisor) {

    return function (i) {
        if (!(i % divisor === 0)){
            return false;
        }  
        return true;
    }
   
}
// the numbers of the divisors are passed into the "isDivisible" function
// the function is then passed to "isDivisibleBy..." variables.

const isDivisibleByTwo = isDivisible(2);
const isDivisibleByThree = isDivisible(3);
const isDivisibleByFive = isDivisible(5);



// function has one parameter (takes a number/integer)
function yugiohGenerator(num){
    // arrBucket stores whatever value been pushed if a condition is met.
    let arrBucket = []


    for (let i = 1; i <= num; i++ ) {

        // if number is divisible by 2, 3, and 5
        if(isDivisibleByTwo(i) && isDivisibleByThree(i) && isDivisibleByFive(i)) {
            arrBucket.push("yu-gi-oh");
        } 

        // if number is divisible by 2 and 3
        else if (isDivisibleByTwo(i) && isDivisibleByThree(i)) {
            arrBucket.push("yu-gi")
        } 

        // if number is divisible by 2 and 5
        else if (isDivisibleByTwo(i) && isDivisibleByFive(i)) {
            arrBucket.push('yu-oh');
        } 
        
        // if number is divisible by 3 and 5
        else if (isDivisibleByThree(i) && isDivisibleByFive(i)) {
            arrBucket.push('gi-oh');
        }  
        
        // if number is divisible by 2
        else if (isDivisibleByTwo(i)) {
            arrBucket.push('yu');
        }  
        
        // if number is divisible by 3
        else if (isDivisibleByThree(i)) {
            arrBucket.push('gi');
        } 
        
        // if number is divisible by 5
        else if(isDivisibleByFive(i)){
            arrBucket.push('oh') 
        }
        
        // if non of the conditions are met
        else {
            arrBucket.push(i);
        }
    }

    console.log(arrBucket);
}

yugiohGenerator(10);
yugiohGenerator(30);
yugiohGenerator(50);






















