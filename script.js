const startStateCard = document.querySelector(".rating-card__start-state");
const endStateCard = document.querySelector(".rating-card__end-state");
const userRating = document.querySelector("#user-rating");

let userRatingValue;

document
  .querySelector(".rating-card__numbers")
  .addEventListener("change", (event) => {
    userRatingValue = event.target.value;
  });

document.querySelector(".rating-card__btn").addEventListener("click", (event) => {
  if (userRatingValue === undefined) return;
  startStateCard.classList.add("hidden");
  endStateCard.classList.remove("hidden");
  userRating.innerText = userRatingValue;
});
