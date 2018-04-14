let Grid;
let Size;

let Cloid;

let Score = 0;

function setup() {
	Grid = Blank();
	Cloid = Blank();

	createCanvas(400, 400);
	noLoop();

	Size = width / 4;

	addNumber();
	addNumber();

	UpdateCanvas();
}

function UpdateCanvas() {
	background(color(151, 138, 128));
	DrawGrid();
	select("#Score").html("Score: " + Score);
}

function keyPressed() {
	let Flipped = false;
	let Rotated = false;
	let Playeed = true;

	switch (key) {
		case "(":
			break;

		case "&":
			Grid = Flip(Grid);

			Flipped = true;

			break;

		case "'":
			Grid = Transpose(Grid, 1);

			Rotated = true;

			break;

		case "%":
			Grid = Transpose(Grid);
			Grid = Flip(Grid, 1);

			Rotated = true;
			Flipped = true;

			break;

		default:
			Playeed = false;
	}

	if (Playeed) {
		let Past = Grid.filter(Value => Value);

		for (var i = 0; i < 4; i++) Grid[i] = Operate(Grid[i]);

		if (Flipped) Grid = Flip(Grid);

		if (Rotated) {
			Grid = Transpose(Grid, -1);
		}

		if (Compare(C2T1D(Past), C2T1D(Grid))) addNumber();

		UpdateCanvas();

		if (GameOver()) select("#Hover").html("Game Over!");
		if (GameWon()) select("#Hover").html("Game Won!");
	}
}

function DrawGrid() {
	for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) {
		let Value = Grid[i][j];

		push();
		fill(Value !== 0 ? Colorizes[String(Value)].Color : "#CDC1B3");

		strokeWeight(5);
		stroke(color(151, 138, 128));

		if (Cloid[i][j] === 1) {
			fill(255, 0, 0);

			Cloid[i][j] = 0;
		}

		rect(i * Size, j * Size, Size, Size);
		pop();

		if (Value !== 0) {
			push();
			textAlign(CENTER, CENTER);

			textSize(Colorizes[String(Value)].Size);
			fill(0);

			noStroke();
			text(Value, i * Size + Size / 2, j * Size + Size / 2);

			pop();
		}
	}
}
