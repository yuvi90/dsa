const digitWords = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

function sayDigits(num, string = "") {
  // Base Case
  if (num === 0) {
    return string;
  }

  // Hypothesis: Assumption it will get words for remaining numbers
  let remainingDigits = sayDigits(parseInt(num / 10), string);

  // Induction Step: Building Solution from Assumption
  const digit = num % 10;
  return remainingDigits + " " + digitWords[digit];
}

const words = sayDigits(4120);
console.log(words);
