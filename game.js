// create a random game number and ask the user to guess the number until  the user enters the right number;
let gameNum = 23;
let userNum = prompt("Guess the right number");

while(userNum!=gameNum){
    console.log("WRONG,Guess Again");
}
console.log("Congratulations, You Won!");