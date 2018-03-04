function Bird() {
	this.x = width / 2 - 50;
	this.y = height / 2;

	this.gravity = 0.6;
	this.lift = -15;
	this.velocity = 0;

	this.radius = 32;
	
	this.show = function() {
		fill(0, 0, 255);
		ellipse(this.x, this.y, this.radius, this.radius);
	}

	this.up = function() {
		this.velocity += this.lift;
	}

	this.update = function() {
		this.velocity += this.gravity;
		this.velocity *= 0.9;
		this.y += this.velocity;

		if (this.y > height - this.radius / 2) {
			this.y = height - this.radius / 2;
			this.velocity = 0;
		}

		if (this.y < 0 + this.radius / 2) {
			this.y = 0 + this.radius / 2;
			this.velocity = 0;
		}
	}
}