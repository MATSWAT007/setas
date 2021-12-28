const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var bola;
var setaverde;
var setavermelha;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  setaverde=createImg("up.png");
  setavermelha=createImg("right.png");
setaverde.position(20,30);
setavermelha.position(220,30);
setavermelha.size(50,50);
setaverde.size(50,50);
setavermelha.mouseClicked(Forcah);
setaverde.mouseClicked(ForcaV);
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 var bola_options={
restitution:0.92   
}

  bola=Bodies.circle(200,100,20,bola_options);
World.add(world,bola);


  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ellipse(bola.position.x,bola.position.y,20);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  
}

function Forcah(){
  Matter.Body.applyForce(bola,{x:0,y:0},{x:0.05,y:0});
}
function ForcaV(){
  Matter.Body.applyForce(bola,{x:0,y:0},{x:0,y:-0.05});
}




