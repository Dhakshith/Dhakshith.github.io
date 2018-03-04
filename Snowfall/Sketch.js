let Snow = [];
let Gravity;
let ZOf = 0;
let spritesheet = [];
let textures = [];
let nums = [
	-1,
	 1
];

function preload() {
	spritesheet = loadImage("32 Flakes.png");
}

function setup() {
	var Canvas = createCanvas(windowWidth, windowHeight);
	Canvas.position(0, 0);
	Gravity = createVector(0, 0.0215);

	for (let x = 0; x < spritesheet.width; x += 32) {
		for (let y = 0; y < spritesheet.height; y += 32) {
			let Img = spritesheet.get(x, y, 32, 32);
			textures.push(Img);
		}
	}
	
	for (let i = 0; i < 175; i++) {
		let Design = random(textures);
		Snow.push(new SnowFlake(Design));
	}
}

function draw() {
	background(0);
	ZOf += 0.01;

	for (Flake of Snow) {
		 let XOf = Flake.pos.x / width;
		 let YOf = Flake.pos.Y / height;
		 let WAnN = (random(0.1) > 0.05) ? 1 : -1;
		 let WAng = WAnN * noise(XOf, YOf, ZOf) * TWO_PI;
		 let Wind = p5.Vector.fromAngle(WAng);
		 Wind.mult(0.01);
			
		 Flake.applyForce(Gravity);
		 Flake.applyForce(Wind);
	 	 Flake.update();
		 Flake.render();
	}
}