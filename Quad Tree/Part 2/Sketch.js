let QTree;
let range;

let size = 47;

let Min = 23.50;
let Max = 187.0;

function setup() {
	createCanvas(windowWidth - 14, windowHeight - 14);

	QTree = new Quadtree(new Rectangle(width * 0.5, height * 0.5, width * 0.5, height * 0.5), 5);

	for (let i = 0; i < 300; i++) QTree.insert(new Point(randomGaussian(width * 0.5, width * 0.125), randomGaussian(height * 0.5, height * 0.125)));

	noFill();
	rectMode(CENTER);

	range = new Rectangle(width * 0.5, height * 0.5, size, size);
}

function draw() {
	background(0);
	QTree.show();

	if ((mouseX != 0 && mouseY != 0) || frameCount > 500) {
		range.x = mouseX;
		range.y = mouseY;

		range.w = size;
		range.h = size;

		strokeWeight(1);
		stroke(0, 255, 255);
		rect(range.x, range.y, range.w * 2, range.h * 2);

		let points = QTree.query(range);

		strokeWeight(6);

		for (let p of points) point(p.x, p.y);
	}

	if (keyIsDown(37)) if (size >= Min) size--;
	if (keyIsDown(39)) if (size <= Max) size++;
}