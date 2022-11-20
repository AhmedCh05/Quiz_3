/*

Give an integer N , the task is to find the sum of interior angles of an N sided polygon

*/

function CalcInteriorAngleOfPolygon(N) {
  if (N < 3) {
    return 0;
  } else {
    return (N - 2) * 180;
  }
}

function main() {
  let N = 5;
  console.log(
    "Sum Of Interior Angle Of ",
    N,
    " Sided Polygon : ",
    CalcInteriorAngleOfPolygon(N)
  );
}

main();
