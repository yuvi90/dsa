// Method 1
// Time Complexity: O(n)
// Space Complexity: O(1)
function method1() {
  function countDigits(n) {
    let x = n;
    let count = 0;
    while (x !== 0) {
      x = Math.floor(x / 10);
      count++;
    }
    return count;
  }

  let n = 12345;
  console.log("Number of digits in " + n + " is " + countDigits(n));
}
method1();

// Method 2
// Time Complexity: O(1)
// Space Complexity: O(1)
function method2() {
  function countDigits(n) {
    let x = n.toString();
    return x.length;
  }

  let n = 12345;
  console.log("Number of digits in " + n + " is " + countDigits(n));
}
method2();

// Method 3
// Time Complexity: O(1)
// Space Complexity: O(1)

// n = 12345
// log10(12345) = 4.091
// Integral part of 4.091 is 4 and 4 + 1 =  5 which is also the number of digits in 12345

function method3() {
  function countDigits(n) {
    let digits = Math.floor(Math.log10(n) + 1);
    return digits;
  }

  let n = 12345;
  console.log("Number of digits in " + n + " is " + countDigits(n));
}
method3();
