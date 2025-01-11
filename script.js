const score = JSON.parse(localStorage.getItem('score')) ||  {
    wins : 0,
    losses : 0,
    ties :0

};

updateScore();

function playGame(playerMove){

    const computerMove = function1();

    let result=' ';

    if (playerMove==='Scissor'){
        if (computerMove === 'Rock'){
            result = 'You Lose.';
        }else if(computerMove === 'Paper'){
            result ='You Win.';
        }else if(computerMove === 'Scissor'){
            result = 'Tie.';
        }
    
    }else if(playerMove==='Paper'){

        if (computerMove === 'Rock'){
            result = 'You Win.';
        }else if(computerMove === 'Paper'){
            result ='Tie.';
        }else if(computerMove === 'Scissor'){
            result = 'You Lose.';
        }
      
    }else if(playerMove==='Rock'){
        if (computerMove === 'Rock'){
            result = 'Tie.';
        }else if(computerMove === 'Paper'){
            result ='You Lose.';
        }else if(computerMove === 'Scissor'){
            result = 'You Win.';
        }
    }
    if (result === 'You Win.'){
        score.wins += 1;
    }else if(result === 'You Lose.'){
        score.losses += 1;
    }else if(result === 'Tie.'){
        score.ties +=1;
    }

   localStorage.setItem('score',JSON.stringify(score));

   updateScore();
    
   document.querySelector('.js-result').innerHTML= result;

   document.querySelector('.js-move').innerHTML=`You <img src="./images/${playerMove}-emoji.png" class="img-icon">
   <img src="./images/${computerMove}-emoji.png" class="img-icon">Computer`;
    
}

function updateScore(){
                document.querySelector('.js-score').innerHTML=`Wins: ${score.wins}, losses: ${score.losses}, Ties: ${score.ties}`

}

function function1(){
    randomNo = Math.random();
    let computerMove = ' ';

    if (randomNo >=0 && randomNo < 1/3){
        computerMove= 'Rock';

    }else if(randomNo >= 1/3 && randomNo < 2/3){
        computerMove = 'Paper';

    }else if(randomNo >= 2/3 && randomNo < 1){
        computerMove = 'Scissor';
    }

    return computerMove;
}
