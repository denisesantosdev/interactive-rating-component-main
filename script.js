const startStateCard = document.querySelector('.rating-card__start-state')
const endStateCard = document.querySelector('.rating-card__end-state')
const userRating = document.querySelector('#user-rating')
const checkedInput = document.querySelector('.rating-card__numbers input:checked')

let userRatingValue = checkedInput.value

document.querySelector('.rating-card__numbers').addEventListener('change', (event) => {
    userRatingValue = event.target.value;
})

document.querySelector('.rating-card__btn').addEventListener('click', () => {
    startStateCard.classList.add('hidden')
    endStateCard.classList.remove('hidden')
    userRating.innerText = userRatingValue
})
