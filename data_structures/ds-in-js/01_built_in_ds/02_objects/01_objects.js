/**
 *  Object Literal Definition
 */

console.log("\nObject Literals:");
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

/**
 *  Object Definition with new keyword
 */

console.log("\nObjects with new keyword:");
const students = new Object({
  name: "johnny",
  rollNo: "101",
  marks: {
    maths: 60,
    english: 6,
  },
});
console.log(students);

/**
 *  Object Parameterized Constructor Function
 */

console.log("\nConstructor Function:");
function Person(name, age) {
  (this.name = name),
    (this.age = age),
    (this.greet = function () {
      console.log("hello");
    });
}

// create objects
const person1 = new Person("John", 20);
const person2 = new Person("Wick", 25);

// access properties
console.log(person1.name); // John
console.log(person2.name); // Wick

//adding property
person1.gender = "male";

//delete property
delete person2.name;

console.log(person1);
console.log(person2);

//adding new property to constructor function in prototype
Person.prototype.showName = function () {
  return this.name;
};
const person3 = new Person("Monkey", 18);
console.log(person3.showName());

/**
 *
 * Class Definition of creating objects
 *
 */

console.log("\nClasses Objects:");
class Pupil {
  constructor(x, y, z) {
    this.name = x;
    this.age = y;
    this.gender = z;
  }

  greet() {
    console.log("Hello");
  }

  get showName() {
    return this.name;
  }

  set changeGender(x) {
    this.gender = x;
  }
}

const objA = new Pupil("Yuvi", 30, "male");
console.log(objA);
// Setters can set properties by this
objA.changeGender = "female";
// Getters can get properties by this
objA.showName;
console.log(objA);

/**
 *
 * Destructuring Examples
 *
 */

console.log("\nDestructuring :");
const names = ["yuvi", "deep", "sara", "kaka"];
const names2 = [...names, "lovey"];

console.log(...names);
console.log(names);
console.log(names2);

names2.push("chimpa");

console.log(names);
console.log(names2);

const [a, b, ...c] = names2;
console.log(a, b, c);

let { age, name } = person1;
console.log(name, age);
age = 45;
console.log(name, age);
console.log(person1);
console.log(Person);

const obj = { ...person1 };

console.log(person1);
console.log(obj);

obj.name = "yuvi";
obj.exp = 30;

console.log(person1);
console.log(obj);
