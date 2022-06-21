let playerRPS = ''
let result = '' 
let computerSelection = ''
let wins = 0
let losses = 0
let ties = 0

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
    computerSelection = computerPlay()
    playerRPS = playerRPS.toUpperCase()
    if (playerRPS === computerSelection){        
        ties++
        record.textContent = `Wins:${wins}, Losses:${losses}, Ties:${ties}. It\'s a tie!`;
    } else if (playerRPS === 'ROCK' && computerSelection === 'PAPER') {
        losses++
        record.textContent = `Wins:${wins}, Losses:${losses}, Ties:${ties}. You Lose!\
         Paper beats Rock`
    } else if (playerRPS === 'ROCK' && computerSelection === 'SCISSORS'){
        wins++
        record.textContent = `Wins:${wins}, Losses:${losses}, Ties:${ties}. You Win!\
         Rock beats Scissors`
    } else if (playerRPS === 'PAPER' && computerSelection === 'ROCK') {
        wins++
        record.textContent = `Wins:${wins}, Losses:${losses}, Ties:${ties}. You Win! \
        Paper beats Rock`
    } else if (playerRPS === 'PAPER' && computerSelection === 'SCISSORS'){
        losses++
        record.textContent = `Wins:${wins}, Losses:${losses}, Ties:${ties}. You Lose!\
         Scissors beats Paper`
    } else if (playerRPS === 'SCISSORS' && computerSelection === 'ROCK') {
        losses++
        record.textContent = `Wins:${wins}, Losses:${losses}, Ties:${ties}. You Lose!\
         Rock beats Scissors`
    } else if (playerRPS === 'SCISSORS' && computerSelection === 'PAPER') {
        wins++
        record.textContent = `Wins:${wins}, Losses:${losses}, Ties:${ties}. You Win!\
         Scissors beats Paper`
    }
    scoreChecker()
}

function scoreChecker(){
    if(wins === 5){
        record.textContent = `You've won! With ${wins} games to ${losses} games with ${ties} ties.`
        wins = 0
        losses = 0
        ties = 0
    } else if (losses === 5) {
        record.textContent = `You've lost! With ${losses} games to ${wins} games with ${ties} ties.`
        wins = 0
        losses = 0
        ties = 0
    }
}


const buttons = document.querySelectorAll('button');
const buttonChoice = document.querySelector('button')

const record = document.createElement('div');
record.textContent = 'You have not played a game yet. Try clicking \
one of the buttons!'
Container.appendChild(record);

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        singleRound(button.getAttribute('id'))
    })  
});





/*

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
     
*/