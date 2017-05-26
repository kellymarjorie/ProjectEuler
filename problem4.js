// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

var result,
    max = 0;

for (var a = 999; a >= 100; a--){ 
  for (var b = a; b >= 100; b--){
    var d = a * b;
    var c = parseInt(d.toString().split('').reverse().join(''));
    if (c === d){
      if(max < d){
        max = d;
        console.log(a + ' * ' + b + ' = ' + d); 
        break;
      }
    }
  }
}

//993 * 913 = 906609
