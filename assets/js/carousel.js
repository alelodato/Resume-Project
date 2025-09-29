const track = document.querySelector('.carousel-track');
const images = document.querySelectorAll('.carousel-track img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let index = 0;

function updateCarousel() {
  const width = track.parentElement.clientWidth;
  track.style.transform = `translateX(${-index * width}px)`;

  // Disabilita/abilita i bottoni ai bordi
  prevButton.disabled = index === 0;
  nextButton.disabled = index === images.length - 1;
}

nextButton.addEventListener('click', () => {
  if (index < images.length - 1) {
    index++;
    updateCarousel();
  }
});

prevButton.addEventListener('click', () => {
  if (index > 0) {
    index--;
    updateCarousel();
  }
});

window.addEventListener('resize', updateCarousel);

// Avvio iniziale
updateCarousel();
