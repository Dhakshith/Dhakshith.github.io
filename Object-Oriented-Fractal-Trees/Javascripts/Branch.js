function Branch(First, Final, Level) {
	this.First = First;
	this.Final = Final;

	this.Grown = False;
	this.Level = Level;

	this.Update = function() {
		push();
		stroke(165, 42, 42);

		strokeWeight(Rooot / this.Level);
		line(this.First.x, this.First.y, this.Final.x, this.Final.y);

		pop();
	}

	this.Spawn = function(Tense) {
		return new Branch(this.Final, p5.Vector.add(this.Final, p5.Vector.sub(this.Final, this.First).rotate(Tense * PI / 4.25).mult(0.67)), this.Level + 1);
	}
}