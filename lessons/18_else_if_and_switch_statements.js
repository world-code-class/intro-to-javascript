// Let's say that you want to check multiple different conditiosns. We
// can keep adding to our if/else statements by using else/if statements
// 
// These let you track more complex conditionals with multiple outcomes!
// 
// Let's look at an example:
// 

var drink = 'coffee';

if (drink === 'coffee') {
    console.log("Enjoy the coffee!")
} else if (drink === 'water') {
    console.log("This water is on the house!")
} else {
    console.log("Invalid drink!");
}

// Using else if, we can add multiple conditionals to our checks, allowing
// us to build more robust statements!
// 
// Now you try: Try adding another else if statement that checks
// if the variable drink is equal to "tea". If it is, use a console.log
// to log out "Here is your hot tea!".
// 
// 
// Now we're going to talk more about switch statements. Switch statements
// are great when we have multiple checks in a conditional, and want to clean
// up the code a little bit. 
// 
// Outline of a switch statement:

var grade = "A"

switch (grade) {
    case "A":
        console.log("You got an A!")
        break;
}

// Try adding cases for the grade letters B, C, D, and F
// Your solution here: