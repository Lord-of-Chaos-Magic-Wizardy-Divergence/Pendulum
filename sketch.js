const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bob1, chain1, topRect;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    bob1 = new Bob(100,100);
    
    topRect = new StaticRect(600,0);

    chain1 = new Chain(bob1.body,topRect.body);
}

function draw(){
    background(250);
    Engine.update(engine);

    bob1.display();

    chain1.display();

    topRect.display();
}