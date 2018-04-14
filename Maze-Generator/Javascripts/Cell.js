function Cell(I, J, W) {
	this.I = I;
	this.J = J;
	this.W = W;

	var x = this.I * this.W;
	var y = this.J * this.W;

	this.Walls = [
		true,
		true,
		true,
		true
	];

	this.Visited = false;

	this.CheckNeighbors = function() {
		var Neighbors = [];

		var Top    = Grid[Index(this.I, this.J - 1)];
		var Right  = Grid[Index(this.I + 1, this.J)];
		var Bottom = Grid[Index(this.I, this.J + 1)];
		var Left   = Grid[Index(this.I - 1, this.J)];

		if (Top) {
			if (!Top.Visited) {
				Neighbors.push(Top);
			}
		}

		if (Right) {
			if (!Right.Visited) {
				Neighbors.push(Right);
			}
		}

		if (Bottom) {
			if (!Bottom.Visited) {
				Neighbors.push(Bottom);
			}
		}

		if (Left) {
			if (!Left.Visited) {
				Neighbors.push(Left);
			}
		}

		if (Neighbors.length > 0) {
			var Random = floor(random(0, Neighbors.length));
			return Neighbors[Random];
		} else {
			return undefined;
		}
	}

	this.show = function() {
		strokeWeight(5);
		stroke(255);

		if (this.Walls[0]) {
			line(x, y, x + this.W, y);
		}

		if (this.Walls[1]) {
			line(x + this.W, y, x + this.W, y + this.W);
		}
		
		if (this.Walls[2]) {
			line(x + this.W, y + this.W, x, y + this.W);
		}
		
		if (this.Walls[3]) {
			line(x, y + this.W, x, y);
		}

		if (this.Visited) {
			noStroke();
			fill(255, 0, 255, 112.5);
			rect(x, y, this.W, this.W);
		}
	}
}