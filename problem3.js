// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

function primeNumber(num) {
    var arr1 = []; // blank array for prime numbers
    for(var i = 2; i <= num; i++) { // for loop, starts from 2 as prime numbers can only be % 1.
        while (num % i === 0) { // checks to see if the num is able to be divided by i. While loop to continue running to check all the numbers.
            arr1.push(i); // when the number can only be % 1, adds it to the array.
            num = num / i; // divides the num by i, to continue checking for prime numbers
        }
    }
    return arr1; 
}

var bigNum = 600851475143; // the changable big number.

function problem3() {
    arr1 = primeNumber(bigNum); // calls the prime number function, using the big number
    return arr1[arr1.length - 1]; // returns the biggest number, the last one in the array.
};
        
console.log(problem3());

// 6857