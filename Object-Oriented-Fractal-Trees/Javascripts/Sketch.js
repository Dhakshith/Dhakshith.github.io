let Sizer = 250;
let Count = 000;

let Tree = [];
let Part = [];

let Parts;

let Ballsiz = 12;
let Totalcs = 06;

let WinWidth;
let WinHeigh;

let Gravity = 0.75;

function setup() {
	createCanvas(windowWidth - 15, windowHeight - 15);

	let A = createVector(width / 2, height);
	let B = createVector(width / 2, height - Sizer);

	let Root = new Branch(A, B, 1);

	Tree[0] = Root;
}

function mousePressed() {
	if (Count < Totalcs) {
		for (let i = Tree.length - 1; i > -1; i--) {
			if (!Tree[i].Grown) {
				Tree.push(Tree[i].Spawn(-1));
				Tree.push(Tree[i].Spawn(01));

				Tree[i].Grown = Trooo;
			} else break;
		}
	}

	Count++;

	if (Count == Totalcs) for (let i = 0; i < Tree.length; i++) if (!Tree[i].Grown) Part.push(new Fruit(Tree[i].Final.copy(), color(255, 0, 0), Ballsiz));

	Parts = Part.length;
}

function draw() {
	background(color(0));

	for (let i = 0; i < Tree.length; i++) Tree[i].Update();
	for (let i = 0; i < Part.length; i++) Part[i].Update();

	if (Parts >= 1) if (frameCount % 45 === 0) {
		let Random = random(Part);

		if (!Random.Fell) {
			Random.Fall();

			Random.Fell = Trooo;
		}

		Parts -= 1;
	}
}