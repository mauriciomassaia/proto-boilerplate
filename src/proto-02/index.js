import Stats from 'stats.js';
import { Application } from 'pixi.js';
import { createCircle } from '../utils/pixi';
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

  const circle = createCircle(0, 0, 50, 0xff00ff);
  app.stage.addChild(circle);

  let a = 0;

  app.ticker.add(() => {
    circle.x = Math.sin(a * 0.85) * 100 + window.innerWidth * 0.5;
    circle.y = Math.cos(a * 0.75) * 100 + window.innerHeight * 0.5;
    circle.scale.x = Math.cos(a * 0.75) * 0.5 + 1;
    circle.scale.y = Math.sin(a * 0.85) * 0.5 + 1;
    a += 0.1;

    stats.update();
  });

  document.body.appendChild(app.canvas);
}

main();
