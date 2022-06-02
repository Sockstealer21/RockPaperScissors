const playerRPS = "rock";
const computerSelection = computerPlay();

function computerPlay() {
    let computerSelection
    let randomSelection = Math.floor(Math.random()*100 );
    if (randomSelection <= 33){
        computerSelection = 'ROCK'
    } else if (randomSelection <=66) {
        computerSelection = 'PAPER'
    } else {
        computerSelection = 'SCISSORS'
    }
    return computerSelection
}


function singleRound(playerRPS, computerSelection) {
    
    playerRPS = playerRPS.toUpperCase()
    if (playerRPS === computerSelection){    
        result = 'It\'s a tie!';
    } else if (playerRPS === 'ROCK' && computerSelection === 'PAPER') {
        result = 'You Lose! Paper beats Rock';
    } else if (playerRPS === 'ROCK' && computerSelection === 'SCISSORS'){
        result = 'You win! Rock beats Scissors'
    } else if (playerRPS === 'PAPER' && computerSelection === 'ROCK') {
        result = 'You win! Paper beats Rock'
    } else if (playerRPS === 'PAPER' && computerSelection === 'SCISSORS'){q
    } else if (playerRPS === 'SCISSORS' && computerSelection === 'ROCK') {
        result = 'You Lose! Rock beats Scissors'
    } else if (playerRPS === 'SCISSORS' && computerSelection === 'PAPER') {
        result = 'You Win! Scissors beats Paper'
    }
    return result;
}

console.log(singleRound(playerRPS, computerSelection));

console.log(computerSelection)