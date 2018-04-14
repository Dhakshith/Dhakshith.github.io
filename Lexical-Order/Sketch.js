var Values = [];
var Numbes = 09;

function setup() {
	createCanvas(windowWidth - 15, windowHeight - 15);
	background(0);

	for (var n = 0; n < Numbes; n++) {
		Values.push(n + 1);
	}
}

function draw() {
	var largestI = -1;

	for (var i = 0; i < Values.length - 1; i++) {
		if (Values[i] < Values[i + 1]) {
			largestI = i;
		}
	}

	if (largestI == -1) {
		noLoop();
	}

	var largestJ = -1;

	for (var j = 0; j < Values.length; j++) {
		if (Values[largestI] < Values[j]) {
			largestJ = j;
		}
	}

	swap(Values, largestI, largestJ);

	var endArray = Values.splice(largestI + 1);

	endArray.reverse();

	Values = Values.concat(endArray);

	var Ring = "";

	for (var i = 0; i < Values.length; i++) {
		Ring += Values[i];
	}

	background(0);
	textSize(120);
	
	textAlign(CENTER, CENTER);
	fill(255);

	text(Ring, width / 2, height / 2);
}

function swap(a, i, j) {
	var temp = a[i];

	a[i] = a[j];
	a[j] = temp;
}