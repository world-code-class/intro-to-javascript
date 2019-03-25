// When we are working with conditional statements, we will need
// to check if certain things are true or false. That's where logical
// operators come into play.
// 
// Below are logical operators:
// 
// && = And
// || = Or
// ! = Not
// 
// Let's see an example:
// 
// The following if/else statement checks if the variable cost is greater
// than 5, and if the variable sale is true
// 
// if(cost > 5 && sale === true){
// 	console.log("Sale is active!")
// }
// 
// 
// Now you try!
// 
// Define two variables, health, which is equal to 100, and enemyPresent, 
// which is equal to true. Then, write an if/else statement that checks to
// see if health is greater or equal than 25, and if enemyPresent is true.
// If it is, use a console.log to print "Ready to fight!". If it is not, then
// use console.log to print "Run away!"
// 
var health = 100
var enemyPresent = true
if(health >= 25 && enemyPresent === true) {
	console.log("Ready to fight!")
} else {
	console.log("Run away!")
}