
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);
}

function draw() {
  if(keyIsDown(RIGHT_ARROW)){
    background("blue");
    box.position.x += 3
  }
  if(keyIsDown(LEFT_ARROW)){
    background("red");
    box.position.x -= 3
  }
    if(keyIsDown(UP_ARROW)){
    background("yellow");
    box.position.y -= 3
   }
  if (keyIsDown(DOWN_ARROW)) {
    background("green");
    box.position.y += 3
  } 
  drawSprites();
}