//rectangle object
let rectangle = {
    x: 0,
    y: 0,
    width: 10, 
    height: 50,
    speed: 6,
    speedy: 6,
    color1: 0,
    color2: 0,
    color3: 0,
    color4: 0,
    color5: 0,
    color6: 0
};

let x = 0;

function setup(){
    createCanvas(windowWidth, windowHeight);
    background(70, 103, 80);

    fill(random(0,255), random(0,255), random(0,255));
    updateColors();
}

function updateColors(){
    rectangle.color1 = random(0,255);
    rectangle.color2 = random(0,255);
    rectangle.color3 = random(0,255);
    rectangle.color4 = random(0,255);
    rectangle.color5 = random(0,255);
    rectangle.color6 = random(0,255);
}

function draw(){

    strokeWeight(2);
    //background("#ffffff01");

    //the height and the width is decided by mouse input
    rectangle.width = map(mouseX, 0, windowWidth, -20, 20);
    rectangle.height = map(mouseY, 0, windowHeight, -100, 100);


    //The following conditionals check for left right walls
    if(rectangle.x > windowWidth){
        updateColors();
        
        rectangle.speed = rectangle.speed * -1;

    }
    else if (rectangle.x < 0){
        updateColors();
        rectangle.speed = rectangle.speed * -1;
    }

    //The following conditionals check for top bottom walls
    if(rectangle.y > windowHeight){
        updateColors();
        rectangle.speedy = rectangle.speedy * -1;
    }
    else if (rectangle.y < 0 ){
        updateColors();
        rectangle.speedy = rectangle.speedy * -1;
    }
    
    //update x and y location
    rectangle.x = rectangle.x + rectangle.speed;
    rectangle.y = rectangle.y + rectangle.speedy;

    

    //draws rectangle
    if(x % 2 == 0){
        fill(rectangle.color1,rectangle.color2,rectangle.color3);
    }
    else{
        fill(rectangle.color3,rectangle.color4,rectangle.color5);
    }
    
    ellipse(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    x++;

    
}

function mouseClicked() {
    fill(70, 103, 80, 10)
    rect(0, 0, windowWidth, windowHeight);
}
