function Capitalize(string) {
	var Character = string.charAt(0);
	var UpperCase = Character.toUpperCase();

	var SizePiece = string.slice(1);
	var ResultStr = UpperCase + SizePiece;

    return ResultStr;
}

function setup() {
	noCanvas();

	let lang = navigator.language || 'en-US';
	let speechRec = new p5.SpeechRec(lang, gotSpeech);

	let continuous = true;
	let interim = false;

	speechRec.start(continuous, interim);

	function gotSpeech() {
		if (speechRec.resultValue) {
			var string = Capitalize(speechRec.resultString);
			var Splits = string.split(" ");

			var Thread = string;

			if (Splits[0] == "Are"    ||
				Splits[0] == "Can"    ||
				Splits[0] == "Is"     ||
				Splits[0] == "Would"  ||
				Splits[0] == "Should" ||
				Splits[0] == "May"    ||
				Splits[0] == "Do"     ||
				Splits[0] == "Does"   ||
				Splits[0] == "What"   ||
				Splits[0] == "Why"    ||
				Splits[0] == "Where"  ||
				Splits[0] == "How"    ||
				Splits[0] == "Which"  ||
				Splits[0] == "When")  {
				Thread = string + " ? ";
			} else if (Splits[0] == "Sure"  ||
				       Splits[0] == "Hello" ||
				       Splits[0] == "Super" ||
				       Splits[0] == "Boom") {
				Thread = string + " ! ";
			} else {
				Thread = string + " . ";
			}

			createP(Thread);
		}
	}
}