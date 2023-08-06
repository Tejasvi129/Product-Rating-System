const stars = document.querySelectorAll(".star");
const averageRatingElement = document.getElementById("averageRating");
const thankYouMessage = document.getElementById("thankYouMessage");


let averageRating = 0;


stars.forEach(star => {
  star.addEventListener("click", () => {
    const selectedStar = star.getAttribute("data-star");
    setRating(selectedStar);
  });
});

function setRating(star) {
  stars.forEach(star => star.classList.remove("selected"));
  for (let i = 0; i < star; i++) {
    stars[i].classList.add("selected");
  }
}

function submitRating() {

  const selectedRating = document.querySelector(".star.selected");
  if (!selectedRating) {
    alert("Please select a rating before submitting.");
    return;
  }
  const userRating = selectedRating.getAttribute("data-star");


  averageRating = (averageRating + parseInt(userRating)) / 2;

  
  averageRatingElement.innerText = averageRating.toFixed(1);
  thankYouMessage.style.display = "block";


  stars.forEach(star => star.removeEventListener("click", setRating));
}
