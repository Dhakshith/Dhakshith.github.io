let Minimum;

let Canv;

function setup() {
	Minimum = min(windowWidth, windowHeight) - 15;

	Canv = createCanvas(Minimum, Minimum);

	Canv.position(windowWidth / 2 - width / 2, windowHeight / 2 - height / 2)

	pixelDensity(1);
	loadPixels();

	for (let x = 0; x < width; x++) for (let y = 0; y < height; y++) {
		let A = map(x, 0, width, -2.8, 1.55);
		let B = map(y, 0, height, -2.05, 2.1625);

		let CA = A;
		let CB = B;

		let N = 0;

		while (N < 100) {
			let AA = A * A - B * B;
			let BB = 2 * A * B;

			A = AA + CA;
			B = BB + CB;

			if (abs(AA + BB) > 16) break;

			N++;
		}

		let Brightness = map(N, 0, 100, 0, 255);

		if (100 === N) {
			Brightness = 0;
		}

		let Pixel = (x + y * width) * 4;

		pixels[Pixel + 0] = Brightness;
		pixels[Pixel + 1] = Brightness;
		pixels[Pixel + 2] = Brightness;

		pixels[Pixel + 3] = 255;
	}

	updatePixels();
}