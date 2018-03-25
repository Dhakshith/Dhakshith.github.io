let Canv;
let Link;

let Mapimg;
let Quakes;

let P1 = "https://api.mapbox.com/styles/v1/mapbox/streets-v10/static/0,0,";
let P2 = "?access_token=pk.eyJ1IjoiZHVja2l0IiwiYSI6ImNqZjVpbDhkdzBlZjYycXBuNGZyem9pM3gifQ.9rOPiikRIoiRKdvOAgFrXQ";

let W;
let H;

let Zoom = 1;

let Clat = 0;
let Clon = 0;

let Lati = 11.0168;
let Long = 76.9558;

let Center;
let Normal;

let Sr = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.csv";

function preload() {
	W = min(windowWidth,  1280);
	H = W / 2;

	Link = P1 + Zoom + "/" + W + "x" + H + P2;

	Mapimg = loadImage(Link);
	Quakes = loadStrings(Sr);
}

function Merca(lati, long) {
	lati = radians(lati);
	long = radians(long);

	let a = ((H / 2) / PI) * pow(2, Zoom);
	let b = long + PI;
	let c = tan(QUARTER_PI + lati / 2);
	let d = PI - log(c);

	return createVector(a * b, a * d);
}

function setup() {
	Canv = createCanvas(W, H);

	Canv.position(windowWidth / 2 - width / 2, windowHeight / 2 - height / 2);

	translate(width / 2, height / 2);

	imageMode("center");
	image(Mapimg, 0, 0);

	Center = Merca(Clat, Clon);

	for (let i = 1; i < Quakes.length; i++) {
		let Data = Quakes[i].split(/,/);

		let Lat = Data[1];
		let Lon = Data[2];
		let Mag = Data[4];

		Mag = pow(10, Mag / 2);

		let Diameter = map(Mag, 1, 100000, 2.5, 500);

		let Normal = p5.Vector.sub(Merca(Lat, Lon), Center);

		stroke(255, 0, 255, 200);
		fill(255, 0, 255, 200);
		ellipse(Normal.x, Normal.y, Diameter);
	}
}