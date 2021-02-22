
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var ground;
var stone1;
var rubber;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone1 = new Stone(400,300,100,100);
	stone2 = new Stone(600,600,100,30);

hammer= new Hammer(100,100);

ground = new Ground(400,height,800,20);

var ball_options ={
	'restitution':0.8,
        'friction':1.4,
        'density':1.0
	
}

ball = Bodies.circle(200,100,30, ball_options);
World.add(world,ball);

var ball_optionse ={
	'restitution':0.8,
        'friction':1.4,
        'density':1.0
	
}

ball1 = Bodies.circle(700,200,10, ball_optionse);
World.add(world,ball1);

ball2 = Bodies.circle(710,200,10, ball_optionse);
World.add(world,ball2);

ball3 = Bodies.circle(760,200,10, ball_optionse);
World.add(world,ball3);

ball4 = Bodies.circle(740,200,10, ball_optionse);
World.add(world,ball4);

ball5 = Bodies.circle(790,200,10, ball_optionse);
World.add(world,ball5);


Engine.run(engine);
}

	
  



function draw() {
  rectMode(CENTER);
  background(0);
  hammer.display();
  ground.display();
  stone1.display();
  stone2.display();
 
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 30, 30);

  ellipseMode(RADIUS);
  ellipse(ball1.position.x, ball1.position.y, 10,10);

  ellipseMode(RADIUS);
  ellipse(ball2.position.x, ball1.position.y, 10,10);

  ellipseMode(RADIUS);
  ellipse(ball3.position.x, ball1.position.y, 10,10);

  ellipseMode(RADIUS);
  ellipse(ball4.position.x, ball1.position.y, 10,10);

  ellipseMode(RADIUS);
  ellipse(ball5.position.x, ball1.position.y, 10,10);
  drawSprites();
 
}



