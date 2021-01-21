//rectangle object
let rectangle = {
    x: 0,
    y: 0,
    width: 10, 
    height: 50,
    speed: 5,
    speedy: 5
};


function setup(){
    createCanvas(windowWidth, windowHeight);
    background(70, 103, 80);
    fill(random(0,255), random(0,255), random(0,255));
}

function draw(){

    strokeWeight(3);
    //stroke(0,0,0,100);

    //the height and the width is decided by mouse input
    rectangle.width = map(mouseX, 0, windowWidth, -20, 20);
    rectangle.height = map(mouseY, 0, windowHeight, -100, 100);
    //rectangle.speed = map(rectangle.width, -20, 20, -10, 10);
    //rectangle.speedy = map(rectangle.height, -100, 100, 10, 10);

    //The following conditionals check for left right walls
    if(rectangle.x > windowWidth - rectangle.width){
        //strokeWeight(map(mouseX, 0, windowWidth, 1, 5));
        //stroke(random(0,255), random(0,255), random(0,255), random(100,255));
        fill(random(0,255), random(0,255), random(0,255));
        rectangle.speed = rectangle.speed * -1;
    }
    else if (rectangle.x < 0){
        strokeWeight(map(mouseX, 0, windowWidth, 1, 5));
        //stroke(random(0,255), random(0,255), random(0,255), random(100,255));
        fill(random(0,255), random(0,255), random(0,255));
        rectangle.speed = rectangle.speed * -1;
    }

    //The following conditionals check for top bottom walls
    if(rectangle.y > windowHeight - rectangle.height){
        //strokeWeight(map(mouseX, 0, windowWidth, 1, 5));
        //stroke(random(0,255), random(0,255), random(0,255), random(100,255));
        fill(random(0,255), random(0,255), random(0,255));
        rectangle.speedy = rectangle.speedy * -1;
    }
    else if (rectangle.y < 0 ){
        //strokeWeight(map(mouseX, 0, windowWidth, 1, 5));
        //stroke(random(0,255), random(0,255), random(0,255), random(100,255));
        fill(random(0,255), random(0,255), random(0,255));
        rectangle.speedy = rectangle.speedy * -1;
    }
    
    //update x and y location
    rectangle.x = rectangle.x + rectangle.speed;
    rectangle.y = rectangle.y + rectangle.speedy;
    

    //draws rectangle
    rect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
}

function mouseClicked() {
    //fill(random(0,255), random(0,255), random(0,255), 10);
    fill(70, 103, 80, 10)
    rect(0, 0, windowWidth, windowHeight);
  }