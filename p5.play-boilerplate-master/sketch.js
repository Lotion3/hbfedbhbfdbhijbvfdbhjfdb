var dino, dinow, edges, ground, grounde, i, grt, r1, cloude, o1e, o2e,bge, o3e, o4e, o5e, o6e, score = 0,rse,
  dce, goe, reee, deathe, cpe, upe, Hs = 0,bg
var PLAY = 0
var END = 1
var gameState = PLAY
var cloudGroup, obsGroup
var re, go

function preload() {
  //dinow = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png")
  //dinow.frameDelay = 2
  //cloude = loadImage("Banana.png")
 // o1e = loadImage("stone.png")
 // goe = loadImage("gameOver.png")
  //bge = loadImage("jungle.jpg")
  //rse = loadImage("restart.png")
}
function setup() {
  createCanvas(400, 400);
  grt = createSprite(300, 380, 600, 10)
  dino = createSprite(200, 150, 3, 3)
 // dino.addAnimation("dino1", dinow)
 // dino.scale = (0.1)
  dino.debug=true
  dino.setCollider("rectangle", 0, 0, 100, 400, 45)
  edges = createEdgeSprites()
  dino.x = 50
  ground = createSprite(300, 390, 600, 10)
  cloudGroup = createGroup();
  obsGroup = createGroup();
  bg=createSprite(500,200,400,400)
 // bg.addImage("ytr",bge)
}

function draw() {
    background("white");
    if (gameState === PLAY) {
    if(bg.x===-100){
     bg.x=500
    }
    bg.velocityX=-2
    ground.velocityX = -(2 + 3 * score / 100)
    if (keyDown("space") && dino.y > 340) {
      dino.velocityY = -12
    }
    spawnClouds();
    if (ground.x < 0) {
      ground.x = ground.width / 2
    }
    spawnobstacle();
    if (dino.isTouching(cloudGroup)) {
      score = score + 1
      dino.scale=0.15
      cloudGroup.destroyEach();
    }
      
    if (dino.isTouching(obsGroup)) {
     // dino.scale=0.1
      bg.velocityX=0
    }
      
      if (dino.isTouching(obsGroup)) {
      gameState = END
      bg.velocityX=0
    }
      
    dino.velocityY = dino.velocityY + 0.4
  } else if (gameState === END) {
    ground.velocityX = 0
    obsGroup.setVelocityXEach(0)
    cloudGroup.setVelocityXEach(0)
    dino.velocityY = 0

    obsGroup.setLifetimeEach(-5)
    cloudGroup.setLifetimeEach(-5)
    if (score > Hs) {
      Hs = score
    }
  }
  text("Score" + score, 320, 20)
  text("High Score " + Hs, 420, 20)
  r1 = Math.round(random(1, 10))
  // console.log(frameCount)
  drawSprites();
  //console.log(dino.y)

  dino.collide(grt)

  grt.visible = true


}

function reset() {
  gameState = PLAY
  cloudGroup.destroyEach();
  obsGroup.destroyEach();
  frameCount = 0
  score = 0
  go.visible = false
  re.visible = false
  obsGroup.setVelocityXEach(-2)
}

function spawnClouds() {
  if (frameCount % 60 === 0) {
    var cloud = createSprite(400, 350, 10, 10)
    cloud.velocityX = -(2 + 3 * score / 100)
    cloud.y = random(200, 300)
   // cloud.addImage("clouder", cloude)
    //dino.depth = cloud.depth + 1
   // cloud.scale = 0.1
   // console.log(cloud.depth)
    cloud.lifetime = 308
    cloudGroup.add(cloud)

  }



}


function spawnobstacle() {
  if (camera.y % 120 === 0) {
    var o1 = createSprite(600, 360, 10, 10)
    o1.velocityX = -(2 + 3 * score / 100)
    o1.lifetime = 350
    o1.scale = 0.1
    obsGroup.add(o1)
    o1.addImage("uyt", o1e)
    o1.scale = 0.1
  }
}