var A  = 300;
var N;
var NA;

function setup() {
	createCanvas(windowWidth - 15, windowHeight - 15);
}

function sign(value) {
	if (value > 0) {
		return 1;
	} else if (value  <  0) {
		return 0 - 1;
	} else if (value === 0) {
		return 0;
	}
}

function draw() {
	background(0);
	translate(width / 2, height / 2);
	stroke(255);
	noFill();
	angleMode(DEGREES);

	beginShape();

	for (let Angle = 0; Angle < 360; Angle += 0.1) {
		var Mapped = map(65, 50, 100, 0.25, 0.5);

		if (mouseX < width / 2) {
			N = map(mouseX, 0, width / 2, Mapped, 9.5);
		} else {
			N = map(mouseX, width / 2, width, 9.5, Mapped);
		}

		NA = 2 / N;

		var   X   = pow(abs(cos(Angle)), NA) * A * sign(cos(Angle));
		var   Y   = pow(abs(sin(Angle)), NA) * A * sign(sin(Angle));

		vertex(X, Y);
	}

	endShape(CLOSE);
}
