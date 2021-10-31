/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "hat";
var bearChoice = 2;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  console.log("You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!");
} else if (bearChoice === 2) {
  console.log("You tell the bear the " + bearClothing + " is too small and it starts to cry!");
} else if (bearChoice === 3) {
  console.log("You run as fast as you can into the next room. It's full of snakes!");
} else {
  console.log("You stay with the bear and become it's best friend!");
}

/*
Questions

1. In English, using technical vocabulary, describe what is happening between lines 14 and 18.
// Line 14 we have an if statement with a condition asking if doorChoice is strictly equal to 1. Line 15 is the block of code that would execute if this condtion evaluates to true.
Line 16 we have an else statement, line 17 is the block og code that will execute if the first condtion evaluates to false.

2. What variable has a new value assigned to it after the first if statement executes?
// I don't believe a new value is assigned to any variable since the first statement would execute as true and it would stay as hat. If it's false then variable bearClothing would have a new value assigned.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
// The bearClothing value would be scarf.

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
// Our if statement has a condition evaluating if bearChoice is strictly equal to 1. Line 28 is the block of code that executes if the condition evaluates to true. Line 29 is an else if conditional statement evaluating if bearChoice is strictly equal to 2. Line 30 is the block of code that executes if the first condition were to evaluate as false and the second condtion evaluates to true. Line 31 is a second if else statement with a condtion evaluating if bearChoice is strictly equal to 3. Line 32 is the block of code that will run if condition 1 and condtion 2 were to evaluate as false and condition 3 is true. Finally line 33 is an else statement and the block of code on line 34 would execute if conditions 1, 2, and 3 all were to evaluate as false.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
// If bearChoice variable is 3 then the block of code that would execute would be "You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will the final outcome be?
// If the variable doorChoice is equal to one and the variable bearChoice is equal to 2 the final outcome would be "You see a bear putting on a hat, it looks like that hat is too small for the bear. You tell the bear the hat is too small and it starts to cry!"

7. What is your favorite ending?
//It would have to be the one where I stay with the bear and become it's best friend.
*/
