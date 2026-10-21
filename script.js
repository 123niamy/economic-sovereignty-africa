document.getElementById('y').textContent = new Date().getFullYear();

document.querySelectorAll('nav a').forEach(a =>
  a.addEventListener('click', () => document.body.classList.remove('open')));

// Replace with your real address
const CONTACT_EMAIL = 'emmanuelniamy430@gmail.com';

document.getElementById('form').addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const msg = document.getElementById('msg').value;
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${msg}`);
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Join the movement')}&body=${body}`;
});
