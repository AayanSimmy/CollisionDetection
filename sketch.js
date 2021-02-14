var car, wall,thickness,carGroup;

function setup() {
  createCanvas(1200,800);
  thickness=Math.round(random(22,83))
  wall = createSprite(1200, 200, thickness, 1200);
  wall.shapeColor = "white";
  wall.debug = true;
  carGroup=new Group
}

function draw() {
  if(frameCount%100===0){
    car = createSprite(400,200,50,50);
  car.shapeColor = "white";
  car.debug = true;
  car.velocityY=0
  car.VelocityX=4
  carGroup.add(car)
  }
  var speed=Math.round(random(223,321))
  var mass=Math.round(random(30,52))
  background(0,0,0);  
  

  if (isTouching(wall,car)) {
  var damage=0.5*speed*mass/thickness*thickness*thickness
  }
  if(damage>3.68) {
    wall.shapeColor = "red";
  }

  if(damage<3.68) {
    wall.shapeColor = "green"
  }
  drawSprites();
}

