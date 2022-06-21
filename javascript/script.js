let playerRPS = ''
let result = '' 
let computerSelection = ''


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
        record.textContent = 'It\'s a tie!';
    } else if (playerRPS === 'ROCK' && computerSelection === 'PAPER') {
        record.textContent = 'You Lose! Paper beats Rock';
    } else if (playerRPS === 'ROCK' && computerSelection === 'SCISSORS'){
        record.textContent = 'You Win! Rock beats Scissors'
    } else if (playerRPS === 'PAPER' && computerSelection === 'ROCK') {
        record.textContent = 'You Win! Paper beats Rock'
    } else if (playerRPS === 'PAPER' && computerSelection === 'SCISSORS'){
        record.textContent = 'You Lose! Scissors beats Paper'
    } else if (playerRPS === 'SCISSORS' && computerSelection === 'ROCK') {
        record.textContent = 'You Lose! Rock beats Scissors'
    } else if (playerRPS === 'SCISSORS' && computerSelection === 'PAPER') {
        record.textContent = 'You Win! Scissors beats Paper'
    }
}



const buttons = document.querySelectorAll('button');
const buttonChoice = document.querySelector('button')

const record = document.createElement('div');
record.textContent = 'You have not played a game yet. Try clicking one of the buttons!'
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