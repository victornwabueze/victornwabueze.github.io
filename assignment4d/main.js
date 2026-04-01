// Assignment 4d - Bouncing balls
// Author: Victor Nwabueze
// Description: Extending bouncing balls animation with Shape class, Evil Circle, and interaction features.

// setup canvas
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random color
function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

// Ball class definition
class Ball {
constructor(x, y, velX, velY, color, size) {
this.x = x;
this.y = y;
this.velX = velX;
this.velY = velY;
this.color = color;
this.size = size;
}

// Method to draw the ball on canvas
draw() {
ctx.beginPath();
ctx.fillStyle = this.color;
ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
ctx.fill();
}

// Method to update ball position
update() {
  // Bounce off walls (left/right)
  if (this.x + this.size >= width || this.x - this.size <= 0) {
    this.velX = -this.velX;
  }

  // Bounce off walls (top/bottom)
  if (this.y + this.size >= height || this.y - this.size <= 0) {
    this.velY = -this.velY;
  }

  // Move ball
  this.x += this.velX;
  this.y += this.velY;
}

// Method to update ball position
update() {
  // Bounce off walls (left/right)
  if (this.x + this.size >= width || this.x - this.size <= 0) {
    this.velX = -this.velX;
  }

  // Bounce off walls (top/bottom)
  if (this.y + this.size >= height || this.y - this.size <= 0) {
    this.velY = -this.velY;
  }

  // Move ball
  this.x += this.velX;
  this.y += this.velY;
}



// Detect collision with other balls
collisionDetect() {
for (const ball of balls) {
if (this !== ball) {
const dx = this.x - ball.x;
const dy = this.y - ball.y;
const distance = Math.sqrt(dx * dx + dy * dy);

if (distance < this.size + ball.size) {
ball.color = this.color = randomRGB();
}
}
}
}
}

// Store all balls
const balls = [];

while (balls.length < 25) {
  const size = random(10, 20);

  const ball = new Ball(
    random(size, width - size),
    random(size, height - size),
    random(-7, 7),
    random(-7, 7),
    randomRGB(),
    size
  );

  balls.push(ball);
}

function loop() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
  ctx.fillRect(0, 0, width, height);

  for (const ball of balls) {
ball.draw();
ball.update();
ball.collisionDetect();
}

requestAnimationFrame(loop);
}

loop();

