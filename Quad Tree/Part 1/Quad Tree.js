class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}

class Rectangle {
	constructor(x, y, w, h) {
		this.x = x;
		this.y = y;

		this.w = w;
		this.h = h;
	}

	contains(p) {
		return p.x >= this.x - this.w &&
			  p.x <= this.x + this.w &&
			  p.y >= this.y - this.w &&
			  p.y <= this.y + this.w;
	}
}

class Quadtree {
	constructor(boundary, capacity) {
		this.boundary = boundary;
		this.capacity = capacity;

		this.divided  = false;
		this.points   = [];

		this.x = boundary.x;
		this.y = boundary.y;

		this.hw = boundary.w / 2;
		this.hh = boundary.h / 2;
	}

	subdivide() {
		let nw = new Rectangle(this.x - this.hw, this.y - this.hh, this.hw, this.hh);
		let ne = new Rectangle(this.x + this.hw, this.y - this.hh, this.hw, this.hh);
		let sw = new Rectangle(this.x - this.hw, this.y + this.hh, this.hw, this.hh);
		let se = new Rectangle(this.x + this.hw, this.y + this.hh, this.hw, this.hh);

		this.nw = new Quadtree(nw, this.capacity);
		this.ne = new Quadtree(ne, this.capacity);
		this.sw = new Quadtree(sw, this.capacity);
		this.se = new Quadtree(se, this.capacity);

		this.divided = true;
	}

	insert(p) {
		if (!this.boundary.contains(p)) return false;

		if (this.points.length < this.capacity) {
			this.points.push(p);

			return true;
		} else {
			if (!this.divided) this.subdivide();

			if (this.ne.insert(p)) return true;
			if (this.nw.insert(p)) return true;
			if (this.se.insert(p)) return true;
			if (this.sw.insert(p)) return true;
		}
	}

	show() {
		strokeWeight(1);
		rect(this.boundary.x, this.boundary.y, this.boundary.w * 2, this.boundary.h * 2);
		strokeWeight(4);

		if (this.divided) {
			this.nw.show();
			this.ne.show();
			this.sw.show();
			this.se.show();
		}

		// for (let p of this.points) point(p.x, p.y);
	}
}