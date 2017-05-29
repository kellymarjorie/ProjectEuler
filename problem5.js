//2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

var i = 1, num = 20;

while(i <= 20){
  if(num % i == 0){
    i++;
  } else {
    num += 20;
    i = 1;
  }
}

console.log(num) // 232792560
