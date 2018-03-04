function Plinko(x, y, r) {
	var options = {
		isStatic: true,
		restitution: 0.75,
		friction: 0
	}

	this.hue = random(360);
	this.r = r;
	this.body = Bodies.circle(x, y, this.r, options);

	World.add(world, this.body);
}

Plinko.prototype.show = function() {
	var Position = this.body.position;

	push();
	fill(this.hue, 255, 255);
	noStroke();
	translate(Position.x, Position.y);
	ellipseMode(CENTER);
	ellipse(0, 0, this.r * 2);
	pop();
}