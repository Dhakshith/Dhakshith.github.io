class Particle {
	constructor(x, y) {
		this.Position = createVector(x, y);
		this.Velocity = createVector(random(-1, 1), random(-5, -1));

		this.Alpha = 255;
	}

	Faded() {
		return this.Alpha <= 0;
	}

	Display() {
		noStroke();
		fill(255, this.Alpha);

		ellipse(this.Position.x, this.Position.y, 16);
	}

	Update() {
		this.Position.add(this.Velocity);

		this.Alpha -= 1.75;

		this.Display();
	}
}