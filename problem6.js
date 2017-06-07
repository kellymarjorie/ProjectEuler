// The sum of the squares of the first ten natural numbers is,

// 12 + 22 + ... + 102 = 385
// The square of the sum of the first ten natural numbers is,

// (1 + 2 + ... + 10)2 = 552 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

function sumSquare(num){
  var a = [], b = [];
  for(var i = 1; i <= num; i++){
    
    // numbers 1 - 100, squared and then added together
    x = i * i;
    a.push(x);
    c = a.reduce(function(a,b){return a + b;}) // 338350
    
    // numbers 1 - 100, added together and then squared
    b.push(i);
    y = b.reduce(function(a,b) {return a+b;});
    z = y * y; // 25502500
  }
  // difference between the two answers
  console.log(z - c); // 25502500 - 338350 = 25164150
}

sumSquare(100);
