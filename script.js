const ratingButtons = document.querySelectorAll("[data-rating-btn]"); // Gets every rating button
const ratingTextElement = document.querySelector("[data-rating-text]");
const ratingDiv = document.querySelector("[data-rating-state]")

const submitButton = document.querySelector("[data-submit-btn]");
const submitDiv = document.querySelector("[data-submit-state]");

/**
 * Sets up an event listener for each button. If it is clicked, toggle active class, and remove active class
 * from any other active buttons
 */
ratingButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let currentRatingButton;

    currentRatingButton = e.target.closest("[data-rating-btn]");
    currentRatingButton.classList.toggle("active");

    ratingTextElement.innerText = `You selected ${currentRatingButton.innerText} out of 5`;

    document.querySelectorAll("[data-rating-btn].active").forEach((btn) => {
      if (btn === currentRatingButton) return;
      btn.classList.remove("active");
    });
  });
});

submitButton.addEventListener("click", () => {
  if (document.querySelector("[data-rating-btn].active") == null) return;
  submitDiv.classList.add("active");
  ratingDiv.classList.remove("active");
});
