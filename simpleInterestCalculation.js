// Simple Interest Calculation function 

function simpleInterestCalculation(principle, rate, time){
      interest = (principle * rate * time)/100;
      return interest;
}
var myPrinciple = 100;
var myRate = 5;
var myTime = 1;
console.log(simpleInterestCalculation(myPrinciple, myRate, myTime));
