function findTheLargestNumber(num = 1, num2 = 2, num3 = 3, num4 = 4) {
  let largestNumer = num;

  if (num2 > largestNumer) largestNumer = num2;
  if (num3 > largestNumer) largestNumer = num3;
  if (num4 > largestNumer) largestNumer = num4;

  return largestNumer;
}

console.log(findTheLargestNumber(30, 2, 31, 4));

function checkNumberWithinRange(number, lowestNumber, highestNumer) {
  //   if (number >= lowestNumber && number <= highestNumer) return true;
  if (number > lowestNumber && number < highestNumer) return true;
  return false;
}

console.log(checkNumberWithinRange(8, 2, 10));
