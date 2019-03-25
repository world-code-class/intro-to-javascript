// Now we're going to talk more about shortcuts when writing conditional
// statements.
// 
// First is the concept of "truthy" and "falsy" values. A truthy value
// something that evaluates to true, and a falsy value is something
// that evaluates to false. For example, the number 0 is a falsy value,
// as is an empty string (""). These values can be used to shortcut our
// if/else statements
// 
// These truthy/falsy values not only make our code shorter and more concise,
// but it is more readable as well
// 
// Try changing the code below so that it evaluates to false, but is
// shorter

var dollars = 0
if (dollars === 0) {
    console.log("No dollars!")
} else {
    console.log("We have money!")
}

// Here is the solution:
var dollars = 0

// When we use !dollars, this reads as "No dollars". So, the entire
// statements reads "If no dollars, do this. Else, do this".
if (!dollars) {
    console.log("No dollars!")
} else {
    console.log("We have money!")
}

// Finally, let's talk about the ternary operator. This is a way to write
// if/else statements in an even shorter way! Let's go through an example
// 
// Instead of writing the following code:

/*

if(dollars === 0) {
	console.log("No dollars!")
} else {
	console.log("We have money!")
}

*/

// We can write it like this

// (dollars === 0) ? console.log("No dollars!") : console.log("We have money!")

// So to summarize, the conditional inside of the if is what we are still
// checking, the ? leads us to the truthy statement, and the : leads us
// to the falsy statement
// 
// Now you try! Change the following if/else statement to use a ternary. Make
// sure you also use the fact that the variable signal is truthy/falsy to make
// your code even more concise!

var signal = false
if(signal === true){
	console.log("we have signal!")
} else {
	console.log("we lost the signal!")
}

// The solution is as follows

var signal = false

// This is the way to write the if/else statement using a ternary operator
(signal === true) ? console.log("we have signal!") : console.log("we lost the signal!")

// If we want to make the if/else check shorter since signal is a truthy/falsy
// value, we can write it like this
(signal) ? console.log("we have signal!") : console.log("we lost the signal!")