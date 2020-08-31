const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,550,70,70);
    box2 = new Box(1000,550,70,70);
    box3=new Box(800,480,70,70);
    box4=new Box(1000,480,70,70);
    box5=new Box(900,370,70,70);
    ground = new Ground(600,height,1200,20);
    pig1=new Pig(900,550);
    pig2=new Pig(900,450);
    log1=new Log(900,500,280,0);
    log2=new Log(900,400,280,0);
    log3=new Log(850,350,120,-PI/5);
    log4=new Log(950,350,120,PI/5);
    bird1=new Bird(100,200);
}

function draw(){
    background(0);



    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird1.display();
}