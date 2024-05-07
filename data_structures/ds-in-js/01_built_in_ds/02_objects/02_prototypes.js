/**
 * Object Creation
 *
 */

// Object Literals
console.log("\nObject Literals:");
const fruits = {
  name: "apple",
  price: "50 RS/KG",
};
console.log(fruits);

// With new keyword and Object constructor
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
 *
 * If we have to create good amount of objects we use constructor fn
 * It's like blueprint to new objects
 *
 * Constructor Function
 */

// Parameterized Constructor Function
console.log("\nConstructor Function:");
function Person(name, age) {
  (this.name = name),
    (this.age = age),
    (this.greet = function () {
      console.log("hello");
    });
}

console.log("\nObject Operations:");
// CREATE OBJECTS
const person1 = new Person("John", 20);
const person2 = new Person("Wick", 25);

// ACCESS PROPERTIES
console.log(person1.name); // John
console.log(person2.name); // Wick

// ADDING PROPERTY
person1.gender = "male";

// DELETE PROPERTY
delete person2.name;

console.log(person1);
console.log(person2);

/**
 * 
 * Prototypes
 * 
 * ADD NEW PROPERTY TO CONSTRUCTOR FUNCTION IN PROTOTYPE
 * 
   PROTOTYPE IS USED TO SAVE MEMORY IN PROGRAM WHEN DIFFERENT OBJECTS OF SAME CONSTRUCTOR HAVE SAME PROPERTY WE SET PROTOTYPES SO THAT ALL OBJECTS CREATED HAVE THOSE PROPERTIES AND AVOID DUPLICATE METHODS/PROPERTIES. IT IS OLDER WAY TO ACHIEVE INHERITANCE.
 */
console.log("\nPrototypes:");
function Todo(name, completed) {
  this.name = name;
  this.completed = completed;
}

Todo.prototype.getTodoName = function () {
  console.log(this.name);
};

Todo.prototype.getTodoCheck = function () {
  console.log(this.completed);
};

const todo = new Todo("buy milk", false);

console.log(todo);
todo.getTodoName();

/*

 ABOVE ARE CUSTOM OBJECT WITH PROTOTYPE METHODS
 JAVASCRIPT GIVES DEFAULT PROTOTYPES METHOD/PROPERTIES
 LIKE ARRAY/OBJECTS HAVE SUCH AS .LENGTH, FOREACH, MAP, FILTER THESE METHODS COME WITH ALL ARRAYS PROTOTYPES, IT INHERITS ALL ARRAY PROTOTYPES
 
 BEHIND THE SCENES JS IS CREATED NEW ARRAY OBJECTS 
 const arr = new Array (1,2,3,4,5);

 WE CAN CREATE ALL PRIMITIVE DATA TYPES WITH NEW KEYWORD AS OBJECTS - WE USUALLY DON'T DO THIS
 PRIMITIVES ALSO HAVE SOME METHODS BECAUSE THEY TEMPORARILY WRAPPED THEMSELVES AS OBJ WHEN USING THOSE METHODS

*/

const player = "dave";
const playerObj = new String("dave");
console.log(player);
console.log(typeof player);
console.log(playerObj);
console.log(typeof playerObj);

console.log(player.toUpperCase()); // TEMPORARILY WRAPPED AS STRING OBJ

/**
 *
 * PROTOTYPES/CONSTRUCTOR INHERITANCE
 *
 * ITS LIKE WE DO INHERITANCE IN CLASSES IN OTHER LANGUAGES
 * WE USE IT BEFORE ES6 CLASSES WAS NOT INTRODUCED
 *
 */
console.log("\nPrototype Inheritance:");
function Enemy(life, name, level) {
  this.life = life;
  this.name = name;
  this.level = level;
}

Enemy.prototype.getInfo = function () {
  console.log(this.life, this.name, this.level);
};

Enemy.prototype.attack = function () {
  console.log(`${this.name} has attacked!`);
};

Enemy.prototype.block = function () {
  console.log(`${this.name} has blocked!`);
};

/*
 WE CAN CREATE ENEMY OBJECTS BUT WE ARE USING AS BLUEPRINT/ABSTRACT FOR CREATING MORE SPECIFIC ENEMY

 NOW WE INHERIT ALL ABOVE PROPERTIES AND METHODS TO CONSTRUCTOR AND MADE SOME OWN
*/

// FOR CONSTRUCTOR INHERITANCE WITHOUT PROTOTYPE
function Dragon1(life, name, level, color, spell) {
  // HERE THIS KEYWORD REFERS TO DRAGON OBJ WHEN WE CREATE DRAGON OBJ WITH NEW KEYWORD
  Enemy.call(this, life, name, level);
  this.color = color;
  this.spell = spell;
}

// IT WILL NOT INHERITS PROTOTYPE PROPERTIES (getInfo, Attack, Block)
const dragon1 = new Dragon1(100, "Dragon", 25, "green", "fire");
console.log(dragon1);

// FOR CONSTRUCTOR INHERITANCE WITH PROTOTYPE
function Dragon2(life, name, level, color, spell) {
  // HERE THIS KEYWORD REFERS TO DRAGON OBJ WHEN WE CREATE DRAGON OBJ WITH NEW KEYWORD
  Enemy.call(this, life, name, level);
  this.color = color;
  this.spell = spell;
}

// DRAGON2 SPECIFIC PROTOTYPE
Dragon2.prototype.fireBreath = function () {
  console.log("Fire!");
};

// INHERIT PROTOTYPES
Dragon2.prototype = Object.create(Enemy.prototype);

// IT WILL INHERITS PROTOTYPE PROPERTIES -- IT MAKES PROTOTYPE CHAINING
const dragon2 = new Dragon2(100, "Charizard", 25, "green", "fire");
console.log(dragon2);

/**
 * Classes
 *
 * IN PROTOTYPES WE ARE ACTUALLY EMULATING CLASSES
 * BUT AFTER ES6 CLASSES WAS INTRODUCED JAVASCRIPT
 * SO NOT MORE UGLY CODE
 *
 */

// REFACTOR ABOVE CODE IN CLASSES
console.log("\nClasses:");
class Enemy2 {
  constructor(life, name, level) {
    this.life = life;
    this.name = name;
    this.level = level;
  }

  getInfo() {
    console.log(this.life, this.name, this.level);
  }

  attack() {
    console.log(`${this.name} has attacked!`);
  }

  block() {
    console.log(`${this.name} has blocked!`);
  }
}

const turtle = new Enemy2(25, "Squidle", 10);
console.log(turtle);

// INHERITANCE IN CLASSES

class Dragon3 extends Enemy2 {
  constructor(life, name, level, color, spell) {
    // SUPER KEYWORD CALLING PARENT CLASS CONSTRUCTOR FOR INITIALIZE VALUES
    super(life, name, level);
    // CLASS SPECIFIC CONSTRUCTOR
    this.color = color;
    this.spell = spell;
  }
  // CLASS SPECIFIC METHOD
  fireBreath() {
    console.log("Fire!");
  }
}

const dragon3 = new Dragon3(20, "Giachi", 105, "blue", "yell");
console.log(dragon3);
