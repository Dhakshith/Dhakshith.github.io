let Mini;
let Canv;

let Timber  = [];
let Walkers = [];

let Max = {
	Walkers: 49,
	Iterats: 1000
};

function setup() {
	Mini = min(windowWidth, windowHeight) - 15;

	Canv = createCanvas(400, 400);

	Canv.position(windowWidth / 2 - width / 2, windowHeight / 2 - height / 2);

	Timber[0] = new Walker(width / 2, height / 2);

	for (let i = 0; i < Max.Walkers; i++) Walkers[i] = new Walker();
}

function draw() {
	background(0);

	for (let i = 0; i < Timber.length; i++) Timber[i].Show();
	for (let i = 0; i < Walkers.length; i++) Walkers[i].Show();

	for (let n = 0; n < Max.Iterats; n++) for (let i = 0; i < Walkers.length; i++) {
		Walkers[i].Walk();

		if (Walkers[i].Chuck(Timber)) {
			Timber.push(Walkers[i]);
			Walkers.splice(i, 1);
		}
	}

	let Rad = Walkers[Walkers.length - 1].Radius;

	while (Walkers.length < Max.Walkers) Walkers.push(new Walker(Rad * 0.99));
}

// https://youtu.be/Cl_Gjj80gPE?list=PLRqwX-V7Uu6ZiZxtDDRCi6uhfTH4FilpH&t=2509