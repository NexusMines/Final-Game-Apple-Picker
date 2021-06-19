const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree, treeImage
var stone, stoneImage
var ground, boy, boyImage;

function setup() {
	createCanvas(1900, 700);
	engine = Engine.create();
	world = engine.world;

	stone = new Stone(160, 500, 20);

	apple1 = new Apple(1200, 200, 30);
	apple2 = new Apple(1275, 200, 30);
	apple3 = new Apple(1125, 250, 30);
	apple4 = new Apple(1200, 275, 30);
	apple5 = new Apple(1275, 275, 30);
	apple6 = new Apple(1125, 325, 30);
  apple7 = new Apple(1200, 350, 30);
  apple8 = new Apple(1275, 360, 30);
  apple9 = new Apple(1125, 400, 30);
  apple10 = new Apple(1225, 425, 30);

  tree = new Tree(1200, 700);

  ground = new Ground(0, 680, 5000, 40);

	boy = new Boy(75, 500);

	chain = new Chain(stone.body,{x:160, y:500});

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(500);
  background("lightblue")
  fill('black');
  textSize(24);
  text("Press Space for another try.", 400, 200);

  ground.display();
  tree.display();
  boy.display();
  stone.display();
  apple1.display();
  apple2.display();
  apple3.display();
  apple4.display();
  apple5.display();
  apple6.display();
  apple7.display();
  apple8.display();
  apple9.display();
  apple10.display();
  chain.display();

  detectCollision(stone, apple1);
  detectCollision(stone, apple2);
  detectCollision(stone, apple3);
  detectCollision(stone, apple4);
  detectCollision(stone, apple5);
  detectCollision(stone, apple6);
  detectCollision(stone, apple7);
  detectCollision(stone, apple8);
  detectCollision(stone, apple9);
  detectCollision(stone, apple10);

  drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
    chain.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body, {x:160, y:500});
    chain.attach(stone.body);
  }
}

function detectCollision(lstone,lapple){
  stoneBodyPosition = lstone.body.position;
  appleBodyPosition = lapple.body.position;
  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, appleBodyPosition.x, appleBodyPosition.y);
  if(distance <= lapple.r + lstone.r){
    Matter.Body.setStatic(lapple.body, false);
  }
}