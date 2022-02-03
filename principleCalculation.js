// Principle Calculation function 
function principleCalculation(interest, time, rate){
      var principle = (100*interest)/(rate*time);
      return principle;
}
var myInterest = 5; 
var myTime = 1;
var myRate = 25;

console.log(principleCalculation(myInterest, myTime, myRate));