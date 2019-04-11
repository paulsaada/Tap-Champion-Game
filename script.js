// global vars
var reset = document.querySelector("#reset");
var scoreHeader = document.querySelector("h1");
var p1Score = 0;
var p2Score = 0;
var winningScore = 5;
var playerOneDisplay = document.querySelector("#PlayerOne");
var playerTwoDisplay = document.querySelector("#PlayerTwo");
var inputValue = document.querySelector("input");
var p = document.querySelector(".goal-score p span");
var gameOver = false;

// reset function
function resetGame() {
	gameOver = false;
	p1Score = 0;
    p2Score = 0;
    playerOneDisplay.textContent = p1Score;
    playerTwoDisplay.textContent = p2Score;
    playerOneDisplay.classList.remove("winner");
    playerTwoDisplay.classList.remove("winner");
}

// reset button
reset.addEventListener("click", function(){
	resetGame();
});

// r to reset
document.addEventListener("keyup", function(){
	if (event.key === 'r') {
		resetGame();
	}
});

// set winning score via user input
inputValue.addEventListener("change", function(){
	p.textContent = inputValue.value;
	winningScore = Number(inputValue.value);
	resetGame();
});

// player one
document.addEventListener("keyup", function(){
	if (event.key === 'z') {
		if (!gameOver) {
			p1Score++;
			if (p1Score === winningScore) {
				playerOneDisplay.classList.add("winner");
				gameOver = true;
			}
			playerOneDisplay.textContent = p1Score;
		}
	}
});

// player two
document.addEventListener("keyup", function(){
	if (event.key === 'm') {
		if (!gameOver) {
			p2Score++;
			if (p2Score === winningScore) {
				playerTwoDisplay.classList.add("winner");
				gameOver = true;
			}
			playerTwoDisplay.textContent = p2Score;
		}
	}
});