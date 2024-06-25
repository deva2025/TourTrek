// script.js

document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.service img');

    images.forEach(function (image) {
        image.addEventListener('mouseenter', function (event) {
            const rect = event.target.getBoundingClientRect();
            const mouseX = event.clientX - rect.left; // Get the X coordinate of the cursor relative to the image
            const mouseY = event.clientY - rect.top; // Get the Y coordinate of the cursor relative to the image
            const imageWidth = rect.width;
            const imageHeight = rect.height;
            const scaleFactor = 1.1; // Adjust this value to control the magnification level
            const transitionScale = 0.3; // Adjust this value to control the transition duration
            const transitionTranslate = 5; // Adjust this value to control the amount of translation

            // Calculate the position of the cursor relative to the image center
            const offsetX = (mouseX / imageWidth - 0.5) * 2;
            const offsetY = (mouseY / imageHeight - 0.5) * 2;

            // Adjust the image size and position based on the cursor position
            image.style.transform = `scale(${scaleFactor}) translate(${offsetX * transitionTranslate}px, ${offsetY * transitionTranslate}px)`;
            image.style.transition = `transform ${transitionScale}s`;
        });

        image.addEventListener('mouseleave', function () {
            // Reset the image size and position when the cursor leaves the image
            image.style.transform = 'scale(1)';
            image.style.transition = 'transform 0.3s';
        });
    });
});

