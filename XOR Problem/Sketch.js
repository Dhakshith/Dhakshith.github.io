let Net, Data, Cols, Rows, Size, R = 7.5, TrainData = [
	{
		inputs: [0, 0],
		outputs: [0]
	},
	{
		inputs: [0, 1],
		outputs: [1]
	},
	{
		inputs: [1, 0],
		outputs: [1]
	},
	{
		inputs: [1, 1],
		outputs: [0]
	}
];

function setup() {
	if (windowWidth < windowHeight) {
		Size = Math.floor(Math.floor((windowWidth - 30) / R) * R), Height = Math.floor(Math.floor((windowWidth - 30) / R) * R);
	} else {
		Size = Math.floor(Math.floor((windowHeight - 30) / R) * R), Height = Math.floor(Math.floor((windowHeight - 30) / R) * R);
	}

	let C = createCanvas(Size, Size);

	background(color(2, 0, 3));
	noStroke();

	C.position(windowWidth / 2 - width / 2, windowHeight / 2 - height / 2);

	Net = new NeuralNetwork(2, 10, 1);

	Cols = width / R;
	Rows = height / R;
};

function draw() {
	for (let i = 0; i < 1000; i++) {
		Data = random(TrainData);
		Net.train(Data.inputs, Data.outputs);
	}

	for (let i = 0; i < Cols; i++) for (let j = 0; j < Rows; j++) {
		fill(Net.predict([i / Cols, j / Rows]) * 255);
		rect(i * R, j * R, R, R);
	}
};