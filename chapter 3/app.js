//Q no 1
var age;
age = 19;
alert("My age is:" + age);

//Q no 2
// Check if the 'visitCount' key exists in localStorage
if (localStorage.getItem('visitCount')) {
    // If it exists, increment the count
    let visitCount = parseInt(localStorage.getItem('visitCount'));
    visitCount++;
    localStorage.setItem('visitCount', visitCount);
} else {
    // If it doesn't exist, set the count to 1
    localStorage.setItem('visitCount', 1);
}

// Retrieve the updated visit count
let visitCount = localStorage.getItem('visitCount');

// Display the visit count on the webpage
 alert( "You have visited this site " + visitCount + " times.");

//Q no3
var birthYear = 2004;
var massage = "My birth year is:" + birthYear;
document.body.innerHTML = massage;

//Q no 4
var visitorName = "Roman";
var productTitle = "T-shirt"
var quantity = 5;
document.body.innerHTML = visitorName  +  "ordered"  +  quantity  +  productTitle  + "(s) on XYZ Clothing store";