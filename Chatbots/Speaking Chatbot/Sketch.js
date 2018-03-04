let Speak;
let SpeakRec;

let Continue = true;
let Intermi = false;

function setup() {
	noCanvas();

	Speak = new p5.Speech();
	SpeakRec = new p5.SpeechRec("en-US", GotSpeech);

	SpeakRec.start(Continue, Intermi);

	let Robot = new RiveScript();

	Robot.loadFile("Brain.rive", GeniusReady, StupidError);

	function GeniusReady() {
		console.log("ChatRobot Enabled !");

		Robot.sortReplies();
	}

	function StupidError(Err) {
		console.log("ChatRobot Error : " + Err);
	}

	function GotSpeech() {
		if (SpeakRec.resultValue) {
			let Input = SpeakRec.resultString;
			let Reply = Robot.reply("local-user", Input);

			Speak.setVoice("Google US English");
			Speak.speak(Reply);
		}
	}
}

// Working.....