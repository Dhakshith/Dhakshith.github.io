let MyImg;
let AiImg;

let Resolution = 10;
let Canvas;

let Cols;
let Rows;

let Tiles = [];
let Moves = 0;

let player;
let laptop;

let Spinx;
let Spiny;

let Circle;
let Random;

var sketch = function(p) {
	Canvas = p;

	p.preload = function() {
		MyImg = p.loadImage("Images/Player.png");
		AiImg = p.loadImage("Images/Laptop.png");
	}

	p.setup = function() {
		p.frameRate(10);
		p.createCanvas(p.windowWidth - 15, 750);
		p.colorMode("hsb");

		Resolution = 750 / Resolution;

		Cols = 750  / Resolution;
		Rows = p.height / Resolution;

		Spinx = p.width * 0.75;
		Spiny = p.height / 2.0;

		Random = p.createP("Moves: 0");

		let x = 0;
		let y = Resolution * (Rows - 1);

		let dir = 1;

		for (let i = 0; i < Cols * Rows; i++) {
			let tile = new Tile(x, y, Resolution, i, i + 1, p);

			Tiles.push(tile);

			x += Resolution * dir;

			if (x >= 750 || x <= -Resolution) {
				dir *= -1;

				x += Resolution * dir;
				y -= Resolution;
			}
		}

		// Snakes

		for (let i = 0; i < 3; i++) {
			let Index = p.floor(p.random(Cols, Tiles.length));

			Tiles[Index].Snadders = -1 * p.floor(p.random(Index % Cols, Index - 1));
		}

		// Ladders

		for (let i = 0; i < 3; i++) {
			let Index = p.floor(p.random(0, Tiles.length - Cols));

			Tiles[Index].Snadders = p.floor(p.random(Cols - (Index % Cols), Tiles.length - Index - 3));
		}

		player = new Player(MyImg, p);

		Circle = p.createButton('Roll');

		Circle.class("Spinner");
		Circle.mousePressed(Spin);
	}

	p.draw = function() {
		for (let tile of Tiles) {
			tile.show();
		}

		for (let tile of Tiles) {
			tile.Hurdles(Tiles);
		}

		player.show(Tiles, MyImg);

		if (p.frameCount % 30 === 0) {
			console.clear();
		}
	}
}

var Node = document.createElement("div");

window.document.getElementsByTagName("body")[0].appendChild(Node);

new p5(sketch, Node);

window.document.getElementsByTagName("div")[0].classList.add("Canvas");

function Spin() {
	Moves = player.RollDies(Tiles);

	Random.html("Moves: " + Moves);
	player.Preview(Tiles);
	player.move();

	if (player.Snaddering(Tiles)) {
		player.Snadder(Tiles);
	}

	if (player.spot > Tiles.length - 2) {
	    player.spot = Tiles.length - 1;

	    document.getElementById("alert").classList.add('shown');
	    document.getElementById("alert").classList.remove('hidden');
	}
}

function Replay() {
	location.reload();
}