
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var balls=[];
var rf;
var rps=[];

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	rf= new Roof(width/2,100,300,50);

	for(var i=0;i<5;i++){
	 balls[i]=new Bob(320+i*40,500,40);
	}
	var dia=41;
	for(var j=0;j<5;j++){
		//console.log(dia);
		rps[j]=new Rope(balls[j].body,rf.body,-dia*2,0);
		dia-=21;
	}
}

function keyPressed(){
	console.log("pressed");
	if(keyCode===UP_ARROW){
	   Body.applyForce(balls[4].body,balls[4].body.position,{x:0.05,y:-0.05});
	}
}

function draw() {
  //rectMode(CENTER);
  background(150);
  Engine.update(engine);
  rf.display(); 
  
  for(var a of rps){
	a.display();
  } 
  for(var b of balls){
	  b.display();
  }	
}



