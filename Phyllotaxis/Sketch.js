let Size, Canv, Num = 0, Cir = 6, s = Math.sqrt, Radius = Cir;

function setup() {
	Size = windowWidth < windowHeight ? windowWidth - 15 : windowHeight - 15;
	Canv = createCanvas(Size, Size);

	colorMode(HSB);
	angleMode(DEGREES);

	background(2, 0, 3);

	Canv.position(windowWidth / 2 - Size / 2, 7)
}

function draw() {
	let Ang = Num * 137.3;
	let Rad = Cir * s(Num);

	let X = Size / 2 + Rad * cos(Ang);
	let Y = Size / 2 + Rad * sin(Ang);

	fill((Ang - Rad) % 360, 255, 255);
	ellipse(X, Y, Radius, Radius);

	if (Num < 3300) Num++; else {
		console.log("No Space!");
		noLoop();
	}
}