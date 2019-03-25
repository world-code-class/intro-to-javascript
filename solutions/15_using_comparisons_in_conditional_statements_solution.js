// When we are writing conditional statements, we will need to compare
// values from time to time to see what action we need to take. This is
// where comparison operators come in. These will let you compare values
// and, based on the result, will let you take the appropriate action
// 
// The operators are as follows:
// 
// < is less than
// > is greater than
// <= is less than or equal to
// >= is greater than or equal to
// === is equal to 
// !== is not equal to
// 
// Now let's try some examples
// 
// The code below is used to check if the variable age is greater or equal
// than 21. If it is, then the user is allowed into a bar. If not, then
// they are rejected

/*

var age = 23
if(age >= 21){
	console.log("Welcome in!")
} else {
	console.log("You are too young!")
}

*/

// Now you try!
// Define a variable called price and set it to 2
// Then write an if/else statement checking to see if
// the price is less than or equal to 1. If it is, then the
// item is on sale, so console.log "Item is on sale!". If it is
// not, then console.log out "Item is not on sale!". When you're finished,
// try playing around with the value of price and see what you get!
var price = 2
if(price <= 1){
	console.log("Item is on sale!")
} else {
	console.log("Item is not on sale!")
}