//Q no 1
var num1 = 5;
var num2 = 10;

var sum = num1 + num2;

document.body.innerHTML =  "The sum of"  +  num1  +  "and"  +  num2  +  "is"  +  sum  + ""; 

//Q no 2
var num1 = 10;
var num2 = 20;

var subtract = num1 - num2;
var multiply = num1 * num2;
var division = num1 / num2;
var modulus = num1 % num2;

document.body.innerHTML =  "The sum of"  -  num1  -  "and"  -  num2  -  "is"  -  sum  - ""; 
document.body.innerHTML =  "The sum of"  *  num1  *  "and"  *  num2  *  "is"  *  sum  * ""; 
document.body.innerHTML =  "The sum of"  /  num1  /  "and"  /  num2  /  "is"  /  sum  / ""; 
document.body.innerHTML =  "The sum of"  %  num1  %  "and"  %  num2  %  "is"  %  sum  % ""; 


//Q no 3
// a. Declare a variable
let num;

// b. Show the value of the variable after declaration
document.body.innerHTML = "Value after variable declaration is: " + num + "<br>";

// c. Initialize the variable with some number
num = 5;

// d. Show the initial value of the variable
document.body.innerHTML += "Initial value: " + num + "<br>";

// e. Increment the variable
num++;

// f. Show the value after increment
document.body.innerHTML += "Value after increment is: " + num + "<br>";

// g. Add 7 to the variable
num += 7;

// h. Show the value after addition
document.body.innerHTML += "Value after addition is: " + num + "<br>";

// i. Decrement the variable
num--;

// j. Show the value after decrement
document.body.innerHTML += "Value after decrement is: " + num + "<br>";

// k. Calculate the remainder after dividing the variable’s value by 3
let remainder = num % 3;

// l. Show the remainder
document.body.innerHTML += "The remainder is: " + remainder;


//Q no 4
// Store the price of one movie ticket in a variable
let ticketPrice = 600; // 600 PKR per ticket

// Calculate the total cost for 5 tickets
let totalCost = ticketPrice * 5;

// Display the result in the browser
document.body.innerHTML = "The cost of buying 5 movie tickets is: " + totalCost + " PKR";

//Q no 5
// Choose the number for the multiplication table
let number = 7; // Replace 7 with any number you want

// Initialize an empty string to hold the table
let table = "";

// Generate the multiplication table
for (let i = 1; i <= 10; i++) {
    table += number + " x " + i + " = " + (number * i) + "<br>";
}

// Display the multiplication table in the browser
document.body.innerHTML = "<h2>Multiplication Table of " + number + "</h2>" + table;


//Q no 6
// Store the prices of items
let priceOfItem1 = 1000; // Replace with the actual price of item 1
let priceOfItem2 = 1500; // Replace with the actual price of item 2

// Store the ordered quantities of items
let quantityOfItem1 = 2; // Replace with the actual quantity of item 1 ordered
let quantityOfItem2 = 3; // Replace with the actual quantity of item 2 ordered

// Store the shipping charges
let shippingCharges = 200; // Replace with the actual shipping charges

// Calculate the total cost
let total_Cost = (priceOfItem1 * quantityOfItem1) + (priceOfItem2 * quantityOfItem2) + shippingCharges;

// Create the receipt
let receipt = "<h2>Shopping Cart Receipt</h2>";
receipt += "Price of item 1: " + priceOfItem1 + " PKR<br>";
receipt += "Quantity of item 1: " + quantityOfItem1 + "<br>";
receipt += "Price of item 2: " + priceOfItem2 + " PKR<br>";
receipt += "Quantity of item 2: " + quantityOfItem2 + "<br>";
receipt += "Shipping charges: " + shippingCharges + " PKR<br>";
receipt += "<strong>Total cost: " + totalCost + " PKR</strong>";

// Display the receipt in the browser
document.body.innerHTML = receipt;

//Qno 7
// Store the total marks and marks obtained by the student
let totalMarks = 500; // Replace with the actual total marks
let marksObtained = 420; // Replace with the actual marks obtained

// Compute the percentage
let percentage = (marksObtained / totalMarks) * 100;

// Create the result message
let result = "<h2>Student Result</h2>";
result += "Total Marks: " + totalMarks + "<br>";
result += "Marks Obtained: " + marksObtained + "<br>";
result += "Percentage: " + percentage.toFixed(2) + "%";

// Display the result in the browser
document.body.innerHTML = result;

