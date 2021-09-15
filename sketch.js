var garden,rabbit,apple,orangeL,redL, greenL;
var gardenImg,rabbitImg,orangeImg,redImg,greenImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
  greenImg = loadImage("leaf.png");
}


function setup(){
  
  createCanvas(400,400);
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


//creating boy running
rabbit = createSprite(160,340,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  
  // boy moving on Xaxis with mouse'
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  
   drawSprites();
   
  


 var select_sprites = Math.round(random(1,5));



   if (frameCount % 80 === 0) {
     if (select_sprites === 1) {
       createApples();
     } else if (select_sprites === 2) {
      createRed();
     } else if (select_sprites === 3){
       createOrange();
     }else if (select_sprites === 4){
       createGreen();
     }
   }



}

function createApples() {
apple = createSprite(random(50, 350),40, 10, 10);
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocityY = 3;
apple.lifetime = 150;
  
}

function createRed() {
  redL = createSprite(random(50, 350),40, 10, 10);
  redL.addImage(redImg);
  redL.scale=0.06;
    redL.velocityY = 3;
    redL.lifetime = 150;
  }


function createOrange() {
orangeL = createSprite(random(50, 350),40, 10, 10);
orangeL.addImage(orangeImg);
orangeL.scale=0.08;
orangeL.velocityY = 3;
orangeL.lifetime = 150;
}


function createGreen() {
greenL = createSprite(random(50, 350),40, 10, 10);
greenL.addImage(greenImg);
greenL.scale=0.08;
  greenL.velocityY = 3;
  greenL.lifetime = 150;
}