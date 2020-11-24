const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
  createCanvas(800, 400);
  rectMode(CENTER);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  dustbin = new DustBin(730, 392, 100, 10);
  paper = new Paper(100, 300, 10);
  ground = Bodies.rectangle(width / 2, 400, width, 10,
  {
    isStatic: true
  });
  World.add(world, ground);
}

function draw() {
 
    background("black");
    rectMode(CENTER);
    dustbin.display();
    paper.display();


}



function keyPressed(){
  if (keyCode === UP_ARROW) {
 
    Matter.Body.applyForce(paper.body, paper.body.position, { x: 70, y: -70});
  }
 
}