Splitting();

const quoteContainer = document.getElementById('quote-container');
const quote = quoteContainer.querySelector('.quote');

function shatter() {
  const chars = quote.querySelectorAll('.char');
  
  anime.timeline({
    complete: () => {
      chars.forEach(char => char.style.transform = '');
    },
  })
  .add({
    targets: chars,
    translateY: (el, i) => anime.random(-1000, 1000),
    translateX: (el, i) => anime.random(-1000, 1000),
    rotate: (el, i) => anime.random(-360, 360),
    scale: [1, 0],
    opacity: {
      value: 0,
      duration: 1000,
      delay: 1000,
    },
    duration: 2000,
    delay: anime.stagger(20),
    easing: 'easeInOutExpo',
  });
}

quoteContainer.addEventListener('click', shatter);
