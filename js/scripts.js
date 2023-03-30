// scripts.js

const quoteContainer = document.getElementById('quote-container');
const quote = quoteContainer.querySelector('.quote');
const numberOfFragments = 50;

function createFragments() {
  for (let i = 0; i < numberOfFragments; i++) {
    const fragment = document.createElement('span');
    fragment.classList.add('fragment');
    fragment.innerHTML = quote.innerHTML;
    quoteContainer.appendChild(fragment);
  }
}

function shatter() {
  anime.timeline({
    complete: () => {
      quoteContainer.addEventListener('transitionend', () => {
        quoteContainer.innerHTML = '<span class="quote">"What actually matters"</span>';
      }, { once: true });
    },
  }).add({
    targets: '.fragment',
    opacity: [1, 0],
    translateY: (el, i) => anime.random(-500, 500),
    translateX: (el, i) => anime.random(-500, 500),
    rotate: (el, i) => anime.random(-180, 180),
    duration: 2000,
    delay: anime.stagger(10),
    easing: 'easeInOutExpo',
  });
}

quoteContainer.addEventListener('click', () => {
  createFragments();
  shatter();
});
