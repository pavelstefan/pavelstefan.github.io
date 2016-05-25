var capture;

function setup() {
  createCanvas(390, 240);
  capture = createCapture(VIDEO);
  capture.size(320, 240);

}

function draw() {

  image(capture, 0, 0, 320, 240);

}