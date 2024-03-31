const options = document.querySelectorAll('#btn')
const resultsElm = document.querySelector('.results')
const playerImage = document.querySelector('#playerImage')
const botImage = document.querySelector('#botImage')
const playerScoreElm = document.querySelector('.player-score')
const botScoreElm = document.querySelector('.bot-score')
const playerSelection = document.querySelector('.playerSelection')
const botSelection = document.querySelector('.botSelection')
const restart = document.querySelector('#restart')
const getPlayerChoice = (e) =>{
    if (playerScore === 5 || botScore === 5){
        return
    }
    let playerChoice = e.target.innerText;
    const botChoice = botPlay();
    playRound(playerChoice,botChoice);
}
options.forEach(button => {
    button.addEventListener('click',getPlayerChoice)
});
restart.addEventListener('click',playAgain);
function updateImage(playerSelection,botSelection){
playerImage.src= `images/${playerSelection}.png`;
botImage.src=`images/${botSelection}.png`;
}
let choices = ['rock','paper','scissor'];
const botPlay =() =>{
let result = choices[Math.floor(Math.random()* choices.length)];
return result
}
let playerScore = 0;
let botScore = 0;
function playRound(playerSelection, botSelection){
        updateImage(playerSelection,botSelection);
    let winnerMessage ='';
    if (playerSelection.toLowerCase() === 'rock' && botSelection === 'scissor'){
        playerScore++;
        winnerMessage="Player's Rock beats Bot's Scissor"
    }
    else if(playerSelection.toLowerCase() === 'scissor' && botSelection === 'paper'){
        playerScore++;
        winnerMessage="Player's Scissor beats Bot's Paper"
    }
    else if(playerSelection.toLowerCase() === 'paper' && botSelection === 'rock'){
        playerScore++;
        winnerMessage= "Player's Paper beats Bot's Rock"
    }
    else if(playerSelection.toLowerCase() === 'scissor' && botSelection === 'rock'){
        botScore++;
        winnerMessage= "Bot's Rock beats Player's Scissor"
    }
    else if(playerSelection.toLowerCase() === 'paper' && botSelection === 'scissor'){
        botScore++;
        winnerMessage = "Bot's Scissor beats Player's Paper"
    }
    else if(playerSelection.toLowerCase() === 'rock' && botSelection === 'paper'){
        botScore++;
        winnerMessage = "Bot's Paper beats Player's Rock"
    }
    else{
        winnerMessage= "Tie"
    }
    playerScoreElm.innerText = playerScore;
    botScoreElm.innerText =botScore;
    checkWinner()
}
function checkWinner(){
    let winner;
    if(botScore ===5 || playerScore ===5){
        winner = `${(botScore > playerScore)? "bot" : "player"}`;
        resultsElm.innerText = winner;
    }
}
function playAgain(){
    playerScore = 0;
    botScore = 0;
    playerScoreElm.innerText = 0;
    botScoreElm.innerText = 0;
    playerImage.src ='';
    botImage.src ='';
    winner = '';
    resultsElm.innerText = 'Results';
}
