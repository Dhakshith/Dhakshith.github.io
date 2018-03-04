function GetRandomSize() {
	let r = random(20.25, 40.75);
	return abs(r);
}

class SnowFlake {
	constructor(Texture) {
		this.r   = GetRandomSize();
		let x = random(this.r, width - this.r);
		let y = random(-100, -10);
		this.img = Texture;
		this.pos = createVector(x, y);
		this.vel = createVector(0, 0);
		this.acc = createVector(0, 0);
		this.ang = random(TWO_PI);
		this.dir = (random(0.1) > 0.05) ? 1 : -1;
		this.XOf = 0;
	}

	applyForce(Force) {
		// Parallax Effect Hack

		let F = Force.copy();
		F.mult(this.r);

		this.acc.add(F);
	}

	randomize() {
		this.r   = GetRandomSize();
		let x = random(this.r, width - this.r);
		let y = random(-100, -10);
		this.pos = createVector(x, y);
		this.vel = createVector(0, 0);
		this.acc = createVector(0, 0);
	}

	update() {
		this.XOf = sin(this.ang * 1.25) * 5 * this.r;

		this.vel.add(this.acc);
		this.vel.limit(this.r * 0.1);
		this.pos.add(this.vel);
		this.acc.mult(0);

		if (this.offScreen()) {
			this.randomize();
		}

		// Wrap Left And Right

		if (this.pos.x < 0 - this.r * 2) {
			this.pos.x = width + this.r * 8;
		}

		if (this.pos.x > width + this.r * 2) {
			this.pos.x = 0 - this.r * 2;
		}
		
		this.ang += this.dir * this.vel.mag() / 175;
	}

	render() {
		push();
		translate(this.pos.x + this.XOf, this.pos.y);
		rotate(this.ang);
		imageMode(CENTER);
		image(this.img, 0, 0, this.r, this.r);
		pop();
	}

	offScreen() {
		return (this.pos.y > height + this.r);
	}
}