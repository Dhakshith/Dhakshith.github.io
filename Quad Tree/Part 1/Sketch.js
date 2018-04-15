let QTree;

function setup() {
	createCanvas(windowWidth - 14, windowHeight - 14);

	QTree = new Quadtree(new Rectangle(width / 2, height / 2, width / 2, height / 2), 4);

	background(0);
	stroke(255);
	noFill();
	rectMode(CENTER);
}

function draw() {
	background(0);

	if (mouseIsPressed) QTree.insert(new Point(mouseX, mouseY));

	QTree.show();
}