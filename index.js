// game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max);
    guessesLeft = 3;

// UI elements
function getElemById (id) {
    return $elem = document.getElementById(id);
}
function getElemBySelector (selector) {
    return $elem = document.querySelector(selector);
}

const gameWrapper = getElemById('game'),
      minNum = getElemBySelector('.min-num'),
      maxNum = getElemBySelector('.max-num'),
      guessBtn = getElemById('guess-btn'),
      guessInput = getElemById('guess-input'),
      message = getElemBySelector('.message');
// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// play again event listener
gameWrapper.addEventListener('mousedown', function (event) {
    if (event.target.className === 'play-again') {
        window.location.reload();
    }
})

// listen for guess
guessBtn.addEventListener('click', function(event){
   let guess = parseInt(guessInput.value);

// validate
   if (isNaN(guess) || guess < min || guess > max)
   setMassage(`Please enter a number between ${min} and ${max}`, 'red')

   // check if won
 else if (guess === winningNum) {
    gameOver(true, `${winningNum} is correct, YOU WIN!`);
} else {
    // wrong Number
    guessesLeft -= 1;
        // game over - lost
        if (guessesLeft === 0) {
            gameOver(false, `Game over, you lost. The correct number was ${winningNum}`)
        } else {
            // game continues - answear wrong
            // change border color
            guessInput.style.borderColor = 'red';

            // clear Input
            guessInput.value = '';

            setMassage(`${guess} is not correct, you have ${guessesLeft} attemps`, 'red');
        }
  }
})

// Game over
function gameOver (won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';
     // disable input
     guessInput.disabled = true;
     // border color
     guessInput.style.borderColor = color;
     // setMessage
     setMassage(msg, color);

    //  play again
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
    guessBtn.style.background = '#98FB98';
}

// get winning num
    function getRandomNum (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

// set massage
function setMassage (msg, color) {
    message.style.color = color
    message.textContent = msg;
}