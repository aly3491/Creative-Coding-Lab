/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  // ...except to adjust the dancer's name on the next line:
  dancer = new dancerGhost(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class dancerGhost {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.xSpd = 2;

    this.xArms = -70;
    this.yArms = 150;
    this.yArmSpd = -1;
    this.xArmSpd = -1;

    this.xArms1 = 70;
    this.yArms1 = 10;
    this.yArmSpd1 = 1;
    this.xArmSpd1 = 1;

    this.xLegs = -15;
    this.xLegSpd = -1;

    this.xLegs1 = 15;
    this.xLegSpd1 = 1;
    
  }
  update() {
    if (mouseIsPressed) {
    this.xArms = this.xArms + this.xArmSpd;
    this.xArms1 = this.xArms1 + this.xArmSpd1;
    } 

    if (this.xArms < -70 || this.xArms > 100) {
      this.xArmSpd = -this.xArmSpd;
    }

    if (this.xArms1 < -70 || this.xArms1 > 100) {
      this.xArmSpd1 = -this.xArmSpd1;
    }

    if (key === 'm') {
      this.x = this.x + this.xSpd;
    }

    if (this.x > width || this.x < 0) {
      this.xSpd = -this.xSpd;
    }
    
    if (key === 's') {
      this.x = width/2
    }

    

  }
  display() {
    push();
    translate(this.x, this.y);

    fill(255);
    noStroke();
    // head
    circle(0, 0, 50);
    // neck
    rect(0 - 7, 0 + 20, 13, 20); 
    // body   
    ellipse(0, 0 + 85, 70, 110);
    rect(0 - 35, 0 + 80, 70, 70);
    // arms
    stroke(225);
    strokeWeight(10);
    line(0 - 35, 0 + 80, this.xArms, this.yArms);
    line(0 + 35, 0 + 80, this.xArms1, this.yArms1);

    this.yArms = this.yArms + this.yArmSpd;
    this.yArms1 = this.yArms1 + this.yArmSpd1;

    if (this.yArms < 10 || this.yArms > 150) {
      this.yArmSpd = -this.yArmSpd;
    }

    if (this.yArms1 < 10 || this.yArms1 > 150) {
      this.yArmSpd1 = -this.yArmSpd1;
    }

    // legs 
    line(0 - 15, 0 + 150, this.xLegs, 220);
    line(0 + 15, 0 + 150, this.xLegs1, 220);

    this.xLegs = this.xLegs + this.xLegSpd;
    this.xLegs1 = this.xLegs1 + this.xLegSpd1;

    if (this.xLegs > 20 || this.xLegs < -50) {
      this.xLegSpd = -this.xLegSpd;
    }

    if (this.xLegs1 > 50 || this.xLegs1 < -20) {
      this.xLegSpd1 = -this.xLegSpd1;
    }

    fill(255, 0, 0);
    textSize(10);
    text('"m" to move, "s" to reset position', 50, 200);
    text('long press 4 suprise', 50, 220);


    // this.drawReferenceShapes()

    pop();
  }
  // drawReferenceShapes() {
  //   strokeWeight(1);
  //   noFill();
  //   stroke(255, 0, 0);
  //   line(-5, 0, 5, 0);
  //   line(0, -5, 0, 5);
  //   stroke(255);
  //   rect(-100, -100, 200, 200);
  //   fill(255);
  //   stroke(0);
  // }
}



/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/