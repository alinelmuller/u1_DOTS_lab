/*
 * DOTS: Level One
 *
 */

let ball = document.querySelector('.js-ball')
let scoreDisplay = document.querySelector('.js-score')
let levelWinner = document.querySelector('.level-winner')
let score = 0

ball.addEventListener('click', () => {
    score += 10

    if (score < 100){
        scoreDisplay.textContent = score

    } else if (score === 100) {
        scoreDisplay.textContent = score
        levelWinner.style.opacity = '1';
    } 
})