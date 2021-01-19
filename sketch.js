let x = 50;
let y = 5;
let speed = 10;
let speedy = 10;

function setup(){
    createCanvas(windowWidth, windowHeight);
    background(70, 103, 80);
    //fill(255, 0, 0)
    fill(random(0,255), random(0,255), random(0,255));
}

function draw(){

    //strokeWeight(2);
    //stroke(200, 20, 20, 255);

    //The following conditionals check for left right walls
    if(x > windowWidth){
        //fill(255, 0, 0)
        fill(random(0,255), random(0,255), random(0,255));
        speed = speed * -1;
    }
    else if (x < 0){
        fill(255, 0, 255)
        fill(random(0,255), random(0,255), random(0,255));
        speed = speed * -1;
    }

    //The following conditionals check for top bottom walls
    if(y > windowHeight - 55){
        //fill(255, 255, 0)
        fill(random(0,255), random(0,255), random(0,255));
        speedy = speedy * -1;
    }
    else if ( y < 0 ){
        //fill(155, 50, 255)
        fill(random(0,255), random(0,255), random(0,255));
        speedy = speedy * -1;
    }
    rect(x, y, 10, 50);
    
    x = x + speed
    y = y + speedy

}