let Size = 28, Length = Size * Size, Window = Size * 17.5, Training, Tresting, Clear, Drawings = [
	"Aeroplane",
	"Rainbow",
	"Cat"
], Net, Planes = {}, Rainbows = {}, Cats = {}, Epocounter = 0, Train, Trest, Guess, Canv, Erase, Write;

function preload() {
	Planes.Data = loadBytes("Data/Planes.bin");
	Rainbows.Data = loadBytes("Data/Rainbows.bin");
	Cats.Data = loadBytes("Data/Cats.bin");
}

function setup() {
	Canv = createCanvas(Window, Window);

	Canv.position(windowWidth / 2 - width / 2, windowHeight / 2 - height / 2);

	background(255);
	strokeWeight(20);
	stroke(0);

	Prepare(Planes,  0);
	Prepare(Rainbows, 1);

	Prepare(Cats, 2);

	Net = new NeuralNetwork(784, 64, 3);

	Training = shuffle([].concat(Planes.Training).concat(Rainbows.Training).concat(Cats.Training));
	Tresting = [].concat(Planes.Tresting).concat(Rainbows.Tresting).concat(Cats.Tresting);

	Train = select("#Train");
	Trest = select("#Trest");
	Guess = select("#Guess");
	Clear = select("#Clear");
	Erase = select("#Erase");
	Write = select("#Write");

	Train.mousePressed(() => {
		Epoch("Train", Training);

		Epocounter++;

		console.log("Epoch: " + Epocounter);
	});

	Trest.mousePressed(() => console.log("Correct Percent: " + nf(Epoch("Trest", Tresting), 2, 2) + "%"));

	Guess.mousePressed(() => {
		let Inputs = [];
		let Img = get();

		Img.resize(28, 28);
		Img.loadPixels(  );

		for (let i = 0; i < Length; i++) {
			let Brightness = 255 - Img.pixels[i * 4];

			Inputs[i] = Brightness / 255;
		}

		let Guesss = Net.predict(Inputs);
		let Classs = Guesss.indexOf(max(Guesss));

		console.log(Drawings[Classs]);
	});

	Clear.mousePressed(() => background(255));
	Write.mousePressed(() => stroke(0));
	Erase.mousePressed(() => stroke(255));
}

function draw() {
	if (mouseIsPressed) line(pmouseX, pmouseY, mouseX, mouseY);
}
