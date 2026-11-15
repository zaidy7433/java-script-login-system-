var username = prompt("Please enter your username:");
var password = prompt("Please enter your password:");

if (username === "admin" && password === "12345") {
    alert("Login successful!" + "\nwelcome, " + username + "!");
} else {
    alert("Invalid username or password.");
}