function Particle(x, y, Hue, Firework) {
	this.pos = createVector(x, y);
	this.Firework = Firework;
	this.massssss = 5;
	this.lifespan = 255;
	this.Hueeeeee = Hue;

	if (this.Firework) {
		this.vel = createVector(0, random(-15.5, -10));
	} else {
		this.vel = p5.Vector.random2D();
		this.vel.mult(random(1, 5));
	}

	this.acc = createVector(0, 0);
	this.ze  = 0;

	this.applyForce = function(Force) {
		this.acc.add(Force);
	}

	this.update = function() {
		if (!this.Firework) {
			if (this.massssss >= 2.01) {
				this.massssss -= 0.01;
			}

			this.lifespan -= random(2, 6);
		}

		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.acc.mult(this.ze);
	}

	this.done = function() {
		if (this.lifespan < 0) {
			return true;
		} else {
			return false;
		}
	}

	this.show = function() {
		colorMode(HSB);

		if (!this.Firework) {
			strokeWeight(this.massssss);
			stroke(this.Hueeeeee, 255, 255, this.lifespan);
		} else {
			strokeWeight(5);
			stroke(this.Hueeeeee, 255, 255);
		}

		point(this.pos.x, this.pos.y);
	}
}