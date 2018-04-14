let Particles = [];

let particle;

let WiFi;

function setup() {
	Canv = createCanvas(windowWidth - 15, windowHeight - 15);

	Canv.position(windowWidth / 2 - width / 2, windowHeight / 2 - height / 2);

	WiFi = 100 + (width - 100) / 9;
}

function draw() {
	background(2, 0, 3);

	Particles.push(new Particle(WiFi * 1, height - 20));
	Particles.push(new Particle(WiFi * 2, height - 20));
	Particles.push(new Particle(WiFi * 3, height - 20));
	Particles.push(new Particle(WiFi * 4, height - 20));
	Particles.push(new Particle(WiFi * 5, height - 20));

	Particles.forEach(function(Element, i) {
		Element.Update();

		if (Element.Faded()) {
			Particles.splice(i, 1);
		}
	});
}