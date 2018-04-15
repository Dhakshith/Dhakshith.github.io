class Point {
	constructor(x, y, Data) {
		this.x = x;
		this.y = y;

		this.UserData = Data;
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

	intersects(span) {
		return  !(span.x - span.w > this.x + this.w ||
				  span.x + span.w < this.x - this.w ||
				  span.y - span.h > this.y + this.h ||
				  span.y + span.h < this.y - this.h);
	}
}

class Circle {
	constructor(x, y, r) {
		this.x = x;
		this.y = y;
		this.r = r;

		this.rsqrd = r * r;
	}

	contains(point) {
		return Math.pow((point.x - this.x), 2) + Math.pow((point.y - this.y), 2) <= this.rsqrd;
	}

	intersects(span) {
		var xDist = Math.abs(span.x - this.x);
		var yDist = Math.abs(span.y - this.y);

		if (xDist > (this.r + span.w) || yDist > (this.r + h)) return false;
		if (xDist <= span.w || yDist <= h) return true;

		return Math.pow((xDist - span.w), 2) + Math.pow((yDist - h), 2) <= this.rsqrd;
	}
}

class QuadTree {
	constructor(boundary, capacity) {
		this.boundary = boundary;
		this.capacity = capacity;

		this.divided  = false;
		this.points   = [];

		this.x = boundary.x;
		this.y = boundary.y;

		this.hw = boundary.w * 0.5;
		this.hh = boundary.h * 0.5;
	}

	subdivide() {
		let nw = new Rectangle(this.x - this.hw, this.y - this.hh, this.hw, this.hh);
		let ne = new Rectangle(this.x + this.hw, this.y - this.hh, this.hw, this.hh);
		let sw = new Rectangle(this.x - this.hw, this.y + this.hh, this.hw, this.hh);
		let se = new Rectangle(this.x + this.hw, this.y + this.hh, this.hw, this.hh);

		this.nw = new QuadTree(nw, this.capacity);
		this.ne = new QuadTree(ne, this.capacity);
		this.sw = new QuadTree(sw, this.capacity);
		this.se = new QuadTree(se, this.capacity);

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

	query(span, found) {
		if (!found) found = [];

		if (!this.boundary.intersects(span)) return;

		for (let p of this.points) if (span.contains(p)) found.push(p);

		if (this.divided) {
			this.nw.query(span, found);
			this.ne.query(span, found);
			this.sw.query(span, found);
			this.se.query(span, found);
		}

		return found;
	}

	show() {
		strokeWeight(1);
		stroke(255, 0, 0);
		rect(this.boundary.x, this.boundary.y, this.boundary.w * 2, this.boundary.h * 2);

		strokeWeight(3);
		stroke(0, 255, 0);

		if (this.divided) {
			this.nw.show();
			this.ne.show();
			this.sw.show();
			this.se.show();
		}

		for (let p of this.points) point(p.x, p.y);
	}
}