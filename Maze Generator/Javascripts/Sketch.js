var cols;
var rows;
var	W;
var Current;

var Grid  = [];
var Stack = [];

function setup() {
	createCanvas(((windowHeight - 15) * 2) + ((((windowHeight - 15) - 1) / 10) * 2), windowHeight - 15);

	W    = (height - 1) /  10;
	cols = floor(width  /  W);
	rows = floor(height /  W);

	for (var J = 0; J < rows; J++) {
		for (var I = 0; I < cols; I++) {
			var Zell = new Cell(I, J, W);

			Grid.push(Zell);
		}
	}

	Current = Grid[0];
}

function draw() {
	background(20);

	for (var Z = 0; Z < Grid.length; Z++) {
		Grid[Z].show();
	}

	Current.Visited = true;

	var Next = Current.CheckNeighbors();

	if (Next) {
		Next.Visited = true;
		Stack.push(Current);
		RemoveWall(Current, Next);
		Current = Next;
	} else if (Stack.length > 0) {
		Current = Stack.pop();
	}
}