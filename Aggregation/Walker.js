class Walker {
	constructor(X, Y) {
		if (arguments.length == 2) {
			this.Place = createVector(X, Y);
			this.Stuck = true;

			this.Radius = 8;
		} else if (arguments.length == 1) {
			this.Place = Randoint();
			this.Stuck = false;

			this.Radius = X;
		} else {
			this.Place = Randoint();
			this.Stuck = false;

			this.Radius = 8;
		}
	}

	Walk() {
		this.Place.add(p5.Vector.random2D());

		this.Place.x = constrain(this.Place.x, 0, width);
		this.Place.y = constrain(this.Place.y, 0, height);
	}

	Chuck(Others) {
		for (let i = 0; i < Others.length; i++) if (Distaure(this.Place, Others[i].Place) < this.Radius * Others[i].Radius * 4) {
			this.Stuck = true;

			return this.Stuck;
		}
	}

	Show() {
		if (this.Stuck) fill(255, 0, 100, 200); else fill(255, 200);

		ellipse(this.Place.x, this.Place.y, this.Radius * 2);
	}
}

function Randoint() {
	let i = floor(random(4));

	if (i === 0) return createVector(random(width), 0); else if (i === 1) return createVector(random(width), height); else if (i === 2) return createVector(0, random(height)); else {
		return createVector(width, random(height));
	}
}

function Distaure(A, B) {
	let Dix = B.x - A.x;
	let Diy = B.y - A.y;

	return Dix * Dix + Diy * Diy;
}
