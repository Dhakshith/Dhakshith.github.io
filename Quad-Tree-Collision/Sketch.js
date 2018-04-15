let particles = [];

let Bound;

function setup() {
	createCanvas(windowWidth - 15, windowHeight - 15);

	Bound = new Rectangle(width * .5, height * .5, width, height);

	for (let i = 0; i < 1000; i++) particles.push(new Particle(random(width), random(height)));
}

function draw() {
	background(0);

	let QTree = new QuadTree(Bound, 4);

	for (let p of particles) {
		QTree.insert(new Point(p.x, p.y, p));

		p.move();
		p.render();
		p.Color(100);
	}

	for (let p of particles) {
		let radius = new Circle(p.x, p.y, p.r * 2);
		let others = QTree.query(radius);

		for (let point of others) {
			let other = point.UserData;

			if (p !== other) {
				if (p.intersects(other)) {
					p.Color(255);
				}
			}
		}
	}
}