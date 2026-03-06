let x = 400;
let y = 300;

let xSpeed = 3;
let ySpeed = 3;

let scaleFactor = 1;

// from https://editor.p5js.org/chriswmartin/sketches/XAqi75tq8 
let mouseThreshold = 50;
let moveDistance = 150;

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container")
  angleMode(DEGREES);
}

function draw() {
  background("blue");

  fish(x, y);

  // "float" vibe
  let noiseVal = noise(frameCount * 0.01);
  y = map(noiseVal, 0, 1, 400, 330);

  // move
  x = x - xSpeed;
  if (x > width - 110 || x < 0) {
    xSpeed = -xSpeed;
  }

  y = y - ySpeed;
  if (y > height - 50 || y < 70) {
    ySpeed = -ySpeed;
  }

  // move away from mouse, also taken from chriswmartin
  let mouseDistance = int(dist(x, y, mouseX, mouseY));
  if (mouseDistance <= mouseThreshold) {
    x += 60;
    xSpeed = -xSpeed;
    scaleFactor = -scaleFactor
  }
}

function fish(fishX, fishY) {
  // setup
  push();

  // left side flip
  if (x < 0) {
    scaleFactor = -scaleFactor;
    
  }

  // right side flip
  if (x > width - 110) {
    scaleFactor = -scaleFactor;
  }

  translate(fishX, fishY);
  scale(scaleFactor, 1);
  noStroke();
  fill("#EECEFF");

  // body
  ellipse(0 + 50, 0, 100, 40);

  // tail
  triangle(0 + 75, 0, 40 + 75, -40, 40 + 75, 40);

  // eye
  fill("#2A5DF2");
  circle(0 + 20, 0 - 5, 7);

  // wings
  push();
  rotate(330);
  fill("#2A5DF2");
  ellipse(0 + 50, 0 - 10, 30, 60);
  rotate(60);
  ellipse(0 + 38, 0 - 60, 30, 60);

  // reference cirlce
  // fill("red");
  // circle(0, 0, 5);
  // pop();

  pop();
}

function grass() {
  fill("green");
  beginShape();
  vertex(width / 2, 350);
  endShape();
}
