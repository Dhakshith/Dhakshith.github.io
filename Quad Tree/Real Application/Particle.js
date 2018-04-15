class Particle {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.r = 5;
		this.c = 100;
	}

	intersects(other) {
		return dist(this.x, this.y, other.x, other.y) < this.r + other.r;
	}

	move() {
		this.x += random(-1, 1);
		this.y += random(-1, 1);
	}

	render() {
		noStroke();
		fill(this.c);
		ellipse(this.x, this.y, this.r * 2);
	}

	Color(value) {
		this.c = value;
	}
}