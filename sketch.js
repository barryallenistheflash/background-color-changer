var canvas = createCanvas(400,400,400,400);

function draw(){
 
  background("green");

  if(keyDown("right")){
   background = background('red');
  }

  if(keyDown("left")){
    background = background("pink");
  }
}


