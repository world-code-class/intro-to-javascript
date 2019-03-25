// Remember that objects are collections of data
// Not only can we make our own objects, but Javascript has some
// built in functions for us to use as well
// 
// For example, Javascript has an object called Math that holds
// functions related to mathematical operations. If we wanted a random
// number, then we can use the following code to print it out:

// console.log(Math.random())

// This gives us a random number between 0 and 1
// 
// Now, if we wanted a number between, let's say 0 and 20, we would just
// multiply Math.random() by the number. So in this case:

// console.log(Math.random() * 20)

// Now let's talk about a couple more methods on the Math object
// 
// Math.floor will take a number passed into it and return the lowest integer
// 
// Math.ceil will do the opposite - it will return the value rounded up to
// the next integer
// 
// Let's try - inside of a console.log, print the result of Math.random() * 20,
// but use the floor method outside of it
console.log(Math.floor(Math.random() * 20))
// 
// Inside of a console.log, take the result of Math.random() * 30 and use
// the Math.ceil method to get the rounded up result
console.log(Math.ceil(Math.random() * 30))