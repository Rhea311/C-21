var fixedRect, movingRect;
var car, wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car = createSprite(300,200,15,15)
  car.shapeColor = "yellow";
  car.velocityX = 4;
  wall = createSprite(800,200,10,100);
  wall.shapeColor = "pink";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 

  bounceOff(car,wall);

  collide(car,wall);
  
  drawSprites();
}

