chrome.runtime.onMessage.addListener(ReceivedMessage);

let Url1 = "https://images.unsplash.com/photo-";
let Url2 = "?auto=format&fit=crop&w=";
let Url3 = "&q=80";
let FluffyKitten = Url1 + "1445499348736-29b6cdfc03b9" + Url2 + "1650" + Url3;
let AKittenOnBed = Url1 + "1494256997604-768d1f608cac" + Url2 + "1101" + Url3;
let BlueEyedKitn = Url1 + "1472491235688-bdc81a63246e" + Url2 + "1050" + Url3;
let KittenInHand = Url1 + "1445499348736-29b6cdfc03b9" + Url2 + "1050" + Url3;
let KittenOnTree = Url1 + "1503844281047-cf42eade5ca5" + Url2 + "1055" + Url3;
let filenames = [
    AKittenOnBed,
    BlueEyedKitn,
    KittenInHand,
    KittenOnTree,
    FluffyKitten
]

function randomImage(file) {
    return file[Math.floor(Math.random() * file.length)];
}

function ReceivedMessage(message, sender, sendResponse) {
	var Images = document.getElementsByTagName('img');

	for (var i = 0; i < Images.length; i++) {
		let Index = randomImage(filenames);
		Images[i].src = Index;
	}
}