//Q no 1
function welcomeUser() {
    // Get the city name from the input field
    let city = document.getElementById("cityName").value.trim().toLowerCase();

    // Check if the city is Karachi
    if (city === "karachi") {
        document.getElementById("welcomeMessage").innerText = "Welcome to the city of lights";
    } else {
        document.getElementById("welcomeMessage").innerText = "Welcome!";
    }
}

//Q n0 2
function greetUser() {
    // Get the gender input from the user
    let gender = document.getElementById("gender").value.trim().toLowerCase();

    // Check the gender and display the corresponding message
    if (gender === "male") {
        document.getElementById("greetingMessage").innerText = "Good Morning Sir.";
    } else if (gender === "female") {
        document.getElementById("greetingMessage").innerText = "Good Morning Ma’am.";
    } else {
        document.getElementById("greetingMessage").innerText = "Good Morning!";
    }
}

//Q no 3
function checkFuel() {
    // Get the remaining fuel from the user
    let fuel = parseFloat(document.getElementById("fuel").value);

    // Check if the fuel is less than 0.25 litres
    if (fuel < 0.25) {
        document.getElementById("fuelMessage").innerText = "Please refill the fuel in your car";
    } else {
        document.getElementById("fuelMessage").innerText = "Fuel level is sufficient";
    }
}

//Q no 4
function checkDivisibility() {
    // Get the number from the user
    let number = parseInt(document.getElementById("number").value);

    // Check if the number is divisible by 3
    if (number % 3 === 0) {
        document.getElementById("divisibilityMessage").innerText = "The number " + number + " is divisible by 3.";
    } else {
        document.getElementById("divisibilityMessage").innerText = "The number " + number + " is not divisible by 3.";
    }
}

//Q no 5
function checkEvenOdd() {
    // Get the number from the user
    let number = parseInt(document.getElementById("number").value);

    // Check if the number is even or odd
    if (number % 2 === 0) {
        document.getElementById("evenOddMessage").innerText = "The number " + number + " is even.";
    } else {
        document.getElementById("evenOddMessage").innerText = "The number " + number + " is odd.";
    }
}