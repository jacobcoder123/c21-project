
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var ground,leftside,rightside

function preload()
{
	
}

function setup() {
	createCanvas(1200, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    var ball_options={
      isStatic:false,
	  restitution:0.3,
     friction:0.5,
      density:1.2
	}
ball=Bodies.circle(260,100,20,ball_options)
 World.add(world,ball)
 ground=new Ground (width/2,900,1300,20)
 leftside=new Ground(800,830,20,120)
 rightside=new Ground(1000,830,20,120)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 rectMode(CENTER) 
  ellipse (ball.position.x,ball.position.y,20,20)
  ground.display()
  leftside.display()
  rightside.display()
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}



