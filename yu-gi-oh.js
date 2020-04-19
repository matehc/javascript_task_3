
function isDivisible(divisor) {

    return function (i) {
        if (!(i % divisor === 0)){
            return false;
        }  
        return true;
    }
   
}


const isDivisibleByTwo = isDivisible(2);
const isDivisibleByThree = isDivisible(3);
const isDivisibleByFive = isDivisible(5);










// write function


// function has one parameter (takes a number/integer)
function yugiohGenerator(num){
    let arrBucket = []
    for (let i = 1; i <= num; i++ ) {

        if(isDivisibleByTwo(i) && isDivisibleByThree(i) && isDivisibleByFive(i)) {
            arrBucket.push("yu-gi-oh");
        } 
        else if (isDivisibleByTwo(i) && isDivisibleByThree(i)) {
            arrBucket.push("yu-gi")
        } 

        else if (isDivisibleByTwo(i) && isDivisibleByFive(i)) {
            arrBucket.push('yu-oh');
        } 
        
        else if (isDivisibleByThree(i) && isDivisibleByFive(i)) {
            arrBucket.push('gi-oh');
        }  
        
        else if (isDivisibleByTwo(i)) {
            arrBucket.push('yu');
        }  
        
        else if (isDivisibleByThree(i)) {
            arrBucket.push('gi');
        } 
        
        else if(isDivisibleByFive(i)){
            arrBucket.push('oh') 
        }
        
        else {
            arrBucket.push(i);
        }
    }

    console.log(arrBucket);
}

yugiohGenerator(10);






















