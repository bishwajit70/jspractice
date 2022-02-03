// fibonacci series function 
function fiboSeries(num){
      var fibo = [0, 1];
      for (let i = 2; i <= num; i++ ){
            fibo[i] = fibo[i-1] + fibo[i-2];
      }
      return fibo;
}

var myNumber = 30;
var myFiboSeries = fiboSeries(myNumber);
console.log(myFiboSeries);
