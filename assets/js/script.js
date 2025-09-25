document.addEventListener("DOMContentLoaded", () => {
    const cvButton = document.getElementById("download-cv");

    // Lingua del browser
    const userLang = navigator.language || navigator.userLanguage;

    // Scegli file CV in base alla lingua
    const cvFile = userLang.startsWith("it")
      ? "assets/cv/CV-Alessio-Lodato-IT.pdf"
      : "assets/cv/CV-Alessio-Lodato-EN.pdf";

      cvButton.addEventListener("click", (e) => {
        e.preventDefault();
        window.open(cvFile, "_blank");
      });

    // Aggiorna il link del pulsante
    cvButton.setAttribute("href", cvFile);
  });




// Loads a language rendering the text in the active one
function loadLanguage(lang) {
  fetch(`../lang/${lang}.json`)
    .then((response) => response.json())
    .then((translations) => {
      console.log("Traduzioni Caricate:", translations);
      document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.getAttribute("data-i18n");
        const keys = key.split(".");
        let text = translations;

        for (let k of keys) {
          text = text[k];
          if (!text) break;
        }

        if (text) {
          if (element.dataset.i18n) {
            const keys = element.dataset.i18n.split(".");
            let translation = translations;

            for (const key of keys) {
              translation = translation[key];
            }
            element.innerHTML = translation;
          }
        }
      });
    });
}

// Saves language on localstorage
function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  loadLanguage(lang);
}

// Loads saved or default language
document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("lang") || "en";
  loadLanguage(lang);
  // Flag buttons
  document.querySelectorAll(".language-btn button").forEach((button) => {
    button.addEventListener("click", () => {
      const lang = button.getAttribute("data-lang");
      setLanguage(lang);
    });
  });
});

//Script to receive form messages on my email address
(function () {
  emailjs.init('3l6LyOK5VohojizXo');
})();

document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  emailjs.sendForm('service_sv9m58a', 'template_33hwqck', '#contact-form')
    .then(() => {
      const lang = localStorage.getItem('language');
      if (lang === 'en') {
        Swal.fire({
        title: "Message sent successfully!",
        text: "Thank you for your message, i will reply as soon as possible!",
      });
      } else {
        Swal.fire({
        title: "Messaggio inviato!",
        text: "Grazie per il tuo messaggio, risponderó il prima possibile!",
      });
      }
      this.reset();
    }, (error) => {
      alert('Failed to send message. Please try again.');
      console.error(error);
    });
});

