var bananaImage, obstacleImage, obstacleGroup,foodGroup, background, score
  
function preload(){
  backImage = loadImage("jungle.jpg")
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  bananaImage = loadImage("banana.png");
  obstacle_img = loadImage("stone.png")
  
 
}

function setup() {
  createCanvas(400, 400);
  
  back = createSprite(200,200,400,400);
  back.addImage("background",backImage);
  back.x = back.width /2;
  back.velocityX = -4;
  
   player = createSprite(60,250,20,20);
  player.addAnimation("running",player_running );
  player.scale = 0.1;
  
  invisibleGround = createSprite(200,400,400,10);
  invisibleGround.visible = false;
  
  bananaGroup = createGroup();
obstacleGroup = createGroup();
  
  score = 0; 
  
}
function draw() {
  background(220);
  
  
  if (back.x < 0){
      back.x = back.width/2;
    }
  if(keyDown("space") && player.y >= 259){
       player.velocityY = -12 ;
    }
    player.velocityY = player.velocityY + 0.8;
    player.collide(invisibleGround);
  
  
  if(bananaGroup .isTouching(player)){
     score=score+2
     bananaGroup.destroyEach();
  }
  
  if(obstacleGroup.isTouching(player)){
    player.scale = 0.1;
  }
  
  switch(score){
      case 10: player.scale = 0.12;
      break;
      case 20: player.scale = 0.14;
      break;
      case 30: player.scale = 0.16;
      break;
      case 40: player.scale = 0.18;
      break;
 }
  
    food();
  obstacles();
  
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 20,50);
  
 }

 function food(){
  if(World.frameCount % 80 === 0) {
    var banana = createSprite(200,200,20,20);
    banana.scale = 0.05;
    banana.y = random(150,350);
    banana.addImage(bananaImage);
    banana.velocityX = -3;
    banana.lifetime = 67;
    bananaGroup.add(banana);
 }
}

  function obstacles(){
     if(World.frameCount % 100 === 0) {
    var rock = createSprite(300,360,20,20);
    rock.scale = 0.1;
    rock.velocityX = -3;
    rock.addImage(obstacle_img);
    rock.lifetime = 90;
    obstacleGroup.add(rock);
  }
}
