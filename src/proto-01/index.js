import Stats from 'stats.js';
import { Application } from 'pixi.js';
import { createRect } from '../utils/pixi';
import '../utils/reset.css';

async function main() {
  const stats = new Stats();
  document.body.appendChild(stats.dom);

  const app = new Application();

  await app.init({
    width: window.innerWidth,
    height: window.innerHeight,
    resolution: window.devicePixelRatio || 1,
    antialias: true,
    backgroundColor: 0xf7f7f7,
    resizeTo: window,
  });

  const square = createRect(-50, -50, 100, 100, 0xff6600);
  app.stage.addChild(square);

  let a = 0;

  app.ticker.add(() => {
    square.x = Math.sin(a) * 100 + window.innerWidth * 0.5;
    square.y = Math.cos(a * 0.25) * 100 + window.innerHeight * 0.5;
    square.rotation = -a;
    a += 0.1;

    stats.update();
  });

  document.body.appendChild(app.canvas);
}

main();
