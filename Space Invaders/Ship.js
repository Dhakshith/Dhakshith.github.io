function Ship() {
	this.x = width / 2;
	this.xDirection = 0;
	this.length = 75;
	this.height = 25;
	this.y = height - this.height * 2;

	this.show = function() {
		fill(0, 255, 0);
		rect((this.x + this.length / 2 - (this.height / 2)) + (this.height / 3) + 1, this.y - this.height, this.height / 4, this.height);
		rect((this.x + this.length / 2 - (this.height / 2)), this.y - (this.height / 2), this.height, this.height / 2);
		rect(this.x, this.y, this.length, this.height);
	}

	this.setDir = function(Dir) {
		this.xDirection = Dir;
	}

	this.move = function(Direction) {
		this.x += this.xDirection * 5;
	}
}