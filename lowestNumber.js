// lowest number calculation function 
function lowestElement(numbers){
      let lowest = numbers[0];
      for (let i = 0; i < numbers.length; i++){
            const number = numbers[i];
            if(number < lowest){
                  lowest = number;
            }
      }
      return lowest;
}

var ages = [10, 20, 1, 40, 5, 7, 8, 2];
const lowest = lowestElement(ages);
console.log(lowest);