// Grade Calculation function 
function gradeCalculation(number){
      if(number >= 80 && number <=100){
            return "Your grade is A+";
      }
      else if(number < 80 && number >= 70){
            return "Your grade is A";
      }
      else if(number < 70 && number >= 60){
            return "Your grade is A-";
      }
      else if(number < 60 && number >= 50){
            return "Your grade is B";
      }
      else if(number < 50 && number >= 40){
            return "Your grade is C";
      }
      else if(number < 40 && number >= 33){
            return "Your grade is D";
      }
      else if (number < 33 && number >= 0){
            return "You have failed.";
      }
}
var myNumber = 10;
console.log(gradeCalculation(myNumber));