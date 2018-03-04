class Tile {
	constructor(XAxis, YAxis, Size, index, Nxt, p) {
		this.x = XAxis;
		this.y = YAxis;

		this.wh = Size;
		this.ca = p;

		this.index = index;
		this.next = Nxt;

		this.Snadders = 0;
		this.Color = p.map(this.index, 0, 99, 0, 240);
	}

	Centers() {
		let cx = this.x + this.wh / 2;
		let cy = this.y + this.wh / 2;

		let Content = [cx, cy];

		return Content;
	}

	show() {
		let XAxis;

		if (String(this.next).length === 1) {
			XAxis = this.x + (this.wh - 10);
		} else if (String(this.next).length === 2) {
			XAxis = this.x + (this.wh - 20);
		} else {
			XAxis = this.x + (this.wh - 30);
		}

		this.ca.noStroke();

		this.ca.fill(this.Color, 100, 100);
		this.ca.rect(this.x, this.y, this.wh, this.wh);

		this.ca.fill(0);
		this.ca.textSize(16);

		this.ca.text(this.index + 1, XAxis, this.y + 17.5);
	}

	Highlight() {
		this.ca.push();
		this.ca.noStroke();

		this.ca.colorMode("rgb");
		this.ca.fill(0, 255, 255, 127.5);

		this.ca.rect(this.x, this.y, this.wh, this.wh);
		this.ca.pop();
	}

	Hurdles(Tiles) {
		if (this.Snadders != 0) {
			let myCenter = this.Centers();
			let nextCenter = Tiles[this.index + this.Snadders].Centers();

			this.ca.push();

			this.ca.strokeWeight(3);
			this.ca.stroke(this.Snadders < 0 ? this.ca.color(240, 100, 100) : this.ca.color(36, 66, 59));

			this.ca.line(myCenter[0], myCenter[1], nextCenter[0], nextCenter[1]);
			this.ca.pop();
		}
	}
}