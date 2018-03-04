var myImage;
var bird;
var pipes = [];

function setup() {
	createCanvas(1589, 758);
	myImage = loadImage("https://pbs.twimg.com/media/DBgGoSZWsAMCwPi.jpg");
	bird = new Bird();
	pipes.push(new Pipe());
}

function draw() {
	background(myImage);

	for (var i = pipes.length - 1; i >= 0; i--) {
		pipes[i].show();
		pipes[i].update();

		if (pipes[i].hits(bird)) {}

		if (pipes[i].offScreen()) {
			pipes.splice(i, 1);
		}
	}

	bird.update();
	bird.show();

	if (frameCount % 100 == 0) {
		pipes.push(new Pipe());
	}
}

function keyPressed() {
	if (key == ' ') {
		bird.up();
	}
}