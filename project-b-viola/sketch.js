let s;

let step = 0;

let keySequence = [
  "D",
  "D",
  "A",
  "A",
  "B",
  "B",
  "A",
  "G",
  "G",
  "F",
  "F",
  "E",
  "E",
  "D",
  "A",
  "A",
  "G",
  "G",
  "F",
  "F",
  "E",
  "A",
  "A",
  "G",
  "G",
  "F",
  "F",
  "E",
  "D",
  "D",
  "A",
  "A",
  "B",
  "B",
  "A",
  "G",
  "G",
  "F",
  "F",
  "E",
  "E",
  "D",
];

let xStrings = {
  D: { x: 120, y: 400 },
  A: { x: 190, y: 400 },
  B: { x: 260, y: 100 },
  G: { x: 190, y: 300 },
  F: { x: 190, y: 200 },
  E: { x: 190, y: 100 },
  C: { x: 260, y: 200 },

  // "A" == (190, 400),
  // "B" == (260, 100),
  // "D" == (120, 400),
  // "E" == (190, 100),
  // "F" == (190, 200),
  // "G" == (190, 300),

  // "A" == 190,
  // "B" == 260,
  // "C" == 260,
  // "D" == 120,
  // "E" == 190,
  // "F" == 190,
  // "G" == 190,
};

// function preload() {
//   bg = loadImage("bgviola.jpeg");
// }


function setup() {
  // keep these 3 lines as they are
  let canvas = createCanvas(310, 500);
  canvas.id("p5-canvas");
  canvas.parent("p5-canvas-container");

  s = new string();

}

function draw() {
  background(250);
  s.display();
  play();
}

function play() {
  // start game
  if (step === 0) {
    background(250);
    fill(250);
    stroke(0);
    strokeWeight(2);
    // rectMode(CENTER);
    // rect(width / 2, 475, 270, 48, 10);
    strokeWeight(0);
    fill(0);
    textAlign(CENTER);
    textSize(20);
    text("Welcome to Viola Strings!", width / 2, height / 2);
    text("Press 'return' to Start the Game!", width / 2, height / 2 + 50);
    // step == 1;
    // return;
  }

  // game stage -> which circle to press
  if (step > 0 && step <= keySequence.length) {
    let currentNote = keySequence[step - 1];
    let p = xStrings[currentNote];
    if (p) {
      stroke(0);
      strokeWeight(1);
      fill(250);
      circle(p.x, p.y, 50);
    }
  }
}

function keyPressed() {
  if (step === 0 && keyCode === ENTER) {
    step = 1;
  } else if (step > 0 && step <= keySequence.length) {
    let requiredKey = keySequence[step - 1];
    if (key.toUpperCase() === requiredKey) {
      step++;
    }
  }
}

class string {
  constructor() {
    this.xC = 50;
    this.xG = 120;
    this.xD = 190;
    this.xA = 260;
    this.s = 50;
  }
  display() {
    // strings
    stroke(0);
    strokeWeight(3);
    line(50, 0, 50, 500);
    line(120, 0, 120, 500);
    line(190, 0, 190, 500);
    line(260, 0, 260, 500);

    // notes
    fill(255);
    strokeWeight(2);

    circle(this.xC, 100, this.s);
    circle(this.xC, 200, this.s);
    circle(this.xC, 300, this.s);
    circle(this.xC, 400, this.s);

    circle(this.xG, 100, this.s);
    circle(this.xG, 200, this.s);
    circle(this.xG, 300, this.s);
    circle(this.xG, 400, this.s);

    circle(this.xD, 100, this.s);
    circle(this.xD, 200, this.s);
    circle(this.xD, 300, this.s);
    circle(this.xD, 400, this.s);

    circle(this.xA, 100, this.s);
    circle(this.xA, 200, this.s);
    circle(this.xA, 300, this.s);
    circle(this.xA, 400, this.s);

    fill(0);
    strokeWeight(0.5);
    textSize(30);
    textAlign(CENTER, CENTER);

    text("D", this.xC, 100);
    text("E", this.xC, 200);
    text("F", this.xC, 300);
    text("G", this.xC, 400);

    text("A", this.xG, 100);
    text("B", this.xG, 200);
    text("C", this.xG, 300);
    text("D", this.xG, 400);

    text("E", this.xD, 100);
    text("F", this.xD, 200);
    text("G", this.xD, 300);
    text("A", this.xD, 400);

    text("B", this.xA, 100);
    text("C", this.xA, 200);
    text("D", this.xA, 300);
    text("E", this.xA, 400);
  }
}
