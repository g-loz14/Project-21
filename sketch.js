const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ground,leftGround,rightGround,topGround

var ball

var button1,button2

function setup() {
  createCanvas(800,700);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);
  ground = new Ground(10,690,1600,10)
  

  leftGround = new Ground(500,665,20,50)

rightGround = new Ground(700,665,20,50)

  ball = Bodies.circle(200,200,15)
  World.add(world,ball)

if(keyIsDown(UP_ARROW)){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.1,y:0.00})
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.00,y:0.1})
}
  
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ground.show()
  leftGround.show()
  rightGround.show()
  ellipse(ball.position.x,ball.position.y,15)
}

  

