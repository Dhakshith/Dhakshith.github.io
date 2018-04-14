function setup() {
	noCanvas();

	let Bot = new RiveScript();

	Bot.loadFile("Brain.rive", GeniusReady, StupidError);

	function GeniusReady() {
		console.log("Chatbot Enabled !");

		Bot.sortReplies();

		let JSNum = floor(random(1, 20));
		let Reply = Bot.reply("local-user", "secretly set the number to this integer" + " " + JSNum);
	}

	function StupidError(Err) {
		console.log("Chatbot Error: " + Err);
	}

	let Button = select("#Submit");
	let Output = select("#Output");
	let UserInp = select("#Input");

	Button.mousePressed(Chat);

	function Chat() {
		let Input = UserInp.value();
		let Reply = Bot.reply("local-user", Input);

		Output.html(Reply);
	}
}
