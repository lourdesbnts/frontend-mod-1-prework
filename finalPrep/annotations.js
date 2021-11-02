// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
// a function declared buildABear with 5 parameters
function buildABear(name, age, fur, clothes, specialPower) {
// 3 variables declared with string, array, concatenations
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  var demographics = [name, age];
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  // Object literal with 6 key values
  var builtBear = {
    basicInfo: demographics,
    clothes: clothes,
    exterior: fur,
    cost: 49.99,
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    isCuddly: true,
  };

  return builtBear
}
//arguments
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
// function declared fizzBuzz with 3 parameters
function fizzBuzz(num1, num2, range) {
// loop checking condition
  for (var i = 0; i <= range; i++) {
    // condition i divided by num1 is strictly equal to 0 and operator i divided by num2 strctly equal to 0
    if (i % num1 === 0 && i % num2 === 0) {
      // this will print if condition is met
      console.log('fizzbuzz');
      //condition i divided by num1 strictly equal to 0
    } else if (i % num1 === 0) {
      //this will print if previous condition is false and this is true
      console.log('fizz');
      //else if condition i divided by num2 strictly equal to 0
    } else if (i % num2 === 0) {
      //this will print if previous conditions are false and this is true
      console.log('buzz');
      //this will print of all previous conditions are false
    } else {
      console.log(i);
    }
  }
}
// argument called
fizzBuzz(3, 5, 100);
fizzbuzz(5, 8, 400);
