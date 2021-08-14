function factorial(n) {
   if(n == 1){
       return 1;
   }
   return n * factorial(n - 1);

}

var factorialNumber = 6;
var factorialOutput = factorial(factorialNumber);
console.log(factorialOutput);