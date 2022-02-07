// Calculate prime number 

// function primeSerise(numbers){
//       let primeNumbers = [2];
//       for(let i = 2; i <= numbers; i++){
//             // console.log(primeNumbers);
//             primeNumbers = primeNumbers[i] + primeNumbers[i+1];
//       }
//       return primeNumbers;
// }
// let myNumbers = 5; 
// let primeNumbers = primeSerise(myNumbers);
// console.log(primeNumbers);

/* function isPrime(num) {
      if (num <= 1) { 
          return false;
      } else {
          for (var i = 2; i < num; i++) {
              if (num % i === 0) {
                  return false; 
              }
          }
          return true;
      }  
  } */

//   for(i = 2, i <= 10; i++;){
//         if(i < 2){
//               return false;
//         }
//         if(i % 2 == 0){
//               console.log(i);
//         }
//         return i;
//   }
function primeSerise(num){
      let primes = [];
      for (let i=2; i<num.length; i++){
            if(num[i] < 2){
                  console.log(`${i} is not a prime number`);
            }
            if(num[i] % 2 != 0){
                  primes.push(num[i]);
            }
      }
      return primes;
}
let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
console.log(primeSerise(myNumbers));