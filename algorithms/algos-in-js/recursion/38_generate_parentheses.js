/*
  Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

  Example 1:
  Input: n = 3
  Output: ["((()))","(()())","(())()","()(())","()()()"]
  
  Example 2:
  Input: n = 1
  Output: ["()"]
*/

function generateParenthesis(n) {
  const result = [];
  function backtrack(s = "", open = 0, close = 0) {
    if (s.length === 2 * n) {
      result.push(s);
      return;
    }
    if (open < n) {
      backtrack(s + "(", open + 1, close);
    }
    if (close < open) {
      backtrack(s + ")", open, close + 1);
    }
  }
  backtrack();
  return result;
}

const testCases = [
  [3, ["((()))", "(()())", "(())()", "()(())", "()()()"]],
  [1, ["()"]],
];

testCases.forEach((input, i) => {
  let testCase = i + 1;
  console.log("\nCase ", testCase);
  const n = input[0];
  const output = input[1];
  console.log("N : ", n);
  console.log("Expected : ", output);
  let result = generateParenthesis(n);
  console.log("Output : ", result);
  for (let i = 0; i < output.length; i++) {
    if (!output.includes(result[i])) {
      console.log("FAIL");
      return;
    }
  }
  console.log("PASS");
});
