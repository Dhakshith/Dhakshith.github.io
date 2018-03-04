var Font;

function preload() {
	Font = loadFont("Meteora.ttf");
}

function setup() {
	var Canvas = createCanvas(windowWidth, windowHeight);

	Canvas.position(0, 0);
	background(51);

	textSize(200);
	textFont(Font);

	fill(255);
	noStroke();

	text("TRAINBOW", width / 2 - 500, height / 2 + 50);
	var Points = Font.textToPoints("TRAINBOW", width / 2 - 500, height / 2 + 50);

	for (var i = 0; i < Points.length; i++) {
		var Point = Points[i];

		stroke(0, 255, 0);
		strokeWeight(10);
		point(Point.x, Point.y);
	}
}