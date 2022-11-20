/*      write a program that takes a number of greater than 5 digits from input field and
        shows sum of all the odd numbers For Example,if Input is 196783,the sum would be 1 + 9 + 7 + 3 = 20
*/

function CalcSumOfOdd() {
  let num = document.getElementById("input").value;
  let toString = num.toString();

  let length = toString.length;
  let sum = 0;
  if (length > 5) {
    for (let i = 0; i < length; i++) {
      if (toString[i] % 2 != 0) {
        sum = sum + parseInt(toString[i]);
      }
    }
  } else {
    alert("Input Is Less Than 5 Digits");
  }
  console.log("Entered Number : ", num, "\nSum Of Odd : ", sum);
}
