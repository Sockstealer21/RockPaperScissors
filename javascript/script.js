let playerRPS 
let result = 0
let computerSelection = computerPlay()


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
    playerRPS = prompt('Rock, Paper or Scissors?');
    playerRPS = playerRPS.toUpperCase()
    if (playerRPS === computerSelection){    
        result = 'It\'s a tie!';
    } else if (playerRPS === 'ROCK' && computerSelection === 'PAPER') {
        result = 'You Lose! Paper beats Rock';
    } else if (playerRPS === 'ROCK' && computerSelection === 'SCISSORS'){
        result = 'You Win! Rock beats Scissors'
    } else if (playerRPS === 'PAPER' && computerSelection === 'ROCK') {
        result = 'You Win! Paper beats Rock'
    } else if (playerRPS === 'PAPER' && computerSelection === 'SCISSORS'){
        result = 'You Lose! Scissors beats Paper'
    } else if (playerRPS === 'SCISSORS' && computerSelection === 'ROCK') {
        result = 'You Lose! Rock beats Scissors'
    } else if (playerRPS === 'SCISSORS' && computerSelection === 'PAPER') {
        result = 'You Win! Scissors beats Paper'
    }
    return result;
}


function game(){
    let wins = 0
    let losses = 0
    let ties = 0
    for (let i = 0; i < 5; i++) {
        singleRound(playerRPS, computerPlay())
        if (result.substr(0,5) === 'You L'){
            losses++
        } else if (result.substr(0,5) === 'You W'){
            wins++
        } else {
            ties++
        }
        console.log(result)
        console.log(`You currently have ${wins} wins, ${losses} losses and ${ties} ties.`)
        }
}
     
