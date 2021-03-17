var rect1,rect2,rect3,rect4,rect5,rect6;
function setup() {
  createCanvas(800,400);
  rect1=createSprite(400, 200, 50, 50);
  rect2 = createSprite(400,200,50,50);
  rect3 = createSprite(600,300,50,50);
  rect3.velocityX = -2;
  rect3.shapeColor = "green";
  rect4 = createSprite(200,300,50,50);
  rect4.velocityX = 2;
  rect4.shapeColor = "purple";
  rect5 = createSprite(300,100,50,50);
  rect5.shapeColor = "blue";
  rect5.velocityY = 2;
  rect6 = createSprite(300,400,50,50);
  rect6.shapeColor = "green";
  rect6.velocityY = -2;
}

function draw() {
  background(255,255,255); 
  rect1.x = mouseX;
  rect1.y = mouseY;
  bounceOff(rect3,rect4);
  bounceOff(rect5,rect6);
  var result=isTouching(rect1,rect3); 
  if(result==true){
  rect3.shapeColor = "red";
  rect1.shapeColor = "red";
  }
  else{
    rect3.shapeColor = 'grey';
    rect1.shapeColor = "grey";
  }
  drawSprites();
}
