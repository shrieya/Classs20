var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 300, 50, 70);
  movingRect = createSprite(400,100,70,50);
  //movingRect.velocityY = 2;
  //fixedRect.velocityY = -3;
}

function draw() {
  background(255,255,255);  

 movingRect.x = mouseX;
 movingRect.y = mouseY;

 
 if(isTouching(movingRect, fixedRect)) {
   movingRect.shapeColor = "blue";
   fixedRect.shapeColor = "blue";
 } else {
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
 }

 edges = createEdgeSprites();

 movingRect.bounceOff(edges);
 fixedRect.bounceOff(edges);

 //bounceOff(movingRect, fixedRect);

  drawSprites();
}


