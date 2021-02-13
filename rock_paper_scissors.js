var userResponse = "";
var computerResponseOptions = ["R", "S", "P"];

var userWins = 0;
var computerWins = 0;
var ties = 0;

let computerResponse = "";


// return the winner
function compare(userResponse, computerResponse){
	// if the user has paper 
	
		// if the computer has rock
			// user wins
		// if the computer has scissors
			// computer wins
		// if the computer has paper
			// it's a draw
	// 
}

// update win count
function updateTotals(winner){
	if(winner === 'user'){
		userWins += 1;
	} else if(winner === 'computer'){
		computerWins += 1;
	} else {
		ties += 1;
	}
}

function startGame(){
	userResponse = prompt("Enter 'R' for Rock, 'P' for Paper, or 'S' for Scissors", "R");
	computerResponse = computerResponseOptions[Math.floor(Math.random() * computerResponseOptions.length)];
	var winner = compare(userResponse, computerResponse);
	updateTotals(winner);
	var message = "User wins: " + userWins + " , Computer wins: " + computerWins + " Ties: " + ties;
	alert(message);
	if(window.confirm("Play Again?")){
		startGame();		
	}
}

if(window.confirm("Play game?")){
	startGame();		
}