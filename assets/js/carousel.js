document.querySelectorAll('.carousel').forEach(carousel => {
  const track = carousel.querySelector('.carousel-track');
  const images = carousel.querySelectorAll('img');
  const prevButton = carousel.querySelector('.prev');
  const nextButton = carousel.querySelector('.next');

  let index = 0;

  function updateCarousel() {
    const width = track.parentElement.clientWidth;
    track.style.transform = `translateX(${-index * width}px)`;
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
  updateCarousel();
});
