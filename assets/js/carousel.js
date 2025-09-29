document.querySelectorAll('.carousel').forEach(carousel => {
  const track = carousel.querySelector('.carousel-track');
  const images = carousel.querySelectorAll('img');
  const prevButton = carousel.querySelector('.prev');
  const nextButton = carousel.querySelector('.next');
  const dots = carousel.querySelectorAll('.dot');

  let index = 0;

  function updateCarousel() {
    const width = track.parentElement.clientWidth;
    track.style.transform = `translateX(${-index * width}px)`;

    // disabilita bottoni ai bordi
    prevButton.disabled = index === 0;
    nextButton.disabled = index === images.length - 1;

    // aggiorna indicatori
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
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

  // click sui pallini
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      index = i;
      updateCarousel();
    });
  });

  window.addEventListener('resize', updateCarousel);
  updateCarousel();
});
