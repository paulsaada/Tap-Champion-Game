var playerOne = document.querySelector("#p1");
var playerTwo = document.querySelector("#p2");
var reset = document.querySelector("#reset");
var scoreHeader = document.querySelector("h1");
var p1Score = 0;
var p2Score = 0;
var winningScore = 5;
var playerOneDisplay = document.querySelector("#PlayerOne");
var playerTwoDisplay = document.querySelector("#PlayerTwo");
var inputValue = document.querySelector("input");
var p = document.querySelector("p span");
var gameOver = false;

function resetGame() {
	gameOver = false;
	p1Score = 0;
    p2Score = 0;
    playerOneDisplay.textContent = p1Score;
    playerTwoDisplay.textContent = p2Score;
    playerOneDisplay.classList.remove("winner");
    playerTwoDisplay.classList.remove("winner");
}

reset.addEventListener("click", function(){
	resetGame();
});

inputValue.addEventListener("change", function(){
	p.textContent = inputValue.value;
	winningScore = Number(inputValue.value);
	resetGame();
});

playerOne.addEventListener("click", function(){
	if (!gameOver) {
		p1Score++;
		if (p1Score === winningScore) {
			playerOneDisplay.classList.add("winner");
			gameOver = true;
		}
		playerOneDisplay.textContent = p1Score;
	} 
});

playerTwo.addEventListener("click", function(){
	if (!gameOver) {
		p2Score++;
		if (p2Score === winningScore) {
			playerTwoDisplay.classList.add("winner");
			gameOver = true;
		}
		playerTwoDisplay.textContent = p2Score;
	} 
});