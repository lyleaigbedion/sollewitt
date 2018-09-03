//https://massmoca.org/event/walldrawing1261/
//Scribbles Yale
function setup() {
	createCanvas(windowWidth, windowHeight);
	
	background(5);
	strokeWeight(25);
	noFill();

var i = 0
	//while loop creates circles
	while(i<100) {
	stroke(255)
	ellipse(windowWidth/2,windowHeight/2,i*200,i*200);
	i++;
	}
}

function draw() {
  
}