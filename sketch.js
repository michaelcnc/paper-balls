
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var groundObj, leftside, rightside;
var ball;
var ball_options;

function preload()
{
	
} 

function setup() {
	createCanvas(1500, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundObj = new Ground(width/2, 670, width, 20);
	leftside = new Ground(1100,600,20,120);
	rightside = new Ground(1300,600,20,120);

    var ball_options = {
		restitution: 0.3,
		friction:0,
		density:1.2,
		isStatic:false
	  };
	  
	  ball = Bodies.circle(200, 20, 20, ball_options);
	  World.add(world, ball);
  
	Engine.run(engine);
  }


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display();
  leftside.display();
  rightside.display();
  push();
  fill("white");
  var pos = ball.position;
  circle(pos.x, pos.y, 40);;
  pop();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:100,y:-100});
	}
}


