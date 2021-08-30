const Engine = Matter.Engine,
 World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 var bg
 var sn=[]
 var kid

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(1500,750);
  bg=loadImage("snow3.jpg");
  k=loadImage("kid.jpg");
  var kid = Bodies.rectangle(20, 50, 50, 40);
  kid.addImage(k);
  }

function draw() {
  background(bg);
  var ranx = random(25,140);

  if(frameCount%5===0){
    sn.push(new Snow(ranx,750));
    console.log(sn.length)
  }

  if(frameCount%5===0) {
    sn.push.display();
  
  }
  drawSprites();
}