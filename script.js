document.addEventListener("DOMContentLoaded", function() {
    let slides = document.querySelectorAll(".slide");
    let index = 0;

    function changeSlide() {
        slides.forEach(slide => slide.classList.remove("active"));
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
    }

    setInterval(changeSlide, 10000); // Change every 5 seconds instead of 3
});

document.addEventListener('DOMContentLoaded', () => {
    // Hide loading screen after content is loaded
    window.addEventListener('load', () => {
        setTimeout(() => {
            document.querySelector('.loading-screen').classList.add('hidden');
        }, 2000); // Wait for 2 seconds before hiding
    });
});
