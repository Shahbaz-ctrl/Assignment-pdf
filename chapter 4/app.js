//Q no 1
var name = "shahbaz" ; age = 19 ; country = "pakistan";

//Q no 2
// legal variables
var userName;
var _age;
var totalAmount;
var isActive;
var firstName;
//illegal variables
var 2ndPlace (Cannot start with a number);
var first-name (Hyphens are not allowed, but underscores are);
var (Reserved keyword);
var user name (Spaces are not allowed);
var @email (Cannot start with a special character except _ and $);

//Q no 3
// Create the content to display
let heading = "<h1>Rules for naming JS variables</h1>";
let rule1 = "Variable names can only contain letters, numbers, underscores (_), and dollar signs ($).<br>For example $my_1stVariable";
let rule2 = "Variables must begin with a letter, underscore (_), or dollar sign ($).<br>For example $name, _name, or name";
let rule3 = "Variable names are case sensitive.";
let rule4 = "Variable names should not be JS keywords.";

// Combine all the rules into a single message
let message = heading + "<p>" + rule1 + "</p>" + "<p>" + rule2 + "</p>" + "<p>" + rule3 + "</p>" + "<p>" + rule4 + "</p>";

// Display the message in the browser
document.body.innerHTML = message;
