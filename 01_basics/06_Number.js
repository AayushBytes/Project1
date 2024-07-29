"use strict";

// let x = "5"
// let y = "6"

//If you add two strings, the result will be a string concatenation:

// let z = x+y
// console.log(z)

// floating point number in js 
//Floating point arithmetic is not always 100% accurate:
// let a = 0.2 
// let b = 0.7

// let c = a + b ------>gives something around 0.89999999..

let a = 0.2 * 10 
let b = 0.7 * 10

let c = (a + b) /10

console.log(c)

//The JavaScript interpreter works from left to right.

//First 10 + 20 is added because x and y are both numbers.

//Then 30 + "30" is concatenated because z is a string.



let x = 10;
let y = 20;
let z = "30";
let result = x + y + z;

console.log(result)


//**********************MATHS************************


//The syntax for any Math property is : Math.property.

//Math.method(number)

console.log(Math.min(2,4,86,5))
console.log(Math.max(57,946,95,87))

//Math.random() used with Math.floor() can be used to return random integers.
console.log(Math.random().toPrecision(4));
let m = Math.floor(Math.random() * 10);
console.log(m)

//gives result between max and min

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
