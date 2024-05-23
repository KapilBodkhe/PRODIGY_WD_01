window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.style.backgroundColor = '#333'; // Change background color on scroll
    } else {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Reset to initial color
    }
});
