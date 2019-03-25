// Arrays can be thought of as storage containers
// They are a list of data of whatever type you pass in
// 
// An array is denoted by using square brackets: []
// 
// To define an array, we add each item to it, separated by a comma
// 
// For example:
// 

var fruits = ["Apple", "Orange", "Peach"]

// The variable fruits is now an array with 3 strings in it.
// 
// Try creating a variable called scores with the following five
// numbers: 10, 20, 30, 40, and 50
// 
// Your code here:

// Define the variable scores, and set it to a new array with 5 elements
var scores = [10, 20, 30, 40, 50]


// Now if we want to access the data in the array, we have to use something
// called an index. The index of an array is what spot in the list we want
// to access. The key with arrays is to remember that indexes start at 0, so
// if we wanted the first element of the fruits array, we would write 
// the following:
// 
// fruits[0] // "Apple"
// fruits[1] // "Orange"
// 
// Now try using console.log to log out the word "Peach"
// 
// Your code here:


// "Peach" is the third string in the array, so the index will be two. Therefore,
// we will use that index to fetch the element
console.log(fruits[2])


// There are some methods on arrays that we will now cover: push, pop, splice,
// and length

// The push method will add an element to the end of the array

// The pop method will remove the last element of an array

// The splice method takes two arguments, the index of where to start, and how
// many spaces we want to go, and will remove those items from an array
// 
// And finally, length will give us the number of items in an array

// Try adding an element to the fruits array, then removing it with pop,
// then using console.log to get the length of the array

// To add an element, we use the push method and pass in what we want
// to add
fruits.push("Cherry")

// The .pop method doesn't take any arguments, so we can just call it from
// our array
fruits.pop()

// Finally, .length is a property on Arrays in Javascript, so we can log
// out the length like so

console.log(fruits.length)

