chrome.browserAction.onClicked.addListener(ButtonClicked);

function ButtonClicked(tab) {
	let MESSAGE = {
		txt: "Hello !!!"
	}

	chrome.tabs.sendMessage(tab.id, MESSAGE);
}