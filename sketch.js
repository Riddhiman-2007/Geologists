const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    
    rubber = new Rubber(600,300,25)
    rubber2 = new Rubber(572,300,25)
    rubber3 = new Rubber(544,300,25) 
    rubber4 = new Rubber(516,300,25)
    rubber5 = new Rubber2(700,30,50)
    stone = new Stone(375,300,220,30,PI)
    stone2 = new Stone(750,300,50,50,PI)
      
}

function draw(){
    background("lightBlue");
    Engine.update(engine);
  
// display here
  
    plane.display();
    hammer.display();
    rubber.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    rubber5.display();
    stone.display();
    stone2.display();
}