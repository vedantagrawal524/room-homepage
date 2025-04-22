const prevBtn = document.getElementById("prev-img");
const nextBtn = document.getElementById("next-img");
const slides = document.querySelectorAll(".slides");
const texts = document.querySelectorAll("#showcase-text > div");

let currentIndex = 0;

function updateShowcase(index) {
  // Update image slides
  slides.forEach((slide, i) => {
    slide.classList.toggle("hidden", i !== index);
  });

  // Update text content
  texts.forEach((text, i) => {
    text.classList.toggle("hidden", i !== index);
  });
}

function showPrev() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateShowcase(currentIndex);
}

function showNext() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateShowcase(currentIndex);
}

// Event listeners
prevBtn.addEventListener("click", showPrev);
nextBtn.addEventListener("click", showNext);

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      showPrev();
    } else if (e.key === "ArrowRight") {
      showNext();
    }
  });
  