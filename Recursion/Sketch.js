function setup() {
	createCanvas(windowWidth - 15, windowHeight - 15);
	stroke(255);

	strokeWeight(0.75);
	noFill();
}

function draw() {
	background(2, 0, 3);
	Circle(width / 2, height / 2.5, 325);

	noLoop();
}

let Circle = (X, Y, D) => {
	ellipse(X, Y, D);

	if (D > 2) {
		Circle(X, Y + D * 0.25, D * 0.75);
		Circle(X, Y - D * 0.25, D * 0.25);
	}
};