const Engine = Matter.Engine; //all the laws of Physics
const World = Matter.World; //applies laws of physics on the bodies in the world
const Bodies = Matter.Bodies; //individual properties

var engine,world;
var box,box2,box3,box4,box5,ground;
var pig,pig2;
var log,log2,log3,log4;
var bird;

function setup() {
  createCanvas(1200,400);

  engine = Engine.create();
  world  = engine.world;

  bird = new Bird(200,300)

  box = new Box(700,320,70,70)
  box2 = new Box(920,320,70,70)
  pig = new Pig(810,350)
  log = new Log(810,260,300,PI/2)

  box3 = new Box(700,240,70,70)
  box4 = new Box(920,240,70,70)
  pig2 = new Pig(810,220)
  log2 = new Log(810,180,300,PI/2)

  box5 = new Box(810,160,70,70)
  log3 = new Log(760,120,150,PI/7)
  log4 = new Log(870,120,150,-PI/7)
  ground=new Ground(600,400,1200,50)


  console.log(ground);

 
  
}

function draw() {
  background(220,255,255);  

  Engine.update(engine);



  box.display();
  box2.display();
  pig.display();
  log.display();

  box3.display();
  box4.display();
  pig2.display();
  log2.display();

  box5.display();
  log3.display();
  log4.display();
  ground.display();

  bird.display();
  

  
}