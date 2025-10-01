document.querySelectorAll('.carousel').forEach(carousel => {
  const track = carousel.querySelector('.carousel-track');
  const images = carousel.querySelectorAll('img');
  const prevButton = carousel.querySelector('.prev');
  const nextButton = carousel.querySelector('.next');
  const dots = carousel.querySelectorAll('.dot');
  const description = carousel.querySelectorAll('.carousel-description p');
  const description2 = carousel.querySelectorAll('.carousel-description2 p');

  // Carousel Descriptions
  const descriptions = [
    "Sneakers Vault - E Commerce Webstite for a fictional sneakers online shop, made with React and Express, using Stripe sandbox for mock payment system.",
    "Picturea And Places - Interactive Geography game made with Javascript and with a backend database to store player scores.",
    "Sapore Di Mare - Fictional Restaurant's Website made with Django, that features a booking system and admin panel for management.",
  ];
  const descriptions2 = [
    "Login page for a social network website, made using React and DjangoRest frameworks.",
    "Sapore Di Mare's booking system.",
    "Sneakers Vault payment mock system powered by Stripe Sandbox.",
  ];

  let index = 0;

  function updateCarousel() {
    track.style.width = `${images.length * 100}%`;
    images.forEach(img => {
      img.style.width = `100%`;
    });
    track.style.transform = `translateX(-${index * (100 / images.length)}%)`;

    // disabilita bottoni ai bordi
    prevButton.disabled = index === 0;
    nextButton.disabled = index === images.length - 1;

    // aggiorna indicatori
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });

    // Updates carousel descriptions
    description.forEach((p, i) => {
      if (i === index) {
        p.parentElement.style.display = 'block';
        p.textContent = descriptions[index];
      } else {
        p.parentElement.style.display = 'none';
        p.textContent = '';
      }
    });
    description2.forEach((p, i) => {
      if (i === index) {
        p.parentElement.style.display = 'block';
        p.textContent = descriptions2[index];
      } else {
        p.parentElement.style.display = 'none';
        p.textContent = '';
      }
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

  // Dots for image selection
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      index = i;
      updateCarousel();
    });
  });

  window.addEventListener('resize', updateCarousel);
  updateCarousel();
});
