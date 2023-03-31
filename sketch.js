var score=0
var count=0
var health=0
function preload(){
groundImg = loadImage("assets/ground.jpg")
forestImg=loadImage("assets/forest.jpg")
firstMapImg=loadImage("assets/partofmap.jpg")
randomPlaceImg=loadImage("assets/randomplace.jpg")
villageImg=loadImage("assets/villageinmap.jpg")
secondvillageImage=loadImage("assets/secondvil.jpg")
roadImg=loadImage("assets/road.png")
startImg=loadImage("assets/startvillage.jpeg")
playerImg=loadImage("assets/player.png")
enemyImg=loadImage("assets/enemies.png")
bulletImg=loadImage("assets/bullet.png")
dragonImg=loadImage("assets/bossbattle.png")
fireImg=loadImage("assets/fireball.png")
}


function setup(){
createCanvas(1000,500)
ground=createSprite(500,450,2000,400)
ground.addImage(startImg)
player=createSprite(50,50,89,100)
player.shapeColor="red"
player.addImage(playerImg)
player.scale=0.02
bullet=createSprite(player.x, player.y)
    bullet.addImage(bulletImg)
    bullet.visible=false
    zombies=new Group()
    dragon=createSprite(random(200,800),random(100,400))
dragon.addImage(dragonImg)


dragon.scale=0.3
dragon.visible=false

}


function draw(){
background("green")
fill("red")
textSize(20)
text("score:  "+score,50,30)
if(bullet.isTouching(dragon)){
count=count+1

bullet.x=player.x
bullet.y=player.y
}

if(count>=3){
    console.log(count)
    //dragon.destroy()
}
if(count>=1){
    spawnFire()
}


if(keyIsDown(LEFT_ARROW)){
    player.x=player.x-1
}
if(keyIsDown(RIGHT_ARROW)){
    player.x=player.x+1
}
if(keyIsDown(UP_ARROW)){
    player.y=player.y-1
}
if(keyIsDown(DOWN_ARROW)){
    player.y=player.y+1
}
if(keyCode===32){
   
    bullet.x=player.x
    bullet.y=player.y
    bullet.visible=true
    bullet.velocityX=5
    bullet.scale=0.2
}
if(score>=1){
dragon.visible=true
}

spawnEnemies();
if(bullet.isTouching(zombies)){
    zombies.destroyEach()
    bullet.x=player.x
    bullet.y=player.y
    score=score+1
}
drawSprites();

}
function spawnEnemies(){
if(frameCount%250==0){
sprite=createSprite(random(200,800),10,20,20)

sprite.shapeColor="blue"
sprite.velocityY=1
sprite.addImage(enemyImg)
sprite.scale=0.2 
zombies.add(sprite)

}

}
function spawnFire(){
    if(frameCount%70==0&&count>1){
        fireball=createSprite(dragon.x,dragon.y)
        fireball.velocityX=-1
        fireball.addImage(fireImg)
        fireball.scale=0.1
        
    }
}