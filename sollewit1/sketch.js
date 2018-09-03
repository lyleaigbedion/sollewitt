//https://massmoca.org/event/walldrawing1260/
//1260: Square without a square
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	stroke(0);
	noFill();
	rectMode(CENTER);
	strokeWeight(250);
	
	rect(windowWidth/2, windowHeight/2, 1100,1100, 30);
	
	
			for(var i =0; i < 255; i++){
				stroke(i);
				strokeWeight(1);
				noFill();
				rect(windowWidth/2, windowHeight/2,950+i ,950+i,50);
			}
	
	

}

function draw() {
	
	
}