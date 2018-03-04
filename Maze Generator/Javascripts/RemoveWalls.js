function RemoveWall(Cell1, Cell2) {
	var x = Cell1.I - Cell2.I;

	if (x === 1) {
		Cell1.Walls[3] = false;
		Cell2.Walls[1] = false;
	} else if (x === 0 - 1) {
		Cell1.Walls[1] = false;
		Cell2.Walls[3] = false;
	}

	var y = Cell1.J - Cell2.J;

	if (y === 1) {
		Cell1.Walls[0] = false;
		Cell2.Walls[2] = false;
	} else if (y === 0 - 1) {
		Cell1.Walls[2] = false;
		Cell2.Walls[0] = false;
	}
}