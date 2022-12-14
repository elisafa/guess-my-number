'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number๐';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

/* FORMA QUE ORIGAMID USA
const checar = function(){
  console.log(document.querySelector('.guess').value);
}
document.querySelector('.check').addEventListener('click', checar);
*/

// OUTRA FORMA DE FAZER
let secretNumber = Math.trunc(Math.random()*20)+1;
let scoreNumber = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function(){
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  const messageScren = function(message){
    document.querySelector('.message').textContent = message;
  }

  if(!guess || guess < 0){
    messageScren('๐ No number!');
  }else if(guess !== secretNumber){
    if(scoreNumber > 1){
      messageScren(guess > secretNumber ? '๐ Too high!' : '๐ Too low!');
      scoreNumber--;
      document.querySelector('.score').textContent = scoreNumber;
    }else{
      messageScren('๐ฃGame Over!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('.guess').readOnly = true;
    }
  }
  
  // else if(guess < secretNumber){
  //   if(scoreNumber > 1){
  //     messageScren('๐ Too low!');
  //     scoreNumber--;
  //     document.querySelector('.score').textContent = scoreNumber;
  //   }else{
  //     messageScren('๐ฃGame Over!');
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('.guess').readOnly = true;
  //   }
  // }else if(guess > secretNumber){
  //   if(scoreNumber > 1){
  //     messageScren('๐ Too high!');
  //     scoreNumber--;
  //     document.querySelector('.score').textContent = scoreNumber;
  //   }else{
  //     messageScren('๐ฃGame Over!');
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('.guess').readOnly = true;
  //   }
  else{
    document.querySelector('.number').textContent = secretNumber;
    messageScren('Correct Number๐');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '32rem';
    document.querySelector('.check').disabled = true;
    document.querySelector('.guess').readOnly = true;
    document.querySelector('.guess').value = '';
    if(scoreNumber > highscore){
      highscore = scoreNumber;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function(){
  scoreNumber = 20;
  secretNumber = Math.trunc(Math.random()*20)+1;
  document.querySelector('.number').textContent = '?';
  messageScren('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = scoreNumber;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').readOnly = false;
});
