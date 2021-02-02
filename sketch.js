//eli object
let eli = {
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
let maxDiameter; 
let theta = 0; 

function setup(){
    createCanvas(windowWidth, windowHeight);
    background(70, 103, 80);
    maxDiameter = windowWidth; 
    fill(random(0,255), random(0,255), random(0,255));
    updateColors();
}

function updateColors(){
    eli.color1 = random(0,255);
    eli.color2 = random(0,255);
    eli.color3 = random(0,255);
    eli.color4 = random(0,255);
    eli.color5 = random(0,255);
    eli.color6 = random(0,255);
}

function draw(){

    //strokeWeight(2);
    //background("#ffffff01");

    //the height and the width is decided by mouse input
    eli.width = map(mouseX, 0, windowWidth, -20, 20);
    eli.height = map(mouseY, 0, windowHeight, -100, 100);


    //The following conditionals check for left right walls
    if(eli.x > windowWidth){
        updateColors();
        eli.speed = eli.speed * -1;

    }
    else if (eli.x < 0){
        updateColors();
        eli.speed = eli.speed * -1;
    }

    //The following conditionals check for top bottom walls
    if(eli.y > windowHeight){
        updateColors();
        eli.speedy = eli.speedy * -1;
    }
    else if (eli.y < 0 ){
        updateColors();
        eli.speedy = eli.speedy * -1;
    }
    
    //update x and y location
    eli.x = eli.x + eli.speed;
    eli.y = eli.y + eli.speedy;

  

    //let diam = 100 + sin(theta) * maxDiameter ;
    //draws eli
    if(x % 2 == 0){
        fill(eli.color1,eli.color2,eli.color3, 5);
        let diam = 100 + sin(theta) * windowWidth ;

        // draw the circle 
        ellipse(windowWidth/2,windowHeight/2, diam, diam); 
    
        // make theta keep getting bigger
        // you can play with this number to change the speed
        theta += .01; 

        fill(eli.color1,eli.color2,eli.color3);
    }
    else{
        fill(eli.color4,eli.color5,eli.color6, 5);
        let diam = 100 + sin(theta) * windowHeight ;

        // draw the circle 
        ellipse(windowWidth/2,windowHeight/2, diam, diam); 
    
        // make theta keep getting bigger
        // you can play with this number to change the speed
        theta += .01; 

        fill(eli.color4,eli.color5,eli.color6);
    }

    ellipse(eli.x, eli.y, eli.width, eli.height);
    x++;




    
}

function mouseClicked() {
    fill(70, 103, 80, 10)
    rect(0, 0, windowWidth, windowHeight);

}
