/*
    Create a age calculator that takes date of birth of user and shows age in years,months and days
*/

function CalcAge(dob) {
  let B_Year = parseInt(dob.substring(dob.length - 4));
  let B_month = parseInt(dob.substring(3, 5));
  let B_day = parseInt(dob.substring(0, 2));

  let currentDay = new Date().getDate();
  let currentMonth = new Date().getMonth();
  let currentYear = new Date().getFullYear();

  let fAgeMonth = 0;
  let fAgeDay = 0;
  let fAgeYear = 0;

  if (B_month > currentMonth) {
    fAgeMonth = B_month - 1;
  } else {
    fAgeMonth = currentMonth - B_month - 1;
  }
  if (B_day > currentDay) {
    fAgeDay = B_day;
  } else {
    fAgeDay = currentDay - B_day;
  }
  fAgeYear = currentYear - B_Year - 1;

  console.log(
    "Your Age Is : ",
    fAgeYear,
    " Years , ",
    fAgeMonth,
    " Months , ",
    fAgeDay,
    " Days ..."
  );
}

function main() {
  CalcAge("05-12-1999");
}

main();
