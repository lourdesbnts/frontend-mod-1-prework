/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any properties at this time!!

// Prompt 1: Dog
//class Dog {
  //constructor() {
//  }
//}
//var dog1 = new Dog("pitbull", 5, "70lbs");
//var dog2 = new Dog("german shepard", 1, "60lbs");
 //console.log(dog1);
 //console.log(dog2);
// Prompt 2: Snack
//class Snack {
  //constructor() {

//  }
//}
//var healthySnack  = new Snack("apple", 95, 4);
//var unhealthySnack = new Snack("twinkie", 260, 2);
// Prompt 3: Shirt
//class Shirt
  //constructor() {

  //}
//}
//var formal = new Shirt("long sleeve", " organic cotton", "white");
//var casual = new Shirt("short sleeve", "cotton", "red" );
//console.log(formal);
//console.log(casual);
//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog
//class Dog {
//  constructor() {
  //this.breed = breed;
//  this.age = age;
//  this.weight = weight;
 //}
//}

//var dog1 = new Dog("pitbull", 5, "70lbs");
//var dog2 = new Dog("german shepard", 1, "60lbs");

//console.log(dog1);
//console.log(dog2);
// Prompt 2: Snack
//class Snack {
  //constructor() {
    //this.type = type;
    //this.calories = calories;
    //this.variety= variety;
  //}
//}
//var healthy = new Snack("apple", 95, 4);
//var unhealthy = new Snack("twinkie", 260, 2);

//console.log(healthy);
//console.log(unhealthy);

// Prompt 3: Shirt
//class Shirt {
  //constructor() {
    //this.type = type;
    //this.material = material;
    //this.color = color;
  //}
//}

//var formal = new Shirt("long sleeve", "organic cotton", "white");
//var casual = new Shirt("short sleeve", "cotton", "red")

//console.log(formal);
//console.log(casual);
//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog
class Dog {
  constructor(breed, age, weight) {
    this.breed = breed
    this.age = age
    this.weight = weight
  }
}
var dog1 = new Dog("pitbull", 5, "70lbs");
var dog2 = new Dog("german shepard", 1, "60lbs");

console.log(dog1);
console.log(dog2);

// Prompt 2: Snack
class Snack {
  constructor(type, calories, variety) {
    this.type = type;
    this.calories = calories;
    this.variety = variety;
  }
}
var healthy = new Snack("apple", 95, 4);
var unhealthy = new Snack("twinkie", 260, 2);

console.log(healthy);
console.log(unhealthy);
// Prompt 3: Shirt
class Shirt {
  constructor(type, material, color) {
    this.type = type
    this.material = material
    this.color = color
  }
}
 var formal = new Shirt("long sleeve", "organic cotton", "white");
 var casual = new Shirt("short sleeve", "cotton", "red");

 console.log(formal);
 console.log(casual);
