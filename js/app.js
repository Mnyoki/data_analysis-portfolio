const menuToggle = document.querySelector('#toggle-menu');
const mainMenu = document.querySelector('#main-menu');

if (menuToggle && mainMenu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    mainMenu.classList.toggle('is-open', !isOpen);
  });

  mainMenu.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      mainMenu.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const contactForm = document.querySelector('[data-contact-form]');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    const response = document.querySelector('#res-text');
    if (!contactForm.checkValidity()) return;

    const formData = new FormData(contactForm);
    const subject = encodeURIComponent(`Portfolio enquiry from ${formData.get('name')}`);
    const body = encodeURIComponent(`${formData.get('message')}\n\nReply to: ${formData.get('email')}`);
    if (response) response.textContent = 'Opening your email app to send this message…';
    event.preventDefault();
    window.location.href = `mailto:mosesmunyoki6@gmail.com?subject=${subject}&body=${body}`;
  });
}
