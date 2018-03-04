var ship;
var Flowers = [];
var Drops = [];

function setup() {
	createCanvas(innerWidth, innerHeight);
	ship = new Ship();

	for (var i = 0; i < 16; i++) {
		Flowers[i] = new Flower(i * 80 + 170, 60);		
	}
}

function draw() {
	background(0);
	ship.show();
	ship.move();

	for (var i = 0; i < Drops.length; i++) {
		Drops[i].show();
		Drops[i].move();

		for (var j = 0; j < Flowers.length; j++) {
			if (Drops[i].hits(Flowers[j])) {
				Flowers.splice(j, 1);
				Drops[i].evaporate();
			}
		}

		if (Flowers.length === 0) {
			location.reload();
		}
	}

	var OnEdge = false;

	for (var i = 0; i < Flowers.length; i++) {
		Flowers[i].show();
		Flowers[i].move();

		if (Flowers[i].x + 60 > width || Flowers[i].x - 60 < 0) {
			OnEdge = true;
		}
	}

	if (OnEdge) {
		for (var i = 0; i < Flowers.length; i++) {
			Flowers[i].shiftDown();
		}
	}

	for (var i = Drops.length - 1; i >= 0; i--) {
		if (Drops[i].ToBeDeleted) {
			Drops.splice(i, 1);
		}
	}

	if (ship.x > width - 100) {
		ship.x = width - 100;
	} else if (ship.x < 10) {
		ship.x = 10
	}
}

function keyReleased() {
	if (key != ' ') {
		ship.setDir(0);
	}
}

function keyPressed() {
	if (key === ' ') {
		var mathX = (ship.x + ship.length / 2 - (ship.height / 2)) + (ship.height / 3) + 1;
		var shoot = new WaterDrop(mathX, 690);
		Drops.push(shoot);
	}

	if (keyCode === RIGHT_ARROW) {
		if (ship.x < width - 100) {
			if (keyCode === RIGHT_ARROW) {
				if (ship.x < width - 100) {
					ship.setDir(1);
				}
			}
		}
	} else if (keyCode === LEFT_ARROW) {
		if (ship.x >= 10) {
			if (keyCode === LEFT_ARROW) {
				if (ship.x >= 10) {
					ship.setDir(-1);
				}
			}
		}
	}
}