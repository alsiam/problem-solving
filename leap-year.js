function leapYear(year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    return true;
  } else {
    return false;
  }
}
let inputYear = 2100;
let checkingYear = leapYear(inputYear);
console.log(checkingYear);
