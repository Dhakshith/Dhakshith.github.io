function Boundary(x, y, w, h, l) {
	var options = {
		isStatic: true
	}

	this.hue = random(360);
	this.w = w;
	this.h = h;
	this.label = l;
	this.body = Bodies.rectangle(x, y, this.w, this.h, options);
	this.body.label = this.label;

	World.add(world, this.body);
}

Boundary.prototype.show = function() {
	var Position = this.body.position;

	push();
	fill(this.hue, 255, 255);
	noStroke();
	translate(Position.x, Position.y);
	rectMode(CENTER);
	rect(0, 0, this.w, this.h);
	pop();
}