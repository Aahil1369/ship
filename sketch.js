var sea;
var ship;
function preload(){
seaImg = loadImage("sea.png")
shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(600,300);
  sea = createSprite(600,300);
  sea.addImage("background",seaImg);
  sea.velocity = -4;

  ship = createSprite(300,150);
  ship.addAnimation("shipping",shipImg);
  ship.scale = 0.2
}

function draw() {
  background("white");
  
  
  
  
  
  drawSprites();
}