const quoteContainer = document.getElementById('quote-container');
const quote = quoteContainer.querySelector('.quote');
const numberOfFragments = 50;

function createFragments() {
  quote.style.display = 'none';
  
  for (let i = 0; i < numberOfFragments; i++) {
    const fragment = document.createElement('span');
    fragment.classList.add('fragment');
    fragment.innerHTML = quote.innerHTML;
    fragment.style.position = 'absolute';
    fragment.style.left = `${Math.random() * 100}%`;
    fragment.style.top = `${Math.random() * 100}%`;
    quoteContainer.appendChild(fragment);
  }
}

function shatter() {
  createFragments();
  
  const fragments = document.querySelectorAll('.fragment');
  const engine = Matter.Engine.create();
  const world = engine.world;
  const bodies = [];
  
  fragments.forEach(fragment => {
    const body = Matter.Bodies.rectangle(
      fragment.offsetLeft + quoteContainer.offsetLeft,
      fragment.offsetTop + quoteContainer.offsetTop,
      fragment.offsetWidth,
      fragment.offsetHeight,
      { isStatic: false }
    );
    bodies.push(body);
  });

  Matter.World.add(world, bodies);
  
  Matter.Engine.run(engine);
  
  setTimeout(() => {
    fragments.forEach(fragment => fragment.remove());
    quote.style.display = 'block';
  }, 3000);
}

quoteContainer.addEventListener('click', shatter);
