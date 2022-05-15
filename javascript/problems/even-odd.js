// function inputNumber(number){
//     var inputNum= number%2;
//     if(inputNum == 0){
//         console.log("Its Odd Number")
//     }
//     else(
//         console.log("its Even numebr")
//     )
//     return number;
// }

// var myNumber = 13;
// var checkingNumber= inputNumber(myNumber);
// console.log(checkingNumber);

// =========================================================================
// Find Even Number or Odd Number
// ________________________________________________________________________
// Even Number

// function checkEvenNumber(number) {
//   if (number % 2 == 0) {
//     return "It's a even number :) result is " + true;
//   }
//   return "It's not a even number :) result is " + false;
// }
// var myNumber = 34;
// var checkNumber = checkEvenNumber(myNumber);
// console.log(checkNumber);

// var myCrush = 5;
// var checkNumber = checkEvenNumber(myCrush);
// console.log(checkNumber);

// ________________________________________________________________
// Odd Number

function checkOddNumber(number) {
  if (number % 2 != 0) {
    return "This is a Odd number :)";
  }
  return "This is a Even number :)";
}
var myNumber = 36;
var checkNumber = checkOddNumber(myNumber);
console.log(checkNumber);
// _________________________________________________________________