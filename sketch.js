var bg,bgImg;
var player, shooterImg, shooter_shooting;


function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("assets/bg.jpeg")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
bg=createSprite(displayWidth/2-20,displayHeight/2-40,60,60);
bg.addImage(bgImg);
  

//creating the player sprite
player=createSprite(displayWidth-1200,displayHeight-300,60,60);
player.addImage(shooterImg);
player.scale=0.3;
}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")){
player.y=player.y-20;  
}

if(keyDown("DOWN_ARROW")){
  player.y=player.y+20;  
  }
//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
  player.addImage(shooter_shooting);
}
//player goes back to original standing image once we stop pressing the space bar
if(keyWentUp("space")){
  player.addImage(shooterImg);
}

drawSprites();

}
