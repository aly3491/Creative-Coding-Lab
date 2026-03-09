let x = 400;
let y = 300;

let xSpeed = 2;
let ySpeed = 2;

let rot = 0;
let scaleFactor = 1;

// from https://editor.p5js.org/chriswmartin/sketches/XAqi75tq8
let mouseThreshold = 50;
let moveDistance = 150;

let fgThreshold = 50;
let fgDistance = 150;

let flipped = false;
let fgFlipped = false;

let xFood;
let yFood = 0;
let foodEaten;

let xFood1;
let yFood1 = 0;
let foodEaten1;

let xFood2;
let yFood2 = 0;
let foodEaten2;

let foodActive;
let foodActive2;

let yF = 0;
let yF1 = 0;

let yfSpeed = 0.5;
let yfSpeed1 = 0.75;

let xfoodGiven;
let yfoodGiven;
let foodGiven;

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container")
  angleMode(DEGREES);
  colorMode(HSB);

  // for (let i = 0; i < 5; i++) {
  // xFood[i] = random(width);
  // yFood[i] = random(height);
  // }

  xFood = random(width);
  foodEaten = false;
  foodActive = false;

  xFood1 = random(width);
  foodEaten1 = false;
  foodActive1 = false;

  xFood2 = random(width);
  foodEaten2 = false;

  foodGiven = false;
}

function draw() {
  // background("blue");

  // from https://editor.p5js.org/sandpills/sketches/mW6A5NWph
  let from = color(200, 80, 150);
  let to = color(200, 80, 10);

  for (let y1 = 0; y1 < height; y1 += 10) {
    noStroke();
    // distribution of color across the width
    let amt = map(y1, 0, height, 0, 1);
    let col = lerpColor(from, to, amt);
    fill(col);
    rect(0, y1, width, 10);
  }

  food();
  food1();
  food2();

  fisher();
  fisher1();

  fed();

  fish(x, y);

  // "float" vibe
  let noiseVal = noise(frameCount * 0.01);
  y = map(noiseVal, 0, 1, 400, 330);

  // move
  // x = x - xSpeed;
  // if (x > width || x < 0) {
  //  xSpeed = -xSpeed;
  //  rot = 180;
  //  scaleFactor = -scaleFactor;
  // }

  // move away from mouse, also taken from chriswmartin
  let mouseDistance = int(dist(x, y, mouseX, mouseY));
  if (!flipped && mouseDistance <= mouseThreshold) {
    x += 60;
    xSpeed = -xSpeed;
    rot = 180;
    scaleFactor = -scaleFactor;
    console.log("FLIPPED");
    flipped = true;
  } else if (mouseDistance > mouseThreshold) {
    flipped = false;
  }

  // move w lerp
  x = x - xSpeed;
  if (!flipped && (x < 0 || x > width)) {
    xSpeed = -xSpeed;
    rot = 180;
    scaleFactor = -scaleFactor;
    flipped = true;
  }

  y = y - ySpeed;
  if (y > height - 50 || y < 70) {
    ySpeed = -ySpeed;
  }
  // console.log(mouseDistance)
}

function fish(fishX, fishY) {
  // setup
  push();

  // left side flip
  // if (x < 0) {
  //  scaleFactor = -scaleFactor;

  // }

  // right side flip
  // if (x > width - 110) {
  //  scaleFactor = -scaleFactor;
  // }

  translate(fishX, fishY);
  // scale(scaleFactor, 1);
  noStroke();
  fill("#EECEFF");

  rot = lerp(rot, 0, 0.1);
  rotate(rot);
  scale(scaleFactor, 1, 1);

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

  // nose 
  circle(0, 0, 5);

  pop();
}

function food() {
  // eating food

  if (x < 0) {
    foodActive = true;
  }

  if (foodEaten == false && foodActive == true) {
    fill(255);
    circle(xFood, yFood, 10);
    yFood = yFood + 1;

    if (yFood > height) {
      yFood = 0;
      xFood = random(width);
    }
  }

  let d = dist(x, y, xFood, yFood);
  if (d < 50) {
    foodEaten = true;
  }
  if (foodEaten == true) {
    yFood = 0;
    xFood = random(width);
    foodEaten = false;
  }
  // console.log(foodEaten);
  // console.log(foodActive);
}

function food1() {
  if (x > width) {
    foodActive1 = true;
  }

  if (foodEaten1 == false && foodActive1 == true) {
    fill(255);
    circle(xFood1, yFood1, 10);
    yFood1 = yFood1 + 1;

    if (yFood1 > height) {
      yFood1 = 0;
      xFood1 = random(width);
    }
  }

  let d = dist(x, y, xFood1, yFood1);
  if (d < 50) {
    foodEaten1 = true;
  }
  if (foodEaten1 == true) {
    yFood1 = 0;
    xFood1 = random(width);
    foodEaten1 = false;
  }
}

function food2() {
  if (foodEaten2 == false) {
    fill(255);
    circle(xFood2, yFood2, 10);
    yFood2 = yFood2 + 1;

    if (yFood2 > height) {
      yFood2 = 0;
      xFood2 = random(width);
    }
  }

  let d = dist(x, y, xFood2, yFood2);
  if (d < 50) {
    foodEaten2 = true;
  }
  if (foodEaten2 == true) {
    yFood2 = 0;
    xFood2 = random(width);
    foodEaten2 = false;
  }
}

function fisher() {
  stroke("grey");
  strokeWeight(5);
  beginShape();
  // straight line
  line(50, -10, 50, yF + 110);
  // right hook (outside)
  line(75, yF + 90, 50, yF + 110);
  // right hook (inside)
  line(65, yF + 80, 50, yF + 110);
  // left hook
  line(35, yF + 80, 50, yF + 110);
  endShape();

  yF = yF + yfSpeed;
  if (yF > 150 || yF < -150) {
    yfSpeed = -yfSpeed;
  }

  // console.log(yF1);

  // hook reference circle
  // noStroke();
  // fill("red");
  // circle(50, 110, 10);
}

function fisher1() {
  stroke("grey");
  strokeWeight(5);
  beginShape();
  // straight line
  line(550, -10, 550, yF1 + 110);
  // right hook (outside)
  line(575, yF1 + 90, 550, yF1 + 110);
  // right hook (inside)
  line(565, yF1 + 80, 550, yF1 + 110);
  // left hook
  line(535, yF1 + 80, 550, yF1 + 110);
  endShape();

  yF1 = yF1 + yfSpeed1;
  if (yF1 > 150 || yF1 < -200) {
    yfSpeed1 = -yfSpeed1;
  }
  // console.log(yF1);
}

function fed() {
  if (mouseIsPressed == true) {
    foodGiven = true;
    xfoodGiven = mouseX;
    yfoodGiven = mouseY;
  }

  if (foodGiven == true) {
    noStroke();
    fill(255);
    circle(xfoodGiven, yfoodGiven, 10);
    yfoodGiven = yfoodGiven + 1;

    let fgDistance = int(dist(x, y, xfoodGiven, yfoodGiven));
    if (!fgFlipped && fgDistance <= fgThreshold) {
      x += 60;
      xSpeed = -xSpeed;
      rot = 180;
      scaleFactor = -scaleFactor;
      console.log("FLIPPED 4 FOOD");
      fgFlipped = true;
    } else if (fgDistance > fgThreshold) {
      fgFlipped = false;
    }
  }

  // console.log(mouseIsPressed);
  // console.log(foodGiven);
}