// I AM NOT AN AUTHOR OF THIS SCRIPT I JUST CHANGED THE WAY IT WORKS, ORIGINAL AUTHOR IS: Mt. Ford Studios youtube channel
// VIDEO PRESENTING HIS VERSION: https://www.youtube.com/watch?v=py-Qls7Jd3I&ab_channel=Mt.FordStudios

// constants
const STAR_NUM = 200; // number of stars in the starfield
const STAR_SIZE = 0.0022; // max star size as a fraction of screen width
const STAR_SPEED = 0.035; // fraction of screen width per second

// set up the canvas and context
var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.height = document.documentElement.clientHeight;
canvas.width = document.documentElement.clientWidth;
document.body.appendChild(canvas);

// set up the stars
var stars = [];
var starSpeed = STAR_SPEED * canvas.width;
var xv = starSpeed * (Math.random() * 0.6 + 0.4);

// Using Pythagoras' theorem, yv = sqrt(starSpeed^2 - xv^2)
var yv = Math.sqrt(xv, Math.random());

for (let i = 0; i < STAR_NUM; i++) {
  let speedMult = 2 * Math.random();
  const direction = Math.random();
  stars[i] = {
    r: (Math.random() * STAR_SIZE * canvas.width) / 2,
    x: Math.floor(Math.pow(Math.random(), 1.5) * canvas.width),
    y: Math.floor(Math.random() * canvas.height),
    xv: xv * speedMult,
    yv: direction > 0.5 ? 1 * yv * speedMult : -1 * yv * speedMult,
  };
}

// set up the animation loop
var timeDelta,
  timeLast = 0;
requestAnimationFrame(loop);

function loop(timeNow) {
  // calculate the time difference
  timeDelta = timeNow - timeLast;
  timeLast = timeNow;

  // space background
  const gradient = ctx.createLinearGradient(0, 0, 300, 0);
  gradient.addColorStop(0, 'rgb(14, 7, 30)');
  gradient.addColorStop(1, 'rgb(18, 8, 45)');

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // draw the stars
  ctx.fillStyle = 'grey';
  for (let i = 0; i < STAR_NUM; i++) {
    ctx.beginPath();
    ctx.arc(stars[i].x, stars[i].y, stars[i].r, 0, Math.PI * 2);
    ctx.fill();

    // update the star's x position
    stars[i].x += stars[i].xv * timeDelta * 0.001;

    // reposition the star to the other side if it goes off screen
    if (stars[i].x < 0 - stars[i].r) {
      stars[i].x = Math.floor(Math.pow(Math.random(), 1.5) * canvas.width);
    } else if (stars[i].x > canvas.width + stars[i].r) {
      stars[i].x = Math.floor(Math.pow(Math.random(), 1.5) * canvas.width);
    }

    // update the star's y position
    stars[i].y += stars[i].yv * timeDelta * 0.001;

    // reposition the star to the other side if it goes off screen
    if (stars[i].y < 0 - stars[i].r) {
      stars[i].y = Math.floor(Math.random() * canvas.height);
    } else if (stars[i].y > canvas.height + stars[i].r) {
      stars[i].y = Math.floor(Math.random() * canvas.height);
    }
  }

  // call the next frame
  requestAnimationFrame(loop);
}
