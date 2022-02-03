// simple rate calculation function 
function simpleRateCalculation(principle, interest, time){
      var rate = (interest * 100)/(principle * time);
      return rate;
}

var myPrinciple = 100;
var myInterest = 5;
var myTime = 5; 

console.log(simpleRateCalculation(myPrinciple, myInterest, myTime));
