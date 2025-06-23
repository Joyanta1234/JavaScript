let gameNum = 5;

let userNum = prompt("Guess the right number between 1-9");

while (userNum != gameNum) {
    userNum = prompt("Not correct! Guess the right number between 1-9");
}

console.log("Congrats! You have guessed the right number. and the number is : ", gameNum);