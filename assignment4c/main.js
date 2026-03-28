// Assignment 4c - Bouncing balls
// Author: Victor Nwabueze
// Description: Using canvas and JavaScript objects to create animated bouncing balls

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

// Store all balls
const balls = [];
