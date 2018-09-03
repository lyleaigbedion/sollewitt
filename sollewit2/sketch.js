//https://massmoca.org/event/walldrawing583hf/
// WALL DRAWING 583H&F
function setup() {
 createCanvas(windowWidth, windowHeight);
 background(255);
 
 
 for(i=0; i< 255; i++){
 rectMode(CENTER);
 noFill();
 stroke(0,0,120);
 strokeWeight(1);
 rect(windowWidth/2, windowHeight/2, 800+i,800+i);
 }
for(i=0; i< 750; i++){
 rectMode(CENTER);
 noFill();
 stroke(0,0,0);
 strokeWeight(1);
 rect(windowWidth/2, windowHeight/2, i,i);
 }
}
function draw() {
  
}