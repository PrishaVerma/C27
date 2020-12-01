
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

 	var bobDiameter=60;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	

//Create the Bodies Here.
	roofObject=new Roof(400,150,310,20);
	bobObject1=new Bob(350,430,30);
	bobObject2=new Bob(300,430,30);
	bobObject3=new Bob(400,430,30);
	bobObject4=new Bob(450,430,30);
	bobObject5=new Bob(500,430,30);
	

//ropes for all bobObjects
	rope1= new Rope(bobObject1.body,roofObject.body,-bobDiameter,0);
	rope2= new Rope(bobObject2.body,roofObject.body,-bobDiameter*2,0);
	rope3= new Rope(bobObject3.body,roofObject.body,0,0);
	rope4= new Rope(bobObject4.body,roofObject.body,bobDiameter,0);
	rope5= new Rope(bobObject5.body,roofObject.body,bobDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(247,82,132);
//roof of the newtons cradle
	roofObject.display();
	  
//bobObjects
  	bobObject3.display();
 	bobObject1.display();
  	bobObject2.display();
  	bobObject4.display();
	bobObject5.display();

//rope constraints 
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bobObject2.body,bobObject2.position,{x:-150,y:-45});
	}
	
}



