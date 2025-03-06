//mobile toggle
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

let currentIndex = 0;

function slideProjects(direction) {
  const slider = document.getElementById("projectSlider");
  const cards = slider.children;
  const cardWidth = cards[0].offsetWidth;

  currentIndex += direction;
  if (currentIndex >= cards.length) {
    currentIndex = 0;
  }

  slider.scrollTo({
    left: cardWidth * currentIndex,
    behavior: "smooth"
  });
}
