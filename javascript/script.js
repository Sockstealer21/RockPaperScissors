function computerPlay() {
    let botRPS;
    let randomSelection = Math.floor(Math.random()*100 );
    if (randomSelection <= 33){
        botRPS = 'Rock'
    } else if (randomSelection <=66) {
        botRPS = 'Paper'
    } else {
        botRPS = 'Scissors'
    }
    return botRPS
}

computerPlay()