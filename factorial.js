function getFactorial(number) {
  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial = factorial * i;
  }
  return factorial;
};

let factorialInput = 7;
let checkingFactorial = getFactorial(factorialInput);
console.log(checkingFactorial);

// =====================================================================

// ____________________________________________________________________
// Factorial by While Loop

// function getFactorial(number) {
//   var factorial = 1;
//   var i = 1;
//   while (i <= number) {
//     factorial = factorial * i;
//     i++;
//   } return factorial;
// }
// let myFactorialNumber = 6;
// let myFactorialOutput = getFactorial(myFactorialNumber);
// console.log(myFactorialOutput);

// ________________________________________________________
// Factorial by while or decrementing loop

function getFactorial(number) {
  var factorial = 1;
  var i = number;
  while (i >= 1) {
    factorial = factorial * i;
    i--;
  } return factorial;
}
let myFactorialNumber = 7;
let myFactorialOutput = getFactorial(myFactorialNumber);
console.log(myFactorialOutput);