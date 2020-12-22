var survivalTime = 0;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var ground ,groundImage ,invisibleGround;
var FoodGroup, obstacleGroup;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
  
}



function setup() {
  background("white");
 
  
    ground = createSprite(400,350,900,10);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  console.log(ground.x);

  
  invisibleGround = createSprite(400,360,900,5);
  invisibleGround.visible = false;
  
 
   monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  obstaclesGroup = new Group();
  bananasGroup = new Group();
  
   var survialTime = 0;
stroke("white");
textSize(20);
fill("white");
text("score:"+score,500,50);

stroke("black");
textSize(20);
fill("black");
survivalTime = Math.ceil(frameCount/frameRate);
text("Survival Time:"+survivalTime,100,50);
  
}


function draw() {
  background("white");
  
    if(keyDown("space")&& monkey.y >= 100) {
    monkey.velocityY = -10;
  }
  
monkey.velocityY = monkey.velocityY + 0.5;
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
   monkey.collide(invisibleGround);
  
  obstacles();
  
  banana();

  drawSprites();

}
function obstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(600,350,10,40);
   obstacle.velocityX = -3 ;
   obstacle.addImage(obstacleImage);

    obstacle.x = Math.round(random(120,200));
       obstacle.scale = 0.1;
    obstacle.lifetime = 300;
   
 
    obstaclesGroup.add(obstacle);

    }
}

function banana() {
  
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;

    banana.lifetime = 200;
    
 
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    

    bananasGroup.add(banana);
  }
}







