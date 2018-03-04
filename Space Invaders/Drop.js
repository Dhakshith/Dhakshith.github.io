function WaterDrop(x, y) {
	this.x = x;
	this.y = y;
	this.r = 3.125;
	this.ToBeDeleted = false;

	this.show = function() {
		fill(255, 0, 0);
		rect(this.x, this.y, this.r * 2, this.r * 4);
	}

	this.evaporate = function() {
		this.ToBeDeleted = true;
	}

	this.hits = function(ObjectGettingHitted) {
		var d = dist(this.x, this.y, ObjectGettingHitted.x, ObjectGettingHitted.y);

		if (d < this.r + 30) {
			return true;
		} else {
			return false;
		}
	}

	this.move = function() {
		this.y = this.y - 5;
	}
}