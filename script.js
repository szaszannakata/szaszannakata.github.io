// Hamburger menü működtetése
const hamburger = document.getElementById('hamburger-menu');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Back to top gomb működtetése
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Űrlap validálás
const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Kérjük, töltse ki az összes mezőt!');
        return;
    }

    if (!validateEmail(email)) {
        alert('Kérjük, érvényes email címet adjon meg!');
        return;
    }

    // Ha minden helyes, elküldés
    alert('Üzenet elküldve! Köszönjük a megkeresést.');
    form.reset();
});

// Email validáló funkció
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
