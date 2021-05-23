
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(900, 560);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1 = new Box(690,500,15,90);
	ground = new Ground(600,height,1200,20);
    ball = new Ball(100,100,10);
	Engine.run(engine);
    console.log(box1);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ball.display();
  box1.display();
  ground.display();
  
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(ball.body,ball.body.position,{x:15,y:-15});
	 }
   }