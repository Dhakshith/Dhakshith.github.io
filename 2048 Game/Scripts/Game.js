function GameWon() {
	let Yes = false;

	Grid = C2T1D(Grid);

	for (let i = 0; i < 16; i++) if (Grid[i] === 2048) Yes = true;

	Grid = C1T2D(Grid);

	return Yes;
}

function GameOver() {
	Grid = C2T1D(Grid);

	for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) {
		if (Grid[i + j * 4] === 0) {
			Grid = C1T2D(Grid);

			return false;
		}

		if (i != 3) if (Grid[i + j * 4] === Grid[i + 1 + j * 4]) {
			Grid = C1T2D(Grid);

			return false;
		}

		if (j != 3) if (Grid[i + j * 4] === Grid[i + (j + 1) * 4]) {
			Grid = C1T2D(Grid);

			return false;
		}
	}

	Grid = C1T2D(Grid);

	return true;
}

function Operate(Row) {
	return Slide(Combine(Slide(Row)));
}

function Slide(Row) {
	let Arr = Row.filter(Value => Value);
	let Zer = Array(4 - Arr.length).fill(0);

	return Zer.concat(Arr);
}

function Combine(Row) {
	for (let i = 3; i >= 1; i--) {
		let A = Row[i];
		let B = Row[i - 1];

		if (A == B) {
			Row[i] = A + B;
			Row[i - 1] = 0;

			Score += Row[i];
		}
	}

	return Row;
}