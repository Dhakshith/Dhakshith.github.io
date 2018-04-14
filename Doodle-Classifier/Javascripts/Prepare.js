function Prepare(Category, Label) {
	Category.Training = [];
	Category.Tresting = [];

	for (let i = 0; i < 1000; i++) {
		let Off = i * Length;

		if (i < 800) {
			Category.Training[i] = Category.Data.bytes.subarray(Off, Off + Length);
			Category.Training[i].Label = Label;
		} else {
			Category.Tresting[i - 800] = Category.Data.bytes.subarray(Off, Off + Length);
			Category.Tresting[i - 800].Label = Label;
		}
	}
}