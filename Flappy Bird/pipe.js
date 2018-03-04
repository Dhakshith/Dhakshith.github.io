function Pipe() {
	var spacing = random(bird.radius * 2, height / 4);
	var centery = random(spacing, height - spacing);

	this.top = centery - spacing / 2;
	this.bottom = height - (centery + spacing / 2);
	this.x = width;
	this.w = 50;
	this.speed = 2;

	this.highlight = false;

	this.hits = function(bird) {
		if (bird.y < this.top || bird.y > height - this.bottom) {
			if (bird.x > this.x && bird.x < this.x + this.w) {
				this.highlight = true;
				return true;
			}
		}
		this.highlight = false;
		return false;
	}

	this.show = function() {
		noStroke();
		fill(0, 255, 0);

		if (this.highlight) {
			fill(255, 0, 0);
		}

		rect(this.x, 0, this.w, this.top);
		rect(this.x, height - this.bottom, this.w, this.bottom);
	}

	this.update = function() {
		this.x -= this.speed;
	}

	this.offScreen = function() {
		if (this.x < -this.w) {
			return true;
		} else {
			return false;
		}
	}
}