// Method 1
// Time - O(n) & Space - O(1)

function Method1() {
  function isPrime(N) {
    for (let i = 2; i < N; i++) {
      if (N % i === 0) {
        return false;
      }
    }
    return true;
  }

  let n = 11;
  let ans = isPrime(n);

  if (n !== 1 && ans === true) {
    console.log("Prime Number");
  } else {
    console.log("Non Prime Number");
  }
}

// Method 2
// Time - O(√n) & Space - O(1)

function Method2() {
  function isPrime(N) {
    for (let i = 2; i <= Math.sqrt(N); i++) {
      if (N % i === 0) {
        return false;
      }
    }
    return true;
  }

  let n = 11;
  let ans = isPrime(n);

  if (n !== 1 && ans === true) {
    console.log("Prime Number");
  } else {
    console.log("Non Prime Number");
  }
}

Method1();
Method2();
