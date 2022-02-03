// Greatest number calculation function 

function greatestNumber(numbers){
      let largest = numbers[0];
      for(let i = 0; i<numbers.length; i++){
            const number = numbers[i];
            if(number > largest){
                  largest = number;
            }
      }
      return largest;
}
var ages = [-10, -20, -30, -40, -5, -7, -8, -2];
const largest = greatestNumber(ages);
console.log(largest);