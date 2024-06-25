const images = document.querySelectorAll('.image-container img');

images.forEach(image => {
  image.addEventListener('mouseover', () => {
    image.style.transform = 'scale(1.05)';
    image.style.transition = 'transform 0.5s ease';
  });

  image.addEventListener('mouseout', () => {
    image.style.transform = 'scale(1)';
  });
});

  
  