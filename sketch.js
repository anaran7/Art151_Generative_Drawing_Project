/*
Pulsing Shapes

I am working with tempo of the expanding and contrasting of the circles with two main circles
in the middle having the same tempo with one just being bigger than the other one.
Furthermore, when you add more shapes they will be smaller than the two main circles that speed up in tempo the more you add
and with it you can create different shapes and geometry.

Controls
--Press 1(circle),2(long ellipse),3(combo of the 2) to add shapes at the current position of the mouse
--Press 0 to stop the movement of the current added shapes having the blend into the background resseting the tempo when you add more cicles.

*/


//eli object
let eli = {
    // Used to change the color of the shapes
    x: 0,
    y: 0,
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
let theta1 = 0;
let theta2 = 0;
let theta3 = 0;
let ellis = [];

function setup(){
    alert("PULSING SHAPES:\n I am working with tempo of the expanding and contrasting of the circles with two main circles in the middle having the same tempo with one just being bigger than the other one. Furthermore, when you add more shapes they will be smaller than the two main circles that speed up in tempo the more you add and with it you can create different shapes and geometry.\n CONTROLS\n --Press 1(circle), 2(long ellipse), 3(combo of the 2) to add shapes at the current position of your mouse\n --Press 0 to stop the movement of the current added shapes having the blend into the background reseting the tempo when you add more circles.");
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
 


    //The following conditionals check for left right walls -- This updates color
    if(eli.x > windowWidth){
        updateColors();
        eli.speed = eli.speed * -1;

    }
    else if (eli.x < 0){
        updateColors();
        eli.speed = eli.speed * -1;
    }

    //The following conditionals check for top bottom walls -- This updates color
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

  

    //draws the two main circles
    if(x % 2 == 0){
        fill(eli.color1,eli.color2,eli.color3, 5);
        let diam = 100 + sin(theta) * windowWidth+300 ;

        // draw the circle 
        ellipse(windowWidth/2,windowHeight/2, diam, diam); 
        theta += .01; 

        fill(eli.color1,eli.color2,eli.color3);
    }
    else{
        fill(eli.color4,eli.color5,eli.color6, 5);
        let diam = 100 + sin(theta) * windowHeight ;

        // draw the circle 
        ellipse(windowWidth/2,windowHeight/2, diam, diam); 
        theta += .01; 

        fill(eli.color4,eli.color5,eli.color6);
    }

    x++;

    //displays the shapes you adedd
    for (let i = 0; i < ellis.length; i++) {
        ellis[i].display();
    }

    
}

//checks for user input to add more shapes or fade them in into the background
function keyTyped() {
    if (key === '0') {
        //remove objects from list
        while(ellis.length != 0){
            ellis.pop();
        }
    } else if (key === '1') {
        ellis.push(new Elli(mouseX, mouseY));
    } else if (key === '2') {
        ellis.push(new Elli1(mouseX, mouseY));
    } else if (key === '3') {
        ellis.push(new Elli2(mouseX, mouseY));
    }
  }


//class to create the pulsing circle
class Elli {
  constructor(xv, yv) {
    this.x = xv;
    this.y = yv;
   
  }


  display() {
    //draws circle that pulses
    fill(eli.color1,eli.color5,eli.color3, 5);
    let diam = 100 + sin(theta1) * 500 ; 
    ellipse(this.x,this.y, diam, diam); 
    theta1 += .01; 
  }
}


//class to create the pulsing long ellipse
class Elli1 {
    constructor(xv, yv) {
        this.x = xv;
        this.y = yv;     
    }
  
  
    display() {
      //draws circle that pulses
      fill(eli.color1,eli.color5,eli.color3, 5);
      let diam = 100 + sin(theta1) * 500 ;
      let diam1 = 100 + sin(0) * 200 ; 
      ellipse(this.x,this.y, diam, diam1); 
      theta1 += .01; 
    }
}

//class to create the pulsing combo of ellipse and circle
class Elli2 {
    constructor(xv, yv) {
      this.x = xv;
      this.y = yv;
     
    }
  
  
    display() {
      //draws circle that pulses
      fill(eli.color1,eli.color5,eli.color3, 5);
      let diam = 100 + sin(theta1) * 500 ;
      let diam1 = 100 + sin(theta2) * 250 ; 
      ellipse(this.x,this.y, diam, diam1); 
      theta1 += .01; 
      theta2 += .05
    }
}
