function Branch(Len) {
	line(0, 0, 0, 0 - Len);
	translate(0, -Len);

	if (Len > 1) {
		push();
		rotate(+QUARTER_PI);

		Branch(Len * 0.67);
		pop();

		push();
		rotate(-QUARTER_PI);

		Branch(Len * 0.67);
		pop();
	}
}