"use strict";
//1.how to decalare string in javascript

//string are used to store text

let name = "Aayush"//using double quote

let name1='Aayush Bhardwaj'//using single quote

//better to be prefer to go with double quote("")

console.log(name)
console.log(name1)

//2.TEMPLATE STRING
// Templates were introduced with ES6 (JavaScript 2016).

// Templates are strings enclosed in backticks (`This is a template string`).

// Templates allow single and double quotes inside a string:

let text = `'Aayush Bhardwaj' 
is also known as 
"Mohit"`
console.log(text)



let char = text.charAt(0);
console.log(char)

let uppercase = text.toUpperCase()
console.log(uppercase)


//finding string length
let total_length = text.length
console.log(total_length)


// Interpolation
// Template String provide an easy way to interpolate variables and expressions into strings.

// The method is called string interpolation.

// The syntax is:

let name3 = "komal"
let text2 = `shruti is also known as ${name3}`
console.log(text2)

