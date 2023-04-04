function createRain() {
  const rain = document.createElement('div');
  rain.classList.add('rain');
  document.body.appendChild(rain);

  for (let i = 0; i < 150; i++) {
    const drop = document.createElement('div');
    drop.classList.add('drop');
    drop.style.left = `${Math.random() * 100}vw`;
    drop.style.animationDuration = `${Math.random() * 1 + 0.5}s`;
    drop.style.animationDelay = `${Math.random() * 2}s`;
    rain.appendChild(drop);
  }
}

createRain();
