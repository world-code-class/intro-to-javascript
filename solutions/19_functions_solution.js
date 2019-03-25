// Functions are reusable blocks of code that do one thing
// For example, we can have a function that adds two numbers together
// 
// To declare a function, we're going to use the keyword function.
// 
// To define a function called greeting, we would write it like this:

function greeting() {

}

// The () after the word greeting tells us what to pass into the function
// This means that if there is anything the function needs to use, such as
// user input or a variable, then we can put it here and it will have access
// to it
// 
// To run a function, we are going to call it. To do this, type the name of 
// the function, followed by parenthesis. Make sure to pass in anything that
// the function needs when you call it!
// 
// Try modifying the function above to take a name inside of the parenthesis.
// Then, use console.log to print a message with the name in it
// Your solution:
// 
// Solution

function greeting(name) {
	console.log("Hello " + name + "!")
}

// The variable "name" that we pass into the function is called an argument. 
// This is what the function uses. So for example, if we ran this:

greeting("Michael")

// Then the greeting function's argument of name would be equal to "Michael".
// Therefore, the console.log inside of it would say "Hello Michael!"


// Solution for the return section: We want to return the variable total
// in the add function. That way, when we set the variable sum to add(7, 3), 
// the add function will return that result into the variable

function add(numOne, numTwo) {
	var total = numOne + numTwo
	return total
}

var sum = add(7, 3)