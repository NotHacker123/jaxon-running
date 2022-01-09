var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var bombImg,coinImage,energyDrinkImg;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  bombImg = loadImage("bomb.png");
  coinImg = loadImage("coin.png");
  energyDrinkImg = loadImage("energyDrink.png");

}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//creating boy running
boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);
  

leftBoundary=createSprite(0,0,100,800);

// leftBoundary.invisible = false;
// leftBoundary.visible = true;
// leftBoundary.invisible = true;
 leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //code to reset the background

  if(path.y > 400 ){
    path.y = height/6;
  }

rand = Math.round(random(30,370));
  

  
if(frameCount % 100 === 0){

gameObjects = createSprite(rand,30,20,20)

gameObjects.scale=0.25;
gameObjects.velocityY=5;

rand2 = Math.round(random(1,3));

switch(rand2){
case 1: gameObjects.addImage(coinImg);
break;
case 2: gameObjects.addImage(bombImg);
break;
case 3: gameObjects.addImage(energyDrinkImg);



}



}



  drawSprites();
}
