function Flower(x, y) {
	this.x = x;
	this.y = y;

	this.xDir = 1;

	this.shiftDown = function() {
		this.xDir *= -1;
		this.y += 30;
	}

	this.move = function() {
		this.x = this.x + this.xDir;
	}

	this.show = function() {
		fill(255, 0, 0);
		ellipse(this.x, this.y, 60, 60);
	}
}