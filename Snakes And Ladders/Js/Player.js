class Player {
	constructor(Image, p) {
		this.reset();

		this.Image = Image;
		this.can = p;
	}

	RollDies() {
		this.roll = this.can.floor(this.can.random(1, 7));
		this.next = this.spot + this.roll;

		return this.roll;
	}

	move() {
		this.spot = this.next;
	}

	Preview(Tiles) {
		let Start = this.can.max(0, this.spot);
		let End = this.can.min(this.next, Tiles.length);

		for (let i = Start; i <= End; i++) {
			Tiles[i].Highlight();
		}
	}

	Snaddering(Tiles) {
		if (Tiles[this.spot]) {
			let Tile = Tiles[this.spot];

			if (Tile.Snadders != 0) {
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	}

	Snadder(Tiles) {
		let Tile = Tiles[this.spot];

		this.spot += Tile.Snadders;

		let Nxt = Tiles[this.spot];

		this.spot += Nxt.Snadders;
	}

	reset() {
		this.spot = -1;
		this.roll = -1;
		this.next = -1;
	}

	show(tiles, Img) {
		if (this.spot > 0) {
			let Current = tiles[this.spot];
			let center = Current.Centers();

			this.can.imageMode("center");
			this.can.image(Img, center[0], center[1], 40, 50);
		} else {
			let Current = tiles[0];
			let center = Current.Centers();

			this.can.imageMode("center");
			this.can.image(Img, center[0], center[1], 40, 50);
		}
	}
}