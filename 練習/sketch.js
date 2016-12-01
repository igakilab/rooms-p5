var back
var photo1;
var canvas
var x=0;
var y=0;
var speed = 3;
var koike = 0;

function preload(){
  photo1 = loadImage("Dot(kitaba).png");
  back = loadImage("zemimap2016.png");
}

function setup() {
  canvas = createCanvas(880,1250);
}

function draw() {
  noStroke();
  background(back);
    x += speed;
    y += koike;
    image(photo1,x,y);
  if(x > canvas.width - 10){
    speed = -5;
    koike = 3;
    image(photo1,x,y);
  }
}

