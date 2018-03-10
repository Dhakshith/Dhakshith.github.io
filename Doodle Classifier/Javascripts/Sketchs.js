let Size = 28, Length = Size * Size, Window = Size * 17.5, Training, Tresting, Net, Canv, Drawings = [
	"Aeroplane",
	"Train",
	"Cat"
], Planes = {}, Trains = {}, Cats = {}, Planeabel = 0, Trainabel = 1, Catabel = 2;

function preload() {
	Planes.Data = loadBytes("Data/1000 Planes.bin");
	Trains.Data = loadBytes("Data/1000 Trains.bin");

	Cats.Data = loadBytes("Data/1000 Cats.bin");
}

function setup() {
	Canv = createCanvas(Window, Window);

	Canv.position(windowWidth / 2 - width / 2, windowHeight / 2 - height / 2);

	background(255);
	strokeWeight(20);

	Prepare(Planes, Planeabel);
	Prepare(Trains, Trainabel);

	Prepare(Cats, Catabel);

	Net = new NeuralNetwork(784, 64, 3);

	Training = shuffle([].concat(Planes.Training).concat(Trains.Training).concat(Cats.Training));
	Tresting = [].concat(Planes.Tresting).concat(Trains.Tresting).concat(Cats.Tresting);

	let Epocounter = 0;

	let Train = select("#Train");
	let Trest = select("#Trest");
	let Guess = select("#Guess");
	let Clear = select("#Clear");

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

	Clear.mousePressed(() => background(255))
}

function draw() {
	if (mouseIsPressed) line(pmouseX, pmouseY, mouseX, mouseY);
}