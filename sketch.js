
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	,paperObject
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paperObject=new paper(500,50,80,80)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
paperObject.display();
  groundObject.display();
  dustbinObj.display();

}
function keypressed (){
	if(keyCode === UP_ARROW){
		Matter.Body.applyforce(paperObject.Body,paperObject.position,{x:35,y:-140})
	}
}
