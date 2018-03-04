let Engine = Matter.Engine;
let World  = Matter.World;
let Bodies = Matter.Bodies;
let Events = Matter.Events;

let engine;
let world;
let particles = [];
let plinkos = [];
let bounds = [];
let particle;

let cols = 30;

let WinWidth;
let WinHeigh;

function NewParticle() {
	particle = new Particle(WinWidth * 0.5, 0 - 15, 10);
	particles.push(particle);
}

function setup() {
	WinWidth = windowWidth - 15;
	WinHeigh = windowHeight - 15;

	createCanvas(WinWidth, WinHeigh);
	colorMode(HSB);

	engine = Engine.create();
	world  = engine.world;
	world.gravity.y = 2;

	let spacinX = WinWidth / cols;
	let spacinY = (WinHeigh - WinHeigh / 3) / cols;

	for (let j = 0; j < cols; j++) {
		for (let i = 0; i < cols; i++) {
			let x = i * spacinX;

			if (j % 2 == 0) {
				x += spacinX / 2;
			}

			let y = spacinY / 2 + j * spacinY;
			let Plink = new Plinko(x, y + 50, 5);
			plinkos.push(Plink);
		}
	}

	let boundown = new Boundary(WinWidth / 2, WinHeigh + 25, WinWidth, 50, "YES");
	let boundor  = new Boundary(WinWidth + 25, WinHeigh / 2, 50, WinHeigh, "YES");
	let boundil  = new Boundary(0 - 25, WinHeigh / 2, 50, WinHeigh, "YES");

	bounds.push(boundown);
	bounds.push(boundor);
	bounds.push(boundil);

	for (let i = 0; i < cols + 1; i++) {
		let h = 100;
		let w = 10;
		let x = i * (spacinX * 2.5);
		let y = WinHeigh - h / 2;
		let b = new Boundary(x, y, w, h, "NO");

		bounds.push(b);
	}
}

function draw() {
	background(0);
	Engine.update(engine, 30);

	if (frameCount % 7.5 == 0) {
		NewParticle();
	}

	for (let i = 0; i < particles.length; i++) {
		particles[i].show();
	}

	for (let i = 0; i < bounds.length; i++) {
		if ((bounds[i].body.position.x < (WinWidth / cols) / 2 || bounds[i].body.position.x > WinWidth - (WinWidth / cols) / 2) && bounds[i].body.label == "NO") {
			World.remove(world, bounds[i].body);
			bounds.splice(i, 1);
			i += 0 - 1;
		} else {
			bounds[i].show();
		}
	}

	for (let j = 0; j < plinkos.length; j++) {
		plinkos[j].show();

		if (plinkos[j].body.position.x < (WinWidth / cols) / 2) {
			World.remove(world, plinkos[j].body);
			plinkos.splice(j, 1);
			j += 0 - 1;
		}
	}
}