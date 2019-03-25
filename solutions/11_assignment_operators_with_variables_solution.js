// Now we're going to talk about using the mathematical operators that
// we went over before to modify variables
// 
// Let's think of a video game character - they have a level, an attack
// level, defense level, and health, so let's define those variables
// below

// Write your code below for the following:
// Define a variable called health and set it to 100
// Define a variable called attack and set it to 5
// Define a variable called defense and set it to 5
// Define a variable called level and set it to 1

var health = 100
var attack = 5
var defense = 5
var level = 1

// Now that we have the variables defined, let's modify them
// Say the character "levels up" - this means that their
// attributes will increase.
// 
// To add to a variable, use the + operator. For example, let's look
// at the following code
// 
// var num = 1
// num = num + 1
// num += 1
// 
// The code above will increase the value of the variable num by one. Note that
// there is no difference between num = num + 1, and num += 1. The second option
// is just shorthand
// 
// The same code can be used for any of the operators: -, /, and *
// 
// Now let's write some code!
// 
// Write your code below for the following:
// Increase the character's level by 1
// Multiply the character's health by 1.25
// Increase the character's attack by 3
// Increase the character's defense by 3

level += 1
health *= 1.25
attack += 3
defense += 3


// Finally, let's learn a new way to console.log things. With console.log,
// you can log multiple values by separating them with a comma
// 
// For example, you can write a console.log like this:
// 

// console.log("The year is", 2019)

// This will log out "The year is 2019". This is a nice way to see multiple values
// at once with console.log
// 
// Now, using this new way to console.log, log out each of the four
// variables above
// Your solution below

console.log("The character's level is now:", level)
console.log("The character's health is now:", health)
console.log("The character's attack is now:", attack)
console.log("The character's defense is now:", defense)