function milesToKm(miles) {
  var kilometer = miles * 1.60934;
  var kmRound = kilometer.toFixed(2);
  return kmRound;
}
var primaryMiles = 5;
var finalKm = milesToKm(primaryMiles);
console.log("Primary Miles to Kilometer - ", finalKm + " KM");

var secondaryMiles = 2;
var finalKm = milesToKm(secondaryMiles);
console.log("Secondary Miles to Kilometer - ", finalKm + " KM");
