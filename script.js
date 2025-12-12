// Select the hamburger toggle button
const navbarToggle = document.querySelector('.navbar-toggle');

// Select the navigation menu (ul element)
const navbarMenu = document.querySelector('.navbar-menu');

// Add click event on hamburger button
navbarToggle.addEventListener('click', () => {

    // Toggle the "active" class on the button (for animation: X shape)
    navbarToggle.classList.toggle('active');

    // Toggle the "active" class on the menu (to show/hide mobile menu)
    navbarMenu.classList.toggle('active');
});
