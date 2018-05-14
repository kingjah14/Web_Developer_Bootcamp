var p1Button = document.getElementById("p1");
var p2Button = document.querySelector("#p2");

var p1Display = document.querySelector("#score1");
var p2Display = document.querySelector("#score2");

var p1Score = 0;
var p2Score = 0;

var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function() {
    if(!gameOver) {
        p1Score++;
        p1Display.textContent = p1Score;
    }
});

p2Button.addEventListener("click", function() {
    if(!gameOver) {
        p2Score++;
        p2Display.textContent = p2Score;
    }
});


