let X = 0;
let Y = 0;

let R;

function setup() {
	R = random(20, 40);

	let C = createCanvas(floor((windowWidth - 14) / R) * R, floor((windowHeight - 14) / R) * R);

	C.position(windowWidth / 2 - width / 2, windowHeight / 2 - height / 2);

	background(color(0));
}

function draw() {
	stroke(255);

	if (random(0.5) < 0.25) {
		line(X, Y, X + R, Y + R);
	} else {
		line(X, Y + R, X + R, Y);
	}

	if (X === width - R && Y === height - R) {
		noLoop();
	}

	X += R;

	if (X >= width) {
		X  = 0;
		Y += R;
	}
}
