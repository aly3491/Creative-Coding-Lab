let bg;

// strings
let c; 
let g;
let d;
let a;

function preload() {
  bg = loadImage("bgviola.jpeg");
}


function setup() {
  // keep these 3 lines as they are
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.id("p5-canvas");
  canvas.parent("p5-canvas-container");

  c = new stringC();
  g = new stringG();
  d = new stringD();
  a = new stringA();

}

function draw() {
  image(bg, 0, 0, 700, 700);

  c.move();
  c.display();

  g.move();
  g.display();

  d.move();
  d.display();
  
  a.move();
  a.display();

}

class stringC {
  constructor() {
    this.x = 343;
    this.y = 150;
    this.s = 10
    this.ySpeed = 0.5;
    this.xSpeed = 0.01;
    this.appear = true;
  }
  move() {
    this.y = this.y + this.ySpeed;
    if (this.y > 375) {

      this.y = 150;
      this.s = 10;
      this.x = 343;
    }

    this.s = this.s + 0.03
    this.x = this.x - this.xSpeed;

  }
  display() {
    if (this.appear = true) {
    circle(this.x, this.y, this.s);
    }
    if (mouseIsPressed) {
      this.appear = false
    }
  }
}

class stringG {
  constructor() {
    this.x = 351;
    this.y = 150;
    this.s = 10
    this.ySpeed = 0.5;
    this.xSpeed = 0.005;
  }
    move() {
    this.y = this.y + this.ySpeed;
    if (this.y > 375) {
      this.y = 150;
      this.s = 10;
      this.x = 351;
    }

    this.s = this.s + 0.03
    this.x = this.x - this.xSpeed;
  }
  display() {
    circle(this.x, this.y, this.s);
  }
}

class stringD {
  constructor() {
    this.x = 358;
    this.y = 150;
    this.s = 10
    this.ySpeed = 0.5;
    this.xSpeed = 0.005;
  }
  move() {
    this.y = this.y + this.ySpeed;
    if (this.y > 375) {
      this.y = 150;
      this.s = 10;
      this.x = 358;
    }

    this.s = this.s + 0.03
    this.x = this.x + this.xSpeed;
  }
  display() {
    circle(this.x, this.y, this.s);
  }
}

class stringA {
  constructor() {
    this.x = 365;
    this.y = 150;
    this.s = 10
    this.ySpeed = 0.5;
    this.xSpeed = 0.01;
  }
  move() {
    this.y = this.y + this.ySpeed;
    if (this.y > 375) {
      this.y = 150;
      this.s = 10;
      this.x = 365;
    }

    this.s = this.s + 0.03
    this.x = this.x + this.xSpeed;
  }
  display() {
    circle(this.x, this.y, this.s);
  }
}
