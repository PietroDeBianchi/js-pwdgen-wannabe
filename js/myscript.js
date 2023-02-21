const myName = prompt("What is your name?");
const mySurname = prompt("What is your surname?");
const myFavoriteColor = prompt("What is your favorite color?");

// this is only for console-inspector check
console.log(`Your name is ${myName}, your surname is ${mySurname}, and your favorite color is ${myFavoriteColor}.`);

// this is what appear on the browser
const userInfoElement = document.getElementById("user-info");
userInfoElement.textContent = `Hello my name is ${myName} ${mySurname}, and my favorite color is ${myFavoriteColor}.`;