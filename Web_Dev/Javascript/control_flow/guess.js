var secretNumber = 4;

var guess = Number(prompt("guess a number"));

if(guess === secretNumber) {
    alert("you guessed it");
} 
else if (guess > secretNumber) {
    alert("guess is too high");
} else {
    alert("guess is too low");
}