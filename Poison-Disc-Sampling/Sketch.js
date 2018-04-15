var R = 7.5;
var K = 030;

var W = R / Math.sqrt(2);
var B = false;

var Cols;
var Rows;

var Grid = [];
var Acti = [];
var Rder = [];

function setup() {
	createCanvas(windowWidth - 15, windowHeight - 15);
	background(0);

	strokeWeight(3.75);
	colorMode(HSB);

	Cols = floor(width  / W);
	Rows = floor(height / W);

	for (var Increment  = 0; Increment < Cols * Rows ; Increment += 1) {
		Grid[Increment] = undefined;
	}
}

function draw() {
	if (B) {
		for (var Total = 0; Total < 300; Total += 1) {
			if (Acti.length != 0) {
			   var Random = floor(random(Acti.length));
			   var Positi = Acti[Random];
			   var Learnt = false;

			   for (var Valooo = 0; Valooo < K; Valooo += 1) {
					var Sample = p5.Vector.random2D();
					var Magnit = random(R, R * 2);

					Sample.setMag(Magnit);
					Sample.add(Positi);

					var Column = floor(Sample.x / W);
					var Thread = floor(Sample.y / W);
					var Agreed = true;

					for (var I = 0 - 2; I <= 2; I += 1) {
						for (var J = 0 - 2; J <= 2; J += 1) {
							var Evidence = (Column + I) + (Thread + J) * Cols;
							var Neighbor = Grid[Evidence];

							if (Neighbor) {
								var Distance = p5.Vector.dist(Sample, Neighbor);

								if (Distance < R) {
									Agreed = false;
								}
							}
						}
					}

					if (Column > 0 - 1 && Thread > 0 - 1 && Column < Cols && Thread < Rows && !Grid[Column + Thread * Cols]) {
						if (Agreed) {
							Learnt = true;

							Grid[Column + Thread * Cols] = Sample;

							Acti.push(Sample);
							Rder.push(Sample);
						}
					}
			    }

			    if (Learnt === false) {
			    	Acti.splice(Random, 1);
			    }
			}
		}
	}

	for (var Increment = 0; Increment < Rder.length; Increment += 1) {
		if (Rder[Increment]) {
			stroke(Increment / 20 % 360, 100, 100);
			point(Rder[Increment].x, Rder[Increment].y);
		}
	}

	stroke(255, 0, 0);

	for (var Increment = 0; Increment < Acti.length; Increment += 1) {
		point(Acti[Increment].x, Acti[Increment].y);
	}
}

function mousePressed() {
	var X = mouseX;
	var Y = mouseY;

	B = true;

	var I = floor(X / W);
	var J = floor(Y / W);

	var Posi = createVector(X, Y);
	var Jcos = J * Cols;
	var Form = I + Jcos;

	Grid[Form] = Posi;
	Acti.push(Posi);
}
