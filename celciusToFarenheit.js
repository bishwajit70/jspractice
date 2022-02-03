/* Celcius to Farenheit 
Conversion function  */


function celciusToFarenheit(celcius){
      farenheit = (celcius * 9/5) + 32;
      return farenheit;
}
var myCelcius = 57;
console.log(celciusToFarenheit(myCelcius));