//Q no 1
function checkLargerNumber() {
    // Get the two integers from the user
    let num1 = parseInt(document.getElementById("firstNumber").value);
    let num2 = parseInt(document.getElementById("secondNumber").value);

    // Compare the two numbers
    if (num1 > num2) {
        document.getElementById("resultMessage").innerText = "The first number " + num1 + " is larger than the second number " + num2 + ".";
    } else if (num1 < num2) {
        document.getElementById("resultMessage").innerText = "The second number " + num2 + " is larger than the first number " + num1 + ".";
    } else {
        document.getElementById("resultMessage").innerText = "Both numbers are equal.";
    }
}

//Q no 2
function checkNumber() {
    // Get the number from the user
    let number = parseFloat(document.getElementById("numberInput").value);

    // Determine if the number is positive, negative, or zero
    if (number > 0) {
        document.getElementById("resultMessage").innerText = "The number " + number + " is positive.";
    } else if (number < 0) {
        document.getElementById("resultMessage").innerText = "The number " + number + " is negative.";
    } else {
        document.getElementById("resultMessage").innerText = "The number is zero.";
    }
}

//Q no 3
function checkVowel() {
    let char = document.getElementById("charInput").value.toLowerCase();
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let isVowel = vowels.includes(char);
    document.getElementById("resultMessage").innerText = isVowel ? "True" : "False";
}

//Q no 4
function checkTime() {
    let time = document.getElementById("timeInput").value;
    
    // Validate input format
    if (!/^\d{4}$/.test(time)) {
        document.getElementById("resultMessage").innerText = "Please enter time in HHMM format.";
        return;
    }

    // Convert time to number
    let hours = parseInt(time.substring(0, 2));
    let minutes = parseInt(time.substring(2, 4));
    
    if (hours >= 0 && hours < 12) {
        document.getElementById("resultMessage").innerText = "Good Morning!";
    } else if (hours >= 12 && hours < 18) {
        document.getElementById("resultMessage").innerText = "Good Afternoon!";
    } else if (hours >= 18 && hours < 24) {
        document.getElementById("resultMessage").innerText = "Good Evening!";
    } else {
        document.getElementById("resultMessage").innerText = "Invalid time.";
    }
}