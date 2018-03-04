function Index(i, j) {
	if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
		return 0 - 1;
	}

	return i + j * cols;
}