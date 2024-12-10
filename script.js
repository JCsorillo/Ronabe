const images = document.querySelectorAll('.gallery img');

images.forEach(image => {
  image.addEventListener('click', () => {
    // You can use JavaScript to zoom in further, open a lightbox, or trigger other interactive effects
    // For example, to zoom in more:
    image.style.transform = 'scale(2)';
  });
});