// simple way
// var inches = 132;
// var feet = inches / 12; //1foot = 12inch

// console.log(feet);

// __________________________________________________________________________________
function inchToFeet(inch) {
  var feet = inch / 12;
  return feet;
}

var temporaryInch = 144;
var feet = inchToFeet(temporaryInch);
console.log(feet);

var secondaryInch = 132;
var feet = inchToFeet(secondaryInch);
console.log(feet);

var primaryInch = 120;
var feet = inchToFeet(primaryInch);
console.log(feet);
