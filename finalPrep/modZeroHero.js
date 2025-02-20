// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings
var heroName = "Water Girl";
var specialAbility = "controls all bodies of water with her mind";
// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility
var greeting = "Hi I'm Water Girl";
var catchphrase = "I'm here to save the day";
// Declare two variables - power AND energy - set to integers
var power = 9000;
var energy = -5;
// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy
var fullPower = 10000000;
var fullEnergy = 2000000;
// Declare two variables - isHuman and identityConcealed - assigned to booleans
var isHuman = true;
var identityConcealed = true;

// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings
var archEnemies = ["Crazy Stalker Girl", "Ugly Ex Boyfriend", "Bully from Middle School"];
var sideKick = ["Mia the Shepard", "Rudy the Water Monster", "Ariel the Mermaid"];
// Print the first sidekick to your console
console.log(sideKick[0]);
// Print the last archEnemy to the console
console.log(archEnemies[2]);
// Write some code to add a new archEnemy to the archEnemies array
archEnemies[3] = "Scary Gorilla"
// Print the archEnemies array to console to ensure you added a new archEnemy
console.log(archEnemies);
// Remove the first sidekick from the sidekicks array
sideKick.shift();
// Print the sidekicks array to console to ensure you added a new sidekick
console.log(sideKick);
// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel
var saveTheDay = "All done here, for now!";
var badExcuse = "I don't have enough strength for that";

function assessSituation(dangerLevel, saveTheDay, badExcuse) {

  if (dangerLevel > 50) {
    console.log(badExcuse);
  }
  else if (dangerLevel >= 10 && dangerLevel <= 50) {
    console.log(saveTheDay);
  } else {
    console.log("Meh, hard pass.");
  }
}

// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.

//Test Cases
var announcement = 'Never fear, the Courageous Curly Bracket is here!';
var excuse = 'I think I forgot to lock up my 1992 Toyota Corolla. Be right back.';
// assessSituation(99, announcement, excuse) > Should print - 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
//assessSituation(21, announcement, excuse) > should print - 'Never fear, the Courageous Curly Bracket is here!'
//assessSituation(3, announcement, excuse) > should print - "Meh. Hard pass."
assessSituation(21, saveTheDay, badExcuse);
assessSituation(3, saveTheDay, badExcuse);
assessSituation(99, announcement, excuse);
// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)
var scaryMonster = {
  name: "Spider-Man",
  smell: "good",
  weight: 170,
  citiesDestroyed: ["Denver", "Aurora", "Commerce City"],
  luckyNumbers: [7, 4, 333],
  address: {
    number: 1882,
    street: "115th",
    state: "Thornton",
    zip: 92648
  }
}

// Create a new class called SuperHero
// - Your class should have the following DYNAMIC values
//   - name
//   - superpower
//   - age
// - Your class should have the following STATIC values
//   - archNemesis, assigned to "The Syntax Error"
//   - powerLevel = 100
//   - energyLevel = 50
class SuperHero{
  constructor(name, superPower, age){
    this.name = name;
    this.superpower superPower;
    this.age = age;
    this.archNemesis = "The Syntax Error";
    this. powerLevel = 100;
    this.energyLevel = 50;
  }

  sayName() {
    console.log(this.name);
  }
  maximizeEnergy() {
    this.energyLevel = 1000;
  }
  gainPower(number) {
    this.PowerLevel = this.powerLevel + numbers;
   }
 }
// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number

// - Create 2 instances of your SuperHero class
var myHero = new SuperHero("Super Mia", "super speed", 2);
var myHero2 = new SuperHero("Rudy Rude", "super strength", 25);

console.log(myHero);
console.log(myHero2);

myHero.gainPower(50);
console.log(myHero);

myHero2.maximizeEnergy();
console.log(myHero2);
// Reflection
// What parts were most difficult about this exerise?
// Classes are a big struggle.
// What parts felt most comfortable to you?
//Variable assigning and reassigning.......
// What skills do you need to continue to practice before starting Mod 1?
// I need to go everything honestly.
