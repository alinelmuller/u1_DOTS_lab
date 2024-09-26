/*
 * DOTS: Level Three
 *
 */

let arena = document.querySelector('.js-arena')
let scoreDisplay = document.querySelector('.js-score')
let levelWinner = document.querySelector('.level-winner')
let score = 0


arena.addEventListener('click', (i) => {   
    if (i.target.classList.contains('js-ball')){
        score += parseInt(i.target.dataset.increment)

        if (score < 100){
            scoreDisplay.textContent = score
    
        } else if (score === 100) {
            scoreDisplay.textContent = score
            levelWinner.style.opacity = '1';
        } 
    }   
})
