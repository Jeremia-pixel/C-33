const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World;

var bg;
var obj1;
var obj2;
var ground;
var engine;
var world;
var snow;
var snowImg;

function preload(){
bg= loadImage("snow2.jpg");
snowImg = loadImage("snow4.webp");
}

function setup() {
  createCanvas(1520,715);
  engine = Engine.create();
  world = engine.world

 obj1 = createSprite(200,620,10,70);
 obj1.shapeColor = "red"

 obj2 = createSprite(500,620,10,70);
 obj2.shapeColor = "red";

 ground = createSprite(700,680,width,10);
 
 snow = new Snow(400,0,snowImg);
}


function draw() {
  background(bg);  
  Engine.update(engine);

  snow.display();

  if(keyDown("UP")){
    obj1.velocityY = -12;
  }
  obj1.velocityY = obj1.velocityY +1;
  
  obj1.collide(ground);
  obj2.collide(ground);
  
  drawSprites();
}