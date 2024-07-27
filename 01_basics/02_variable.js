"use strict";  // ------> treat all JS code as a newer version.

//alert(3 + 3)  // here it gives error because we are using node js ,not browser.

console.log(3 + 
    3)  // ---->this is bad practice to write a code 

console.log(3 + 3) //--->code readibillity is one of the majaor parameter for your code evolution.


//data types in javascript

let name = "hitesh"
let age = 18
let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => abhi value assign nhi hua hai
// symbol => unique


// object

//typeof  ---> it gives us the data type of our variable

console.log(typeof undefined); // undefined
console.log(typeof null); // object-----> sometimes it is debatable ....