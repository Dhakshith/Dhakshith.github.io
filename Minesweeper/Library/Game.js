function make2DArray(cols, rows) {
	var arr = new Array(cols);
	for (var i = 0; i < arr.length; i++) {
		arr[i] = new Array(rows);
	}
	return arr;
}

var grid;

var cols;
var rows;

var Mine;
var Flag;

var w = 50;
var options = [];

var totalBees = Math.floor(w + (w / 5));

function preload() {
	Mine = loadImage("Library/Data/Mine.jpg");
	Flag = loadImage("Library/Data/Flag.png");
}

function setup() {
	createCanvas(1570, 751);

	cols = floor(width / w);
	rows = floor(height / w);

	totalBees = (cols * rows) - 10;

	grid = make2DArray(cols, rows);

	for (var i = 0; i < cols; i++) {
		for (var j = 0; j < cols; j++) {
			grid[i][j] = new Cell(i, j, w);
		}
	}

	// Pick totalBees Spots

	for (var i = 0; i < cols; i++) {
		for (var j = 0; j < rows; j++) {
			options.push([i, j])
		}
	}

	for (var n = 0; n < totalBees; n++) {
		var index = floor(random(options.length));
		var choice = options[index];

		var i = choice[0];
		var j = choice[1];

		// Deletes that spot so it's no longer an option !!!

		options.splice(index, 1);
		grid[i][j].bee = true;
	}

	for (var i = 0; i < cols; i++) {
		for (var j = 0; j < cols; j++) {
			grid[i][j].countBees();
		}
	}
}

function gameOver() {
	for (var i = 0; i < cols; i++) {
		for (var j = 0; j < cols; j++) {
			grid[i][j].revealed = true;
		}
	}
}

function mousePressed() {
	for (var i = 0; i < cols; i++) {
		for (var j = 0; j < cols; j++) {
			if (grid[i][j].contains(mouseX, mouseY)) {
				grid[i][j].reveal();

				if (grid[i][j].bee) {
					gameOver();
				}
			}
		}
	}
}

function draw() {
	background(255);

	for (var i = 0; i < cols; i++) {
		for (var j = 0; j < cols; j++) {
			grid[i][j].show();
		}
	}
}