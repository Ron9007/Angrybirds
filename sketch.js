const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2,box3, box4, box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird1
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,365,50,50);
    box2 = new Box(1000,365,50,50);
    pig1 = new Pig(900,365,50,50);
    log1 = new Log(900,330,250,PI/2);
    box3 = new Box(800,295,50,50);
    box4 = new Box(1000,295,50,50);
    pig2 = new Pig(900,295,50,50);
    log2 = new Log(900,260,250,PI/2);
    box5 = new Box(900,225,50,50);
    log3 = new Log(830,215,125,PI/3);
    log4 = new Log(970,215,125,-PI/3);
    bird1 = new Bird(110,100,50,50);
    ground = new Ground(600,height,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird1.display();
    ground.display();
}