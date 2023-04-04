const quoteContainer = document.getElementById('quote-container');
const whiteBox = document.getElementById('white-box');

quoteContainer.addEventListener('click', () => {
  whiteBox.style.opacity = '1';
  whiteBox.innerHTML = 'nothing '.repeat(10);
});
