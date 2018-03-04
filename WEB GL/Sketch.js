let Angle = 0;
let Graphics;

function setup() {
	createCanvas(windowWidth - 10, windowHeight - 10, WEBGL);

	Graphics = createGraphics(200, 200);
	Graphics.background(255);
}

function draw() {
	background(0);

	ambientLight(100);
	directionalLight(255, 255, 255, 0, 0, 1);

	rotateX(Angle);
	rotateY(Angle * 1.3);
	rotateZ(Angle * 0.6);

	texture(Graphics);
	box(100);

	Angle += 0.01;
}