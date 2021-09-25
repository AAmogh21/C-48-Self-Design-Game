var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie, zombieImg
var zombie2
var wall1, wall2, wall3, wall4
var badBall, badBall2, badBallImg
var badBall3
var zombie3
var zombie4
var restart, restartImg
var score=0;
var MySound;
var WinSound
var Musix

function preload(){
  
  shooterImg = loadImage("assets/Shoot3.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  zombieImg = loadImage("assets/gold.jpg")
 badBallImg = loadImage("assets/ball.png")
  bgImg = loadImage("assets/Cave.jpg")
  MySound = loadSound("assets/lose.wav") 
  WinSound = loadSound("assets/win.wav")
  Music = loadSound("assets/Music.mp3")



}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.06
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)

   
   
wall1 = createSprite(displayWidth-0, displayHeight-600, 20, windowHeight);
wall2 = createSprite(displayWidth-2550, displayHeight-600, 20, windowHeight);
wall3 = createSprite(displayWidth-2550, displayHeight-150, 100000, 20);
wall4 = createSprite(displayWidth-2550, displayHeight-1080, 100000, 20);

zombie = createSprite(displayWidth - 1500, displayHeight - 600, mouseX, mouseY) 

zombie.addImage(zombieImg)
zombie.scale = 0.1
zombie.debug = true
zombie.setVelocity(-30,28)


zombie2 = createSprite(displayWidth - 1500, displayHeight - 600, mouseX, mouseY) 

zombie2.addImage(zombieImg)
zombie2.scale = 0.1
zombie2.debug = true
zombie2.setVelocity(-20,28)
zombie2.hide


zombie3 = createSprite(displayWidth - 1500, displayHeight - 600, mouseX, mouseY) 

zombie3.addImage(zombieImg)
zombie3.scale = 0.1
zombie3.debug = true
zombie3.setVelocity(-40,28)
zombie3.visible = false;


zombie4 = createSprite(displayWidth - 1500, displayHeight - 600, mouseX, mouseY) 
zombie4.addImage(zombieImg)
zombie4.scale = 0.1
zombie4.debug = true
zombie4.setVelocity(-50,38)
zombie4.visible = false;





badBall = createSprite(displayWidth-1000, displayHeight-300, 30, 30);
badBall.addImage(badBallImg)
   badBall.scale = 0.1
badBall.setVelocity(40,20)


badBall2 = createSprite(displayWidth-1000, displayHeight-300, 30, 30);
badBall2.setVelocity(40,20)
badBall2.addImage(badBallImg)
   badBall2.scale = 0.1



   badBall3 = createSprite(displayWidth-1000, displayHeight-300, 30, 30);
badBall3.setVelocity(40,20)
badBall3.addImage(badBallImg)
   badBall3.scale = 0.1


   var score=0;
}



function draw() {
  background(0); 

  zombie.bounceOff(wall1)
  zombie.bounceOff(wall2)
  zombie.bounceOff(wall3)
  zombie.bounceOff(wall4)

  zombie2.bounceOff(wall1)
  zombie2.bounceOff(wall2)
  zombie2.bounceOff(wall3)
  zombie2.bounceOff(wall4)

  zombie3.bounceOff(wall1)
  zombie3.bounceOff(wall2)
  zombie3.bounceOff(wall3)
  zombie3.bounceOff(wall4)

  zombie4.bounceOff(wall1)
  zombie4.bounceOff(wall2)
  zombie4.bounceOff(wall3)
  zombie4.bounceOff(wall4)



  badBall.bounceOff(wall1)
  badBall.bounceOff(wall2)
  badBall.bounceOff(wall3)
  badBall.bounceOff(wall4)


 
 
 
badBall2.bounceOff(wall1)
badBall2.bounceOff(wall2)
badBall2.bounceOff(wall3)
badBall2.bounceOff(wall4)

badBall3.bounceOff(wall1)
badBall3.bounceOff(wall2)
badBall3.bounceOff(wall3)
badBall3.bounceOff(wall4)


  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}

if(keyDown("LEFT_ARROW")||touches.length>0){
  player.x = player.x-30
 }

 if(keyDown("RIGHT_ARROW")||touches.length>0){
  player.x = player.x+30
 }

//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}

if(player.isTouching(zombie)){
WinSound.play()
background("yellow")

badBall.setVelocity(60,60)
 zombie4.visible = true;

zombie3.visible = true;
 zombie.destroy()
 
score = 1000;
 
 
 
}

if(player.isTouching(zombie2)){
  WinSound.play()
background("yellow")

  badBall.setVelocity(60,60)
   zombie2.show
  
  
   zombie2.destroy()
   badBall3.setVelocity(50,30)
  score = 2000
   
   
   
  }

  if(player.isTouching(zombie3)){
    WinSound.play()
  
    background("yellow")
   score = 3000
     zombie3.destroy()
     
     
    
     
     
     
    }

    if(player.isTouching(zombie4)){
      WinSound.play()
    background("yellow")  
     
    score = 4000
     
       zombie4.destroy()
       
      
       
       
       
      }

if(badBall.isTouching(player)){
MySound.play()
background("red");
player.destroy()
textSize(50)
text("Game Over")


}


if(badBall2.isTouching(player)){
  MySound.play()
  background("red");
  player.destroy()
  text("Game Over")
  
  }
  



drawSprites();
textSize(30)
fill("orange")

text("Score/Time Alive: "+ score, 2000,50);

score = score + Math.round(getFrameRate()/60);


}
