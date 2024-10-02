function preload() {}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0,102,51);
  
  strokeWeight(1);
  fill(0,0,255);
  stroke(255,0,0);
  rect(10,10,100,100);
  
  strokeWeight(10);
  fill(255,255,255);
  stroke(0,0,0);
  rect(110,110,100,100);
  
}