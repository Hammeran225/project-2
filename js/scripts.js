// scripts.js

const quoteContainer = document.getElementById('quote-container');

function createShatterEffect() {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.pointerEvents = 'none';
  document.body.appendChild(canvas);

  const Engine = Matter.Engine;
  const Render = Matter.Render;
  const Runner = Matter.Runner;
  const Composite = Matter.Composite;
  const Composites = Matter.Composites;
  const Common = Matter.Common;
  const MouseConstraint = Matter.MouseConstraint;
  const Mouse = Matter.Mouse;
  const World = Matter.World;
  const Bodies = Matter.Bodies;

  const engine = Engine.create();
  const world = engine.world;

  const render = Render.create({
    canvas: canvas,
    engine: engine,
    options: {
      width: window.innerWidth,
      height: window.innerHeight,
      wireframes: false,
      background: 'transparent',
    },
  });

  Render.run(render);

  const runner = Runner.create();
  Runner.run(runner, engine);

  const group = Matter.Body.nextGroup(true);

  const quoteRect = quoteContainer.getBoundingClientRect();
  const quoteRectLeft = quoteRect.left + (quoteRect.width * 0.5) - 50;
  const quoteRectTop = quoteRect.top + (quoteRect.height * 0.5) - 50;

  const stack = Composites.stack(
    quoteRectLeft,
    quoteRectTop,
    5,
    5,
    0,
    0,
    (x, y) => {
      const options = {
        render: {
          fillStyle: '#000',
          strokeStyle: '#000',
          lineWidth: 1,
        },
        collisionFilter: {
          group: group,
        },
      };
      return Matter.Bodies.rectangle(x, y, 20, 20, options);
    },
  );

  World.add(world, stack);

  const mouse = Mouse.create(render.canvas);
  const mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      render: {
        visible: false,
      },
    },
  });

  World.add(world, mouseConstraint);
  render.mouse = mouse;

  setTimeout(() => {
    document.body.removeChild(canvas);
    Matter.Composite.clear(engine.world);
    Matter.Engine.clear(engine);
    Matter.Render.stop(render);
    Matter.Runner.stop(runner);
  }, 5000);
}

quoteContainer.addEventListener('click', () => {
  createShatterEffect();
});
