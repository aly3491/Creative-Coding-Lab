let scanned = [];
let currentFrame = 0;

function preload() {
  for (let i = 1; i <= 4; i++) {
    scanned.push(loadImage("20260320144348-" + i + ".jpg"));
  }
}

function setup() {
  createCanvas(800, 500);

  // eraseBg(scanned, 10);
  doodles = crop(scanned, 0, 1000, 2000, 2000);
  doodles2 = crop(scanned, 0, 500, 500, 500);

  pictureAppear = false;


}

function draw() {
  background(255);

    push();
    translate(width/2, height/2);
    
    image (
        doodles[currentFrame],
        0,
        0,
        doodles[0].width*0.25,
        doodles[0].height*0.25
    );
    pop();

    currentFrame = floor(frameCount / 40 % 4); 



    if (mouseIsPressed) {
    push();
    translate(300, 100);
    
    image (
        doodles2[currentFrame],
        0,
        0,
        doodles2[0].width*0.25,
        doodles2[0].height*0.25
    );
    pop();
    } 

}

// You shouldn't need to modify these helper functions:

function crop(imgs, x, y, w, h) {
  let cropped = [];
  for (let i = 0; i < imgs.length; i++) {
    cropped.push(imgs[i].get(x, y, w, h));
  }
  return cropped;
}

function eraseBg(imgs, threshold = 10) {
  for (let i = 0; i < imgs.length; i++) {
    let img = imgs[i];
    img.loadPixels();
    for (let j = 0; j < img.pixels.length; j += 4) {
      let d = 255 - img.pixels[j];
      d += 255 - img.pixels[j + 1];
      d += 255 - img.pixels[j + 2];
      if (d < threshold) {
        img.pixels[j + 3] = 0;
      }
    }
    img.updatePixels();
  }
  // this function uses the pixels array
  // we will cover this later in the semester - stay tuned
}
