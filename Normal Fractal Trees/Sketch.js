let TreeSize = 250;

function setup() {
	createCanvas(windowWidth - 15, windowHeight - 15);
	stroke(255);
}

function draw() {
	background(color(0));

	translate(width / 2, height);
	Branch(TreeSize);
}