function Particle(x, y, r) {
	var options = {
		restitution: 0.75,
		friction: 0
	}
	x += random(-2, 2);

	this.hue = random(360);
	this.r = r;
	this.body = Bodies.circle(x, y, this.r, options);

	World.add(world, this.body);
}

Particle.prototype.show = function() {
	var Position = this.body.position;

	push();
	fill(this.hue, 255, 255);
	noStroke();
	translate(Position.x, Position.y);
	ellipseMode(CENTER);
	ellipse(0, 0, this.r * 2);
	pop();
}