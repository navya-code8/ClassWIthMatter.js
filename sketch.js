const world = Matter.World;
const  engine = Matter.Engine;
const body = Matter.Bodies;

var abWorld, abEngine, abBody;

var ground;

var box1, box2, box3;


function setup() {
  createCanvas(800,400);

  abEngine = engine.create();
  abWorld = abEngine.world;

  box1 = new Boxes(100,200,100,60);
  box2 = new Boxes(400, 100, 100,60);
  box3 = new Boxes(700,200,100,60);

  ground = new Ground(400,400, 825, 15);
}

function draw() {
  background("black");  

  engine.update(abEngine);
  box1.color = "yellow";
  box2.color = "red";
  box1.display();
  box2.display();
  box3.display();
  
  ground.display();

  drawSprites();
}