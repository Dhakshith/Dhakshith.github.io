var Txt;

var Words;
var Token;

var Counts = {};
var Keeees = [];

function preload() {
	Txt = loadStrings("Rainbow.txt")
}

function Capitalize(Wire) {
	var Char = Wire.charAt(0);
	var Case = Char.toUpperCase();
	var Slic = Wire.slice(1);

	return Case + Slic;
}

function setup() {
	Words = Txt.join("\n");
	Token = Words.split(/\W+/);

	for (var Iterate = 0; Iterate < Token.length; Iterate += 1) {
		var Word = Capitalize(Token[Iterate]);

		if (!/\d+/.test(Word)) {
			if (Counts[Word] === undefined) {
				Counts[Word]  =  1;
				Keeees.push(Word);
			} else {
				Counts[Word]  = Counts[Word] + 1;
			}
		}
	}

	function Compare(A, B) {
		var CA = Counts[A];
		var CB = Counts[B];

		return CA - CB;
	}

	Keeees.sort(Compare);

	for (var Iterate = 0; Iterate < Keeees.length; Iterate += 1) {
		var K = Keeees[Iterate];
		createP(K + " " + Counts[K]);
	}

	noCanvas();
}