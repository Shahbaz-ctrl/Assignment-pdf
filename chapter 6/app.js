//Qno 1
// Store a number in a variable
let number = 10; // Replace with any number you want to use

// Perform arithmetic operations
let result1 = number + 5;      // Addition
let result2 = number - 3;      // Subtraction
let result3 = number * 2;      // Multiplication
let result4 = number / 2;      // Division
let result5 = number % 3;      // Modulus

// Create the result message
let resultMessage = "<h2>Arithmetic Operations on Number " + number + "</h2>";
resultMessage += "Addition: " + number + " + 5 = " + result1 + "<br>";
resultMessage += "Subtraction: " + number + " - 3 = " + result2 + "<br>";
resultMessage += "Multiplication: " + number + " * 2 = " + result3 + "<br>";
resultMessage += "Division: " + number + " / 2 = " + result4 + "<br>";
resultMessage += "Modulus: " + number + " % 3 = " + result5 + "<br>";

// Display the result in the browser
document.body.innerHTML = resultMessage;

//Qno 2
function greetUser() {
    // Get the user's name from the input field
    let name = document.getElementById("userName").value;

    // Generate the greeting message
    let greeting = "Hello, " + name + "! Welcome to our website.";

    // Display the greeting message in the browser
    document.getElementById("greetingMessage").innerText = greeting;
}

//qno 3
function displayTable() {
    // Get the user's number from the input field
    let number = document.getElementById("userNumber").value;

    // If the user does not enter a number, use 5 as the default
    if (number === "") {
        number = 5;
    } else {
        number = parseInt(number);
    }

    // Generate the multiplication table
    let table = "";
    for (let i = 1; i <= 10; i++) {
        table += number + " x " + i + " = " + (number * i) + "<br>";
    }

    // Display the multiplication table in the browser
    document.getElementById("tableTitle").innerText = "Multiplication Table of " + number;
    document.getElementById("multiplicationTable").innerHTML = table;
}

//Q no 4
function calculateResult() {
    // Take subjects and marks from the user
    let subject1 = document.getElementById("subject1").value;
    let subject2 = document.getElementById("subject2").value;
    let subject3 = document.getElementById("subject3").value;

    let marks1 = parseInt(document.getElementById("marks1").value);
    let marks2 = parseInt(document.getElementById("marks2").value);
    let marks3 = parseInt(document.getElementById("marks3").value);

    // Calculate total obtained marks and percentage
    let totalObtained = marks1 + marks2 + marks3;
    let percentage = (totalObtained / 300) * 100;

    // Display the results in the table
    document.getElementById("subj1").innerText = subject1;
    document.getElementById("subj2").innerText = subject2;
    document.getElementById("subj3").innerText = subject3;

    document.getElementById("obtained1").innerText = marks1;
    document.getElementById("obtained2").innerText = marks2;
    document.getElementById("obtained3").innerText = marks3;

    document.getElementById("totalObtained").innerText = totalObtained;
    document.getElementById("percentage").innerText = percentage.toFixed(2) + "%";

    // Show the result table
    document.getElementById("resultTable").style.display = "table";
}