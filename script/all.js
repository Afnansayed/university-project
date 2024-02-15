//start
function start(){
    addClass('game-start');
    hideClass('play-ground')
    addClass('score');

    //set stating time life
    scoreUpdate('current-life',5);
    //set starting time score
    scoreUpdate('current-score',0);
}

document.addEventListener('keyup',function(event){
    const playerPressedKey = event.key;
    //for exit game
    if(playerPressedKey === 'Escape'){
        gameOver();
     }
    //
    const currentAlphabet = document.getElementById('current-alphabet');
    const alphabet = currentAlphabet.innerText;
    const convertLowerCase = alphabet.toLowerCase();

    if(playerPressedKey === convertLowerCase){
        console.log('you are right path')
       const currentScore = scoreHoldElement('current-score');
       //updated score
       const updatedScore = currentScore + 1;
       //set score
       scoreUpdate('current-score',updatedScore);
       console.log(updatedScore)
    }else{
        console.log('you are rong path')
        const currentLife = scoreHoldElement('current-life')
        //update life
        const updateLife = currentLife -1;
        //set life
        scoreUpdate('current-life',updateLife);

        if(updateLife === 0){
            gameOver();
        }
    }
    continueGame();
})

//continue game
function continueGame(){
    const alphabet = randomAlphabet();
    //set this randomly got alphabet into the display showing alphabet
    const setAlphabet = document.getElementById('current-alphabet');
    setAlphabet.innerText = alphabet;
}
//Game Over function
function gameOver(){
    addClass('play-ground');
    hideClass('score');

    //set final score
}