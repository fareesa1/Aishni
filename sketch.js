var player, ground, rewards, obstacles;

function preload(){
  obstacleImage = loadImage("obs1.png")
}

function setup() {
  createCanvas(800,400);
  player = createSprite(150, 350, 50, 50);
  player.shapeColor = "green"
  ground = createSprite(400,400,800,50)
  ground.shapeColor = "black"
  obs = createSprite(600, 350, 50, 50);
  obs.velocityX = -5
  obs.addImage(obstacleImage)
  obs.scale = 0.04
}

function draw() {
  background("white"); 
  if(keyDown("UP_ARROW")){
    player.y = player.y-17
  } 
  player.velocityY += 0.4
  player.collide(ground)
  drawSprites();
}