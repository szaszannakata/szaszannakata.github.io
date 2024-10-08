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
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Email validálás API
app.post('/validate-email', (req, res) => {
    const { email } = req.body;

    // Egyszerű email validáló logika
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = re.test(email);

    res.json({ isValid });
});

// Üzenet küldése API
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    // Itt implementálhatod az email küldési logikát (pl. nodemailer)
    console.log(`Üzenet érkezett: Név: ${name}, Email: ${email}, Üzenet: ${message}`);

    res.json({ success: true });
});

// API indítása
app.listen(PORT, () => {
    console.log(`API fut a http://localhost:${PORT} címen`);
});
