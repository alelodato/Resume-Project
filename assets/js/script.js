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
          element.textContent = text;
        }
      });
    });
}

// Salva lingua in localStorage
function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  loadLanguage(lang);
}

// Carica lingua salvata o default
document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("lang") || "en";
  loadLanguage(lang);
  // Esempio bottoni bandiera
  document.querySelectorAll(".language-btn button").forEach((button) => {
    button.addEventListener("click", () => {
      const lang = button.getAttribute("data-lang");
      setLanguage(lang);
    });
  });
});
