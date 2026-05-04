let steps = 0;

let s;
let g;

let osc;

function preload() {
  bg = loadImage("bgviola.jpeg");
  scrollnpeg = loadImage("srl.jpeg");
  fingernstrings = loadImage("fb.jpeg");
  fholenbridge = loadImage("fh.jpeg");
  finentail = loadImage("ft.jpeg");
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.id("p5-canvas");
  canvas.parent("p5-canvas-container");

  s = new string();
  g = new game();

  osc = new p5.Oscillator('sine');
  osc.start();
  osc.amp(0);

  envelope = new p5.Env();
  envelope.setADSR(0.001, 0.5, 0.1, 0.5);
}

function draw() {
  background(255);
  strokeWeight(0);
  fill(0);
  textAlign(CENTER);

  textSize(10);
  text("A simple work by Annie 杨", width / 2, 770);
  textSize(20);

  if (steps === 0) {
    text("Do you still remember it?", width / 2, height / 2);
    text("Press '1' to continue.", width / 2, height / 2 + 50);
  }

  if (steps === 1) {
    background(255);
    text("Do you still remember the Viola?", width / 2, height / 2);
    text("Press '2' to continue.", width / 2, height / 2 + 50);

    textSize(10);
    text("A simple work by Annie 杨", width / 2, 770);
    textSize(20);
  }
  if (steps === 2) {
    background(255);
    text("Welcome to the World of Viola.", width / 2, height / 2 - 50);
    text("Here, you can learn and play the Viola.", width / 2, height / 2);
    text("Press '3' to continue.", width / 2, height / 2 + 50);

    textSize(10);
    text("A simple work by Annie 杨", width / 2, 770);
    textSize(20);
  }

  if (steps === 3) {
    background(255);
    text("On the next page, hoover your mouse over the parts", width / 2, height / 2 - 50);
    text("of the Viola and click on it to learn more about them.", width / 2, height / 2);
    text("Press '4' to continue.", width / 2, height / 2 + 50);

    textSize(10);
    text("A simple work by Annie 杨", width / 2, 770);
    textSize(20);
  }

  if (steps === 4) {
    imageMode(CENTER);
    image(bg, width / 2, height / 2, 700, 700);
    info();
    text("Press '5' to continue.", width / 2, 15);

    textSize(10);
    text("A simple work by Annie 杨", width / 2, 770);
    textSize(20);
  }

  if (steps === 5) {
    background(255);
    text("Press on the notes to play as song.", width / 2, 25);
    text("Press '6' to continue.", width / 2, 55);

    textSize(10);
    text("A simple work by Annie 杨", width / 2, 770);
    textSize(20);

    s.display();
    play();
  }

  if (steps === 6) {
    background(255);

    text("On the next page, click on the notes as it falls", width / 2, height / 2 - 50);
    text("down (hint: it's like piano tiles).", width / 2, height / 2);
    text("Press '7' to continue.", width / 2, height / 2 + 50);

    textSize(10);
    text("A simple work by Annie 杨", width / 2, 770);

  }

  if (steps === 7) {
    background(255);

    textSize(10);
    text("A simple work by Annie 杨", width / 2, 770);
    textSize(20);

    g.display();
    g.mousePsed();
  }

}

function keyPressed() {
  if (steps === 0 && key === '1') {
    steps = 1;
  }

  if (steps === 1 && key === '2') {
    steps = 2;
  }

  if (steps === 2 && key === '3') {
    steps = 3;
  }

  if (steps === 3 && key === '4') {
    steps = 4;
  }

  if (steps === 4 && key === '5') {
    steps = 5;
  }

  if (steps === 5 && key === '6') {
    steps = 6;
  }

  if (steps === 6 && key === '7') {
    steps = 7;
    g = new game();
  }

  if (steps === 7 && key === '8') {
    steps = 0;
    g = new game();
  }

}

function info() {
  // scroll 
  if (mouseX <= width / 2 + 50 && mouseX >= width / 2 && mouseY <= 90 && mouseY >= 80) {
    text("scroll", width / 2 - 60, 100);
  }

  if (mouseIsPressed) {
    if (mouseX <= width / 2 + 50 && mouseX >= width / 2 && mouseY <= 90 && mouseY >= 80) {
      image(scrollnpeg, width / 2, height / 2, 700, 700);
      text("The scroll is just a decorative part of the viola.", 300, height / 2);
      text("It exists on the Violin, Cello, and Bass too.", 300, height / 2 + 50);
    }
  }

  // pegs
  if (mouseX <= 750 && mouseX >= 700 && mouseY <= 150 && mouseY >= 100) {
    text("pegs", 650, 150);
  }

  if (mouseIsPressed) {
    if (mouseX <= 750 && mouseX >= 700 && mouseY <= 150 && mouseY >= 100) {
      image(scrollnpeg, width / 2, height / 2, 700, 700);
      text("Tightens or loosens the strings to adjust pitch.", 300, height / 2);
      text("It exists on the Violin, Cello, and Bass too.", 300, height / 2 + 50);
    }
  }

  // finger board
  if (mouseX <= 750 && mouseX >= 700 && mouseY <= 350 && mouseY >= 300) {
    text("fingerboard", 650, 300);
  }

  if (mouseIsPressed) {
    if (mouseX <= 750 && mouseX >= 700 && mouseY <= 350 && mouseY >= 300) {
      image(fingernstrings, width / 2, height / 2, 700, 700);
      text("The place where player 'presses' the strings to", 300, height / 2 - 50);
      text("change pitch. Starting from the top to the bottom,", 300, height / 2);
      text("every different 'press' makes a different note.", 300, height / 2 + 50);
      text("It exists on the Violin, Cello, and Bass too.", 300, height / 2 + 100);
    }
  }

  // strings
  if (mouseX <= width / 2 + 30 && mouseX >= width / 2 - 30 && mouseY <= 510 && mouseY >= 480) {
    text("strings- C, G, A, D", width / 2 - 170, 520);
  }

  if (mouseIsPressed) {
    if (mouseX <= width / 2 + 30 && mouseX >= width / 2 - 30 && mouseY <= 510 && mouseY >= 480) {
      image(fingernstrings, width / 2, height / 2, 700, 700);
      text("(From left to right) The strings are C, G, D, A", 250, height / 2 - 50);
      text("(From top to bottom) C string fingerings: D, E, F, G", 250, height / 2);
      text("(From top to bottom) G string fingerings: A, B, C, D", 250, height / 2 + 50);
      text("(From top to bottom) D string fingerings: E, F, G, A", 250, height / 2 + 100);
      text("(From top to bottom) A string fingerings: B, C, D, E", 250, height / 2 + 150);

      text("Viola is in between a Cello and Violin pitch and size wise.", 1220, height / 2);
      text("It's pitch is lower than a Violin but higher than a Cello.", 1220, height / 2 + 50);
      text("It's size is bigger than a Violin but smaller than a Cello.", 1220, height / 2 + 100);
    }
  }

  // bridge
  if (mouseX <= width / 2 + 30 && mouseX >= width / 2 - 30 && mouseY <= 560 && mouseY >= 540) {
    text("bridge", width / 2 - 110, 550)
  }

  if (mouseIsPressed) {
    if (mouseX <= width / 2 + 30 && mouseX >= width / 2 - 30 && mouseY <= 560 && mouseY >= 540) {
      image(fholenbridge, width / 2, height / 2, 700, 700);
      text("Holds on to the strings and transfers", 250, height / 2 - 50);
      text("vibrations to the body for amplification.", 250, height / 2);
      text("It exists on the Violin, Cello, and Bass too.", 250, height / 2 + 50);
    }
  }

  // f holes 
  if (mouseX <= 810 && mouseX >= 790 && mouseY <= 610 && mouseY >= 580) {
    text("f holes", 900, 610)
  }

  if (mouseIsPressed) {
    if (mouseX <= 810 && mouseX >= 790 && mouseY <= 610 && mouseY >= 580) {
      image(fholenbridge, width / 2, height / 2, 700, 700);
      text("Allows for air to travel outside of", 250, height / 2 - 50);
      text(" the Viola, amplifying the sound.", 250, height / 2);
      text("It exists on the Violin, Cello, and Bass too.", 250, height / 2 + 50);
    }
  }

  // fine tuners 
  if (mouseX <= 770 && mouseX >= 750 && mouseY <= 630 && mouseY >= 590) {
    text("fine tuners", 910, 640)
  }

  if (mouseIsPressed) {
    if (mouseX <= 770 && mouseX >= 750 && mouseY <= 630 && mouseY >= 590) {
      image(finentail, width / 2, height / 2, 700, 700);
      text("More precise adjustments to the pitches.", 200, height / 2);
      text("It exists on the Violin, Cello, and Bass too.", 200, height / 2 + 50);
    }
  }

  // tail piece
  if (mouseX <= width / 2 + 50 && mouseX >= width / 2 && mouseY <= 700 && mouseY >= 640) {
    text("tail piece", 910, 647)
  }

  if (mouseIsPressed) {
    if (mouseX <= width / 2 + 50 && mouseX >= width / 2 && mouseY <= 700 && mouseY >= 640) {
      image(finentail, width / 2, height / 2, 700, 700);
      text("Secures and achors the strings at the", 210, height / 2 - 50);
      text("lower part of the instrument.", 210, height / 2);
      text("It exists on the Violin, Cello, and Bass too.", 200, height / 2 + 50);
    }
  }
}

function play() {
  // c string
  if (mouseIsPressed) {
    if (mouseX <= width / 2 - 140 && mouseX >= width / 2 - 160 && mouseY <= 110 && mouseY >= 90) {
      osc.freq(130.81)
      envelope.play(osc, 0, 0.1);
    }
  }
  if (mouseIsPressed) {
    if (mouseX <= width / 2 - 120 && mouseX >= width / 2 - 180 && mouseY <= 220 && mouseY >= 180) {
      osc.freq(146.83)
      envelope.play(osc, 0, 0.1);
    }
  }
  if (mouseIsPressed) {
    if (mouseX <= width / 2 - 120 && mouseX >= width / 2 - 180 && mouseY <= 320 && mouseY >= 280) {
      osc.freq(164.81)
      envelope.play(osc, 0, 0.1);
    }
  }
  if (mouseIsPressed) {
    if (mouseX <= width / 2 - 120 && mouseX >= width / 2 - 180 && mouseY <= 420 && mouseY >= 380) {
      osc.freq(174.61)
      envelope.play(osc, 0, 0.1);
    }
  }
  if (mouseIsPressed) {
    if (mouseX <= width / 2 - 120 && mouseX >= width / 2 - 180 && mouseY <= 520 && mouseY >= 480) {
      osc.freq(196.00)
      envelope.play(osc, 0, 0.1);
    }
  }

  // g string
  if (mouseIsPressed) {
    if (mouseX <= width / 2 - 20 && mouseX >= width / 2 - 80 && mouseY <= 220 && mouseY >= 180) {
      osc.freq(220.00)
      envelope.play(osc, 0, 0.1);
    }
  }
  if (mouseIsPressed) {
    if (mouseX <= width / 2 - 20 && mouseX >= width / 2 - 80 && mouseY <= 320 && mouseY >= 280) {
      osc.freq(246.94)
      envelope.play(osc, 0, 0.1);
    }
  }
  if (mouseIsPressed) {
    if (mouseX <= width / 2 - 20 && mouseX >= width / 2 - 80 && mouseY <= 420 && mouseY >= 380) {
      osc.freq(261.63)
      envelope.play(osc, 0, 0.1);
    }
  }
  if (mouseIsPressed) {
    if (mouseX <= width / 2 - 20 && mouseX >= width / 2 - 80 && mouseY <= 520 && mouseY >= 480) {
      osc.freq(293.66)
      envelope.play(osc, 0, 0.1);
    }
  }

  // d string
  if (mouseIsPressed) {
    if (mouseX <= width / 2 + 80 && mouseX >= width / 2 + 20 && mouseY <= 220 && mouseY >= 180) {
      osc.freq(329.63)
      envelope.play(osc, 0, 0.1);
    }
  }
  if (mouseIsPressed) {
    if (mouseX <= width / 2 + 80 && mouseX >= width / 2 + 20 && mouseY <= 320 && mouseY >= 280) {
      osc.freq(349.23)
      envelope.play(osc, 0, 0.1);
    }
  }
  if (mouseIsPressed) {
    if (mouseX <= width / 2 + 80 && mouseX >= width / 2 + 20 && mouseY <= 420 && mouseY >= 380) {
      osc.freq(392.00)
      envelope.play(osc, 0, 0.1);
    }
  }
  if (mouseIsPressed) {
    if (mouseX <= width / 2 + 80 && mouseX >= width / 2 + 20 && mouseY <= 520 && mouseY >= 480) {
      osc.freq(440.00)
      envelope.play(osc, 0, 0.1);
    }
  }

  // a string 
  if (mouseIsPressed) {
    if (mouseX <= width / 2 + 180 && mouseX >= width / 2 + 120 && mouseY <= 220 && mouseY >= 180) {
      osc.freq(493.88)
      envelope.play(osc, 0, 0.1);
    }
  }
  if (mouseIsPressed) {
    if (mouseX <= width / 2 + 180 && mouseX >= width / 2 + 120 && mouseY <= 320 && mouseY >= 280) {
      osc.freq(523.25)
      envelope.play(osc, 0, 0.1);
    }
  }
  if (mouseIsPressed) {
    if (mouseX <= width / 2 + 180 && mouseX >= width / 2 + 120 && mouseY <= 420 && mouseY >= 380) {
      osc.freq(587.33)
      envelope.play(osc, 0, 0.1);
    }
  }
  if (mouseIsPressed) {
    if (mouseX <= width / 2 + 180 && mouseX >= width / 2 + 120 && mouseY <= 520 && mouseY >= 480) {
      osc.freq(659.25)
      envelope.play(osc, 0, 0.1);
    }
  }

  // c string flats and sharps
  if (mouseIsPressed) {
    if (mouseX <= width / 2 - 140 && mouseX >= width / 2 - 160 && mouseY <= 150 && mouseY >= 130) {
      osc.freq(138.59)
      envelope.play(osc, 0, 0.1);
    }
  }
  if (mouseIsPressed) {
    if (mouseX <= width / 2 - 140 && mouseX >= width / 2 - 160 && mouseY <= 260 && mouseY >= 240) {
      osc.freq(155.56)
      envelope.play(osc, 0, 0.1);
    }
  }
  if (mouseIsPressed) {
    if (mouseX <= width / 2 - 140 && mouseX >= width / 2 - 160 && mouseY <= 460 && mouseY >= 440) {
      osc.freq(185.00)
      envelope.play(osc, 0, 0.1);
    }
  }

  // g string flats and sharps 
  if (mouseIsPressed) {
    if (mouseX <= width / 2 - 40 && mouseX >= width / 2 - 60 && mouseY <= 150 && mouseY >= 130) {
      osc.freq(207.65)
      envelope.play(osc, 0, 0.1);
    }
  }
  if (mouseIsPressed) {
    if (mouseX <= width / 2 - 40 && mouseX >= width / 2 - 60 && mouseY <= 260 && mouseY >= 240) {
      osc.freq(233.08)
      envelope.play(osc, 0, 0.1);
    }
  }
  if (mouseIsPressed) {
    if (mouseX <= width / 2 - 40 && mouseX >= width / 2 - 60 && mouseY <= 460 && mouseY >= 440) {
      osc.freq(277.18)
      envelope.play(osc, 0, 0.1);
    }
  }

  // d string flats and sharps
  if (mouseIsPressed) {
    if (mouseX <= width / 2 + 60 && mouseX >= width / 2 + 40 && mouseY <= 150 && mouseY >= 130) {
      osc.freq(311.13)
      envelope.play(osc, 0, 0.1);
    }
  }
  if (mouseIsPressed) {
    if (mouseX <= width / 2 + 60 && mouseX >= width / 2 + 40 && mouseY <= 360 && mouseY >= 340) {
      osc.freq(369.99)
      envelope.play(osc, 0, 0.1);
    }
  }
  if (mouseIsPressed) {
    if (mouseX <= width / 2 + 60 && mouseX >= width / 2 + 40 && mouseY <= 460 && mouseY >= 440) {
      osc.freq(415.30)
      envelope.play(osc, 0, 0.1);
    }
  }

  // a string flats and sharps
  if (mouseIsPressed) {
    if (mouseX <= width / 2 + 160 && mouseX >= width / 2 + 140 && mouseY <= 150 && mouseY >= 130) {
      osc.freq(466.16)
      envelope.play(osc, 0, 0.1);
    }
  }
  if (mouseIsPressed) {
    if (mouseX <= width / 2 + 160 && mouseX >= width / 2 + 140 && mouseY <= 360 && mouseY >= 340) {
      osc.freq(554.37)
      envelope.play(osc, 0, 0.1);
    }
  }
  if (mouseIsPressed) {
    if (mouseX <= width / 2 + 160 && mouseX >= width / 2 + 140 && mouseY <= 460 && mouseY >= 440) {
      osc.freq(622.25)
      envelope.play(osc, 0, 0.1);
    }
  }

}

class game {
  // by isnljc -> https://editor.p5js.org/isnljc/sketches/H1g8oY6tf 
  // i edited some stuff to fit my game <3
  constructor() {
    this.osc = new p5.Oscillator("sine");
    this.osc.start();
    this.osc.amp(0);

    this.envelope = new p5.Env();
    this.envelope.setADSR(0.001, 0.5, 0.1, 0.5);

    this.pos = [0, 3, 2, 1, 3, 0, 1, 2, 1, 0, 2, 1, 2, 3, 1, 0, 1, 3, 2, 3, 1, 3, 2, 0, 1, 2, 0, 3, 2, 0, 1, 2, 3, 2, 3, 1, 0, 1, 3, 2, 0, 1,];
    this.note = [0, 0, 1, 1, 2, 2, 1, 3, 3, 4, 4, 5, 5, 0, 1, 1, 3, 3, 4, 4, 5, 1, 1, 3, 3, 4, 4, 5, 0, 0, 1, 1, 2, 2, 1, 3, 3, 4, 4, 5, 5, 0,];
    this.noteSound = [293.66, 440.0, 493.88, 392.00, 369.99, 329.63];
    this.duration = [1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2,];

    this.y = [];
    this.noteNumber = 42 // total number of notes
    this.space = 50 // how far apart each note is from each other when falling
    this.click = 0;
    this.offset = (width / 2) - (4 * this.space) / 2; // to get the game to start in the center 

    this.y[0] = 0;
    for (let i = 1; i < this.noteNumber; i++) {
      this.y[i] = this.y[i - 1] - this.duration[i] * 50;
    }
  }
  display() {
    for (let i = 0; i < this.noteNumber; i++) {
      if (this.click == i) {
        strokeWeight(2);
        fill("gray");
      } else
        fill(255);
      // ellipse(this.offset + (this.pos[i] * this.space) + (this.space) / 2, this.y[i], this.space, this.duration[i] * this.space);
      rect(this.offset + (this.pos[i] * this.space), this.y[i], this.space, this.duration[i] * this.space);
      this.y[i] = this.y[i] + 2;

      if (i === this.click && this.y[i] > height) {
        steps = 6;

      }
    }
    if (this.click >= this.noteNumber) {
      strokeWeight(0);
      fill(0);
      textAlign(CENTER);
      textSize(20);

      // step 8  
      text("Thank you for remembering the Viola.", width / 2, height / 2 - 50)
      text("Press '8' to return to the start.", width / 2, height / 2)
      text("Hope to see you again soon <3.", width / 2, height / 2 + 50)

      textSize(10);
      text("A simple work by Annie 杨", width / 2, 770);
      textSize(20);
    }
  }
  mousePsed() {
    if (mouseIsPressed) {
      if (mouseX > this.offset + (this.pos[this.click] * this.space) && mouseX < this.offset + ((this.pos[this.click] + 1) * this.space) &&
        mouseY > this.y[this.click] && mouseY < this.y[this.click] + this.duration[this.click] * this.space) {
        this.osc.freq(this.noteSound[this.note[this.click]]);
        this.envelope.play(this.osc, 0, 0.1);
        this.click++;
      }
    }
  }
}

class string {
  constructor() {
    this.xC = width / 2 - 150;
    this.xG = width / 2 - 50;
    this.xD = width / 2 + 50;
    this.xA = width / 2 + 150;
    this.s = 50;

  }
  display() {
    // strings

    let xStart = width / 2 - (4 * this.space) / 2;

    stroke(0);
    strokeWeight(3);
    line(this.xC, 100, this.xC, 700);
    line(this.xG, 100, this.xG, 700);
    line(this.xD, 100, this.xD, 700);
    line(this.xA, 100, this.xA, 700);

    // stroke(0);
    // strokeWeight(3);
    // line(50, 0, 50, 500);
    // line(120, 0, 120, 500);
    // line(190, 0, 190, 500);
    // line(260, 0, 260, 500);

    // notes
    fill(255);
    strokeWeight(2);

    circle(this.xC, 200, this.s);
    circle(this.xC, 300, this.s);
    circle(this.xC, 400, this.s);
    circle(this.xC, 500, this.s);

    circle(this.xG, 200, this.s);
    circle(this.xG, 300, this.s);
    circle(this.xG, 400, this.s);
    circle(this.xG, 500, this.s);

    circle(this.xD, 200, this.s);
    circle(this.xD, 300, this.s);
    circle(this.xD, 400, this.s);
    circle(this.xD, 500, this.s);

    circle(this.xA, 200, this.s);
    circle(this.xA, 300, this.s);
    circle(this.xA, 400, this.s);
    circle(this.xA, 500, this.s);

    fill(0);
    strokeWeight(0.5);
    textSize(30);
    textAlign(CENTER, CENTER);

    text("D", this.xC, 200);
    text("E", this.xC, 300);
    text("F", this.xC, 400);
    text("G", this.xC, 500);

    text("A", this.xG, 200);
    text("B", this.xG, 300);
    text("C", this.xG, 400);
    text("D", this.xG, 500);

    text("E", this.xD, 200);
    text("F", this.xD, 300);
    text("G", this.xD, 400);
    text("A", this.xD, 500);

    text("B", this.xA, 200);
    text("C", this.xA, 300);
    text("D", this.xA, 400);
    text("E", this.xA, 500);

    textSize(15);

    text("C", this.xC, 100)

    text("C#", this.xC, 140);
    text("D#/E♭", this.xC, 250);
    text("F#", this.xC, 450);

    text("G#/A♭", this.xG, 140);
    text("A#/E♭", this.xG, 250);
    text("C#", this.xG, 450);

    text("D#/E♭", this.xD, 140);
    text("F#", this.xD, 350);
    text("G#/A♭", this.xD, 450)

    text("A#/B♭", this.xA, 140);
    text("C#", this.xA, 350)
    text("D#/E♭", this.xA, 450)
  }
}
