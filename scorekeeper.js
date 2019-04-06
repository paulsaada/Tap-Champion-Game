var playerOne = document.querySelector("#p1");
var playerTwo = document.querySelector("#p2");
var scoreHeader = document.querySelector("h1");
var p1Score = 0;
var p2Score = 0;
var playerOneDisplay = document.querySelector("#PlayerOne");
var playerTwoDisplay = document.querySelector("#PlayerTwo");
var gameOver = false;
var winningScore = 5;

playerOne.addEventListener("click", function(){
	if (!gameOver) {
		p1Score++;
		if (p1Score === winningScore) {
			gameOver = true;
		}
		playerOneDisplay.textContent = p1Score;
	} 
});

playerTwo.addEventListener("click", function(){
	if (!gameOver) {
		p2Score++;
		if (p2Score === winningScore) {
			gameOver = true;
		}
		playerTwoDisplay.textContent = p2Score;
	} 
});