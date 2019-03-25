// This program calculates test scores for a class of students, assigns grades,
// and logs out the results!


// Define an array of students - each student should be an object with the
// following properties: name, scoreOne, and scoreTwo



// Write a function called calculateScore that takes in one
// parameter, called student, which is a student from the array
// that you just defined. Then, write code to get their final score
// by adding their two scores together. The grades should be assigned
// as follows:
// 
// Greater than or equal to 90: A
// Between 80 and 89: B
// Between 70 and 79: C
// Between 60 and 69: D
// Below 60: F
// 
// Finally, make sure that the function calculateScore returns the final
// letter grade

function calculateScore(student) {
	var finalScore = student.scoreOne + student.scoreTwo
	var finalGrade

	if(finalScore >= 90) {
		finalGrade = 'A'
	} else if (finalScore < 90 && finalScore >= 80) {
		finalGrade = 'B'
	} else if (finalScore < 80 && finalScore >= 70) {
		finalGrade = 'C'
	} else if (finalScore < 70 && finalScore >= 60) {
		finalGrade = 'D'
	} else {
		finalGrade = 'F'
	}

	return finalGrade
}

// Now create a for loop that loops through the students and assigns their
// final grades
// 
// Hint: You can add a new property to an object that is equal to a function
// evaluation

for(var i = 0; i < students.length; i++) {
	var student = students[i]
	student.finalGrade = calculateScore(student)
}

// Finally, for each student, log out their grade
// Hint: For loop

for(var i = 0; i < students.length; i++){
	var student = students[i]
	console.log(student.name + " received a grade of " + student.finalGrade)
}