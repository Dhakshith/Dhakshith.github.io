let Funcap = x => x / 255;

function Epoch(Str, Data) {
	if (Str === "Train") {
		for (let i = 0; i < Data.length; i++) {
			let data = Data[i];

			let inputs = Array.from(data).map(Funcap);

			let label = data.Label;

			let targets = Array(3).fill(0);

			targets[label] = 1;

			Net.train(inputs, targets);
		}
	} else {
		let Correct = 0;

		for (let i = 0; i < Data.length; i++) {
			let Input = Array.from(Data[i]).map(Funcap);
			let Guess = Net.predict(Input);
			let Class = Guess.indexOf(max(Guess));

			if (Class == Data[i].Label) Correct++;
		}

		return Correct / Data.length * 100;
	}
}