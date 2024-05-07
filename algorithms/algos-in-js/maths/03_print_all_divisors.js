// Method 1
// Time Complexity: O(n)
// Space Complexity: O(1)

function method1() {
  let n = 36;
  let output = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      output.push(i);
    }
  }
  console.log(output);
}

method1();

// Method 2
// Time Complexity: O(n/2)
// Space Complexity: O(1)
function method2() {
  let n = 36;
  let output = [];
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      output.push(i);
    }
  }
  output.push(n);
  console.log(output);
}

method2();
