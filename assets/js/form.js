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