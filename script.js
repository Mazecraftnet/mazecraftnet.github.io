document.addEventListener("DOMContentLoaded", function() {
    let slides = document.querySelectorAll(".slideshow img"); // Ensure correct selection
    let index = 0;

    function changeSlide() {
        slides[index].classList.remove("active");
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
    }

    setInterval(changeSlide, 3000); // Change image every 3 seconds
});

// Navbar Scroll Effect
window.addEventListener("scroll", function() {
    let navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled"); // Adds the scroll effect
    } else {
        navbar.classList.remove("scrolled"); // Removes it when at the top
    }
});
