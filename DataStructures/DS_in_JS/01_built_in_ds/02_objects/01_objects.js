const obj1 = {
  name: "Yuvi",
  greet: function () {
    console.log("Good Morning");
  },
  "age-now": 28,
};

console.log(obj1.name);
console.log(obj1["age-now"]);
obj1.greet();
