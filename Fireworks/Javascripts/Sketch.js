var Fireworks = [];
var Gravity;
var Blast;

function preload() {
	Blast = loadSound("Blast.mp3");
	Blast.setVolume(0.1);
}

function setup() {
	createCanvas(windowWidth - 15, windowHeight - 15);

	Gravity = createVector(0, 0.2);

	stroke(255);
	strokeWeight(5);

	background(0);
}

function draw() {
	colorMode(RGB);
	background(0, 255 / 4);

	if (frameCount % 10 == 0) {
		Fireworks.push(new Firework());
	}

	for (var i = Fireworks.length - 1; i >= 0; i--) {
		Fireworks[i].update();
		Fireworks[i].show();

		if (Fireworks[i].done()) {
			Fireworks.splice(i, 1);
		}
	}
}