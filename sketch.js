
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var bob1,bob2,bob3,bob4,bob5;
var ground;
var chain1,chain2,chain3,chain4,chain5;
var roof;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(350,400,50)
	bob2 = new Bob(400,400,50)
	bob3 = new Bob(450,400,50)
	bob4 = new Bob(500,400,50)
	bob5 = new  Bob(550,450,50)
	roof=new Roof(450,100,300,20)
	chain1 =new Chain()
	chain2 =new Chain()
	chain3 =new Chain()
	chain4 =new Chain()
	chain5 =new Chain()


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();



  drawSprites();
 
}



