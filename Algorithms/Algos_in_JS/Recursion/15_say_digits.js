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

function sayDigits(num) {
  // Base Case
  if (num === 0) {
    return "";
  }
  const currentDigit = num % 10;
  // Hypothesis: Assumption it will get words for remaining numbers
  let remainingDigits = sayDigits(parseInt(num / 10));
  // Induction Step: Building Solution from Assumption
  return remainingDigits + " " + digitWords[currentDigit];
}

const words = sayDigits(4120);
console.log(words);
