var platform1,demon,demon2,platform2,bouncer,p1,s1;
//var stones=[];
//var score = 0;
var score = 0;
var life = 3;
var bullets = 15;


var gameState = "wait"

var lose, winning, explosionSound;
var sprite1,sprite2,sprite3;

function preload(){

  back=loadImage("background copy.jpg")
 //pImg=loadImage("images/boy2.png")


  shooterImg = loadImage("images/shooter_2.png")
  shooter_shooting = loadImage("images/shooter_3.png")

  monsterImg = loadImage("images/wolf copy.png")

  loseImg = loadImage("images/lose.png")
  winImg = loadImage("images/you win.jpg")

  bulImg  =  loadImage("images/bullet.png")
  lose = loadSound("images/lose.mp3")
  winning = loadSound("images/youwin.wav")
  explosionSound = loadSound("images/explosion.mp3")
  loseSou =loadSound("images/youlose.wav")
 
}


function setup() {

  
  createCanvas(windowWidth,windowHeight);

  
 bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
  bg.addImage(back)
  bg.scale = 3.5
  


  player = createSprite(displayWidth-1150, displayHeight-100, 50, 50);
  player.addImage(shooterImg)
   player.scale = 0.5
   player.debug = false
   player.setCollider("rectangle",0,0,300,470)


   //creating sprites to depict lives remaining
   

    
    bulletGroup = new Group()
    monsterGroup = new Group()

    sprite1 = createSprite(windowWidth-280,70,70,20)
    sprite1.shapeColor="lightgreen"
    sprite2 = createSprite(windowWidth-200,70,70,20)
    sprite2.shapeColor="lightgreen"
    sprite3 = createSprite(windowWidth-120,70,70,20)
    sprite3.shapeColor="lightgreen"

    title=createElement("h1")
    title.position(500,60)
    title.html("KILL YOUR INNER MONSTERS")

    button=createButton('lets play')
    button.position(500,200)

}

function draw() {
  background(0); 

  button.mousePressed(()=>{
    gameState="play"
    button.hide()
  })

if(gameState === "play"){
  if(life===2){
    sprite3.shapeColor= "red"
  }

  if(life===1){
    sprite2.shapeColor="red"
  }
 
  
  if(life===0){
    gameState = "lost"
   
    loseSou.play()
    sprite1.shapeColor = "red"
    
  }


  
  if(score==100){
    gameState = "won"
    winning.play();
   
  }

  
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}



if(keyWentDown("space")){
  bullet = createSprite(displayWidth-1150,player.y-30,20,10)
  bullet.addImage(bulImg)
  bullet.scale = 0.2
  bullet.velocityX = 100
  
  bulletGroup.add(bullet)
  player.depth = bullet.depth
  player.depth = player.depth+2
  player.addImage(shooter_shooting)
  bullets = bullets-1
  lose.play();
}


else if(keyWentUp("space")){
  player.addImage(shooterImg)
}


if(bullets==0){
  gameState = "bullet"
  lose.play();
  
    
}


if(monsterGroup.isTouching(bulletGroup)){
  for(var i=0;i<monsterGroup.length;i++){     
      
   if(monsterGroup[i].isTouching(bulletGroup)){
        monsterGroup[i].destroy()
        bulletGroup.destroyEach()
        explosionSound.play();
        
        score = score+10
        } 
  
  }
}


if(monsterGroup.isTouching(player)){
 
  explosionSound.play();
 

 for(var i=0;i<monsterGroup.length;i++){     
      
  if(monsterGroup[i].isTouching(player)){
       monsterGroup[i].destroy()
      
      life=life-1
       } 
 
 }
}


enemy();
}




drawSprites();
if(gameState==="bullet"){
  textSize(100)
  fill ("grey")
  text("you have no bullets left",200,500)
  monsterGroup.destroyEach()
  player.destroy()

}
if(gameState==="lost"){
  textSize(100)
  textFont("algerian")
  fill("red")
  text("YOU LOSE",500,300)
  monsterGroup.destroyEach()
  player.destroy()
 
}

if(gameState==="won"){
  textSize(100)
  textFont("algerian")
  fill("yellow")
  text("YOU win",500,300)
  monsterGroup.destroyEach()
  player.destroy()

}
textSize(20)
textFont("algerian")
fill("white")
text("Bullets = " + bullets,displayWidth-210,displayHeight/2-250)
text("Score = " + score,displayWidth-200,displayHeight/2-220)
text("Lives = " + life,displayWidth-200,displayHeight/2-280)

}


//creating function to spawn monsters
function enemy(){
  if(frameCount%100===0){

    //giving random x and y positions for monster to appear
    monster = createSprite(random(500,windowWidth),random(400,600),40,40)

    monster.addImage(monsterImg)

    monster.velocityX = -3
    monster.debug= false
    monster.setCollider("rectangle",0,0,140,140)
   
    monster.lifetime = 400
    monsterGroup.add(monster)
  }

}
