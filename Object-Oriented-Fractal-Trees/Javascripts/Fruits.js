function Fruit(XY, Color, BalSiz) {
	this.Position = XY;
	this.Color = Color;

	this.Size = BalSiz;
	this.Fell =  False;

	this.Velocity = 0;
	this.PrevPosi = 0;

	this.Fall = function() {
		this.PrevPosi = dist(this.Position.x, this.Position.y, width / 2, height);
		this.Velocity = (((Gravity * 75000) * this.Size) / (this.PrevPosi * this.PrevPosi));
		this.Fell = Trooo;
	}

	this.Display = function() {
		push();
		fill(this.Color);

		strokeWeight(0.5);
		stroke(255);

		ellipseMode(CENTER);

		ellipse(this.Position.x, this.Position.y, this.Size);
		pop();
	}

	this.Update = function() {
		if (this.Position.y + this.Size / 2 >= height) {
			this.Position.y = height - this.Size / 2;
			this.Position.x = random(1) > 0.5 ? this.Position.x + random(-0.1) : this.Position.x + random(0.1);
		} else {
			this.Position.y += this.Velocity;
		}

		this.Display();
	}
}