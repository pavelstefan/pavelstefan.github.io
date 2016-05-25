var capture;

function setup() {
  createCanvas(390, 240);
  capture = createCapture(VIDEO);
  capture.size(320, 240);

}

function draw() {
   background(255, 0, 0);
  image(capture, 0, 0, 320, 240);

}