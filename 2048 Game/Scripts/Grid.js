function Blank() {
	return Array(4).fill(Array(4).fill(0));
}

function C1T2D(arr) {
	var newArr = [];

	while (arr.length) newArr.push(arr.splice(0, 4));

	return newArr;
}

function C2T1D(arrToConvert) {
	var newArr = [];

	for (var i = 0; i < arrToConvert.length; i++) newArr = newArr.concat(arrToConvert[i]);

	return newArr;
}

function Compare(A, B) {
	return JSON.stringify(A) != JSON.stringify(B);
}

function Flip(GRID) {
	let Arrray = GRID.filter(Value => Value);

	for (var i = 0; i < 4; i++) {
		Arrray[i].reverse();
	}

	return Arrray;
}

function Transpose(GRID, Direction) {
	let Arrray = C2T1D(Blank());

	Grid = C2T1D(Grid);

	for (var i = 0; i < 4; i++) for (var j = 0; j < 4; j++) {
		if (Direction === 1) Arrray[i + j * 4] = Grid[j + i * 4]; else Arrray[j + i * 4] = Grid[i + j * 4];
	}

	Grid = C1T2D(Grid);

	return C1T2D(Arrray);
}

function addNumber() {
	Grid = C2T1D(Grid);
	Cloid = C2T1D(Cloid);

	let Options = [];

	for (let i = 0; i < 16; i++) if (Grid[i] === 0) Options.push(i);

	if (Options.length > 0) {
		let Option = random(Options);

		Grid[Option] = random(1) > 0.2 ? 2 : 4;
		Cloid[Option] = 1;
	}

	Cloid = C1T2D(Cloid);
	Grid = C1T2D(Grid);
}