var bgcolor;
var button;
var slider;
var input;

function setup() {
  createCanvas(1500,400);
  bgcolor = color(200);
  nameP= createP('Fitter, Better Happier');
  createButton("Press");
  rectMode();
  rotateVal = 0;
  scaleVal = 1;
  slider=createSlider(10,2500,0);

}

function mousePressed () {
  bgcolor= color(random(255));
}


function draw() {
  background(bgcolor);
  fill(0,5,200)
  push();
  translate(width/3, height/3);
  scale(scaleVal);
  rotate(rotateVal);
  circle(100, -100, 100, 75);
  circle(0, 0, 75, 75);
  pop();

  push();
  translate(2*width/3, 2*height/3);
  scale(scaleVal);
  rotate(-rotateVal);
  circle(100, -100, 100, 75);
  circle(0, 0, 75, 75);
  pop();

  circle(100, 100, slider.value(), slider.value());
  circle(200, 200, slider.value(), slider.value());
  circle(100, -100, slider.value(), slider.value());
  circle(200, -200, slider.value(), slider.value());
  circle(700, 700, slider.value(), slider.value());
  circle(700, -700, slider.value(), slider.value());


  rotateVal = rotateVal + .1;
  scaleVal = scaleVal + .01;
  if (scaleVal > 5) {
    scaleVal = .2;
  }
}
