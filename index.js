// console.log("Hello, World!");
// console.log("Welcome to JavaScript practice.");

// window.alert("This is an alert box!");
// window.alert("JavaScript is fun!");

// document.getElementById("My heading").textContent = "This is a heading";
// document.getElementById("My paragraph").textContent = "This is a paragraph.";

//This is a comment

/* 
     This
     is
     a 
     comment
*/     

// Variable = a container that stores a value. Behaves as if it were the value that it contains.
// 1. Declaration let x;
// 2. Assignment x = 100;

// EXAMPLES FOR VARIABLES!!!~~~~
// let x; 
// x = 100;
// console.log(x);

// let age = 26;
// let price = 14.99;
// let gpa = 3.4;

// console.log(typeof age)
// console.log(`You are ${age} years old.`);
// console.log(`The price is $${price}.`);
// console.log(`Your GPA is: ${gpa}.`);

// let firstName = "Valarie";
// let favoriteFood = "seafood";
// let email = "val123@example.com";

// console.log(typeof firstName);
// console.log(`Hello, your name is ${firstName}.`);
// console.log(`Your favorite food is ${favoriteFood}.`);
// console.log(`Your email address is ${email}.`);

//EXAMPLES FOR BOOLEAN VALUES!!!~~~~
// let online = false;
// let forSale = true;
// let isStudent = true;

// console.log(`Valarie is online: ${online}.`);
// console.log(`Is this car for sale: ${forSale}.`);
// console.log(`Is Valarie a student: ${isStudent}.`);

//MORE EXAMPLES FOR VARIABLES!!!~~~~
// let fullName = "Valarie A. Paiz";
// let age = 26;
// let isStudent = true;

// document.getElementById("p1").textContent = `Your name is ${fullName}.`;
// document.getElementById("p2").textContent = `Your age is ${age}.`;
// document.getElementById("p3").textContent = `Are you enrolled? ${isStudent}.`;

// EXAMPLES FOR ARITHMETIC OPERATORS!!!~~~~
// Operands (values, variables, etc.)
// Operators (+, -, *, /, %) ex: 11 = x + 5;

// let students = 30;

// students = students + 1;
// students = students - 1;
// students = students * 2;
// students = students / 2;
// students = students ** 2;
// let extraStudents = students % 3;

// students += 1;
// students -= 1;
// students *= 2;
// students /= 2;
// students **= 2;
// students %= 2;

// students++;
// students--;

//console.log(students);

// EXAMPLES OF OPERATORS PRECEDENCE!!!~~~~
// 1. Parentheses ()
// 2. Exponents **
// 3. Multiplication *, Division /, Modulus %
// 4. Addition +, Subtraction -

// let result = 7 + 16;

// console.log(result);


//HOW TO ACCEPT USER INPUT!!!~~~~

// 1. Easy way = window prompt
// 2. Professional way = HTML textbox 

// let username;

// username = window.prompt("What is your username?");

// console.log(username);

// let username;

// document.getElementById("mySubmit").onclick = function(){
    // username = document.getElementById("myText").value;
    // document.getElementById("myH1").textContent = `Hello ${username}!`;
// }


// TYPE CONVERSION!!!~~~~
//  = change the datatype of a value to another
// (strings, numbers, booleans)

// let age = window.prompt("How old are you?");
// age = Number(age); // without this line, age would be a string and the result of the addition would be concatenation instead of addition. Ex: "26" + 1 = "261"
// age+=1;

// console.log(age);

// let x = ""; // when converting an empty string to a number, it becomes 0
// let y = "0"; // when converting a non-empty string to a number, it becomes NaN (Not a Number)
// let z = ""; // when converting an empty string to a boolean, it becomes false. When converting a non-empty string to a boolean, it becomes true.

// let x;
// let y;
// let z;

// x = Number(x);
// y = String(y);
//z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);


//CONST = a variable that cannot be reassigned. 
// It is a constant value that cannot be changed once it has been assigned. 

// const PI = 3.14159;
// let radius;
// let circumference;

// PI = 420.69; 

// radius = window.prompt("Enter the radius of a circle:");
// radius = Number(radius);

// circumference = 2 * pi * radius;

// console.log(circumference);

// document.getElementById("mySubmit2").onclick = function(){
  // radius = document.getElementById("myText2").value;
    // radius = Number(radius);
    // circumference = 2 * PI * radius;
    // document.getElementById("myH3").textContent = circumference;
// }

// COUNTER PROGRAM!!!~~~~

// const decreaseBtn = document.getElementById("decreaseBtn");
// const resetBtn = document.getElementById("resetBtn");
// const increaseBtn = document.getElementById("increaseBtn");
// const counterDisplay = document.getElementById("counterLabel");
// let counter = 0;

// increaseBtn.onclick = function() {
    // counter++;
    // counterDisplay.textContent = counter;
// }

// decreaseBtn.onclick = function() {
    // counter--;
    // counterDisplay.textContent = counter;
// }

// resetBtn.onclick = function() {
    // counter = 0;
    // counterDisplay.textContent = counter;
// }


// MATH!!!~~~~ 
// = a built-in object that has properties and methods for mathematical constants and functions.

// Math.PI

// console.log(Math.PI);
// console.log(Math.E);

// let x = 3;
// let y = 2;
// let z = 1;

// z = Math.round(x); // rounds to the nearest integer
// z = Math.floor(x); // rounds down to the nearest integer
// z = Math.ceil(x); // rounds up to the nearest integer
// z = Math.trunc(x); // removes the decimal part and returns the integer part
// z = Math.pow(x, y); // returns the value of x raised to the power of y
// z = Math.floor(x); 
// z = Math.sqrt(x); // returns the square root of x
// z = Math.log(x); // returns the natural logarithm of x
// z = Math.sin(x); // returns the sine of x (x is in radians)
// z = Math.cos(x); // returns the cosine of x (x is in radians)
// z = Math.tan(x); // returns the tangent of x (x is in radians)
// z = Math.abs(x); // returns the absolute value of x
// z =  Math.sign(x); // returns the sign of x (1 for positive, -1 for negative, 0 for zero)
// let max = Math.max(x, y, z); // returns the largest of the given numbers
// let min = Math.min(x, y, z); // returns the smallest of the given numbers

// console.log(x);
// console.log(max);
// console.log(min);

// RANDOM NUMBER GENERATOR!!!~~~~

// const min = 50;
// const max = 100;

// let randomNum = Math.floor(Math.random() * (max - min)) + min; // returns a random number between 1 (inclusive) and 100 (inclusive)

// console.log(randomNum);

// const myButton = document.getElementById("myButton");
// const myLabel = document.getElementById("myLabel");
// const myLabel1 = document.getElementById("myLabel1");
// const myLabel2 = document.getElementById("myLabel2");
// const myLabel3 = document.getElementById("myLabel3");

// const min = 1;
// const max = 6;
// let randomNum1;
// let randomNum2;
// let randomNum3;

// myButton.onclick = function(){
    // randomNum1 = Math.floor(Math.random() * max) + min;
    // randomNum2 = Math.floor(Math.random() * max) + min;
    // randomNum3 = Math.floor(Math.random() * max) + min;
    // myLabel1.textContent = randomNum1;
    // myLabel2.textContent = randomNum2;
    // myLabel3.textContent = randomNum3;
    
    //myLabel.textContent = `You rolled a ${randomNum}!`;
//}

// IF STATEMENTS!!!~~~~
// = IF A CONDITION IS TRUE, THEN DO SOMETHING TO EXECUTE SOME CODE. IF NOT, THEN DO SOMETHING ELSE.

// let age = 26;

// if(age >= 18){
    // console.log("You are an adult, you may enter.");
// } else {
    // console.log("You must be at least 18 years old to enter.");
// }

// let time = 14;

// if(time < 12){
    // console.log("Good morning!");
// } 
// else{
    // console.log("Good afternoon!");
//}