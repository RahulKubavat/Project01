const navbarToggle = document.getElementById('navbar-toggle');
const navbar = document.querySelector('nav');

navbarToggle.addEventListener('click', function() {
  navbar.classList.toggle('active');
});
