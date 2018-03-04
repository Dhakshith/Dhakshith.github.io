chrome.runtime.onMessage.addListener(ReceivedMessage);

const ColorsArray = [
	'red',
	'red',
	'red',
	'green',
	'green',
	'green',
	'blue',
	'blue',
	'blue',
	'yellow',
	'yellow',
	'yellow',
	'orange',
	'orange',
	'orange',
	'aqua',
	'aqua',
	'aqua',
	'indigo',
	'indigo',
	'indigo',
	'violet',
	'violet',
	'violet',
	'black'
]

function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)]
}

function ReceivedMessage(message, sender, sendResponse) {
	console.log(message.txt);

	var HBodyElement = document.getElementsByTagName('body');
	var PElementsAll = document.getElementsByTagName('p');
	var AElementsAll = document.getElementsByTagName('a');
	var HElementsOne = document.getElementsByTagName('h1');
	var HElementsTwo = document.getElementsByTagName('h2');
	var HElementsThr = document.getElementsByTagName('h3');
	var HElementsFor = document.getElementsByTagName('h4');
	var HElementsFiv = document.getElementsByTagName('h5');
	var HElementsSix = document.getElementsByTagName('h6');
	var ULElementsAl = document.getElementsByTagName('ul');
	var OLElementsAl = document.getElementsByTagName('ol');
	var LIElementsAl = document.getElementsByTagName('li');
	var MainDivElmnt = document.getElementsByTagName('div');
	var MainInputElt = document.getElementsByTagName('input');
	var MainSpanElts = document.getElementsByTagName('span');
	var MyButtonElts = document.getElementsByTagName('button');
	var MyTdElements = document.getElementsByTagName('td');

	for (var i = 0; i < PElementsAll.length; i++) {
		PElementsAll[i].style['color'] = randomColor(ColorsArray);
	}
	for (var i = 0; i < AElementsAll.length; i++) {
		AElementsAll[i].style['color'] = randomColor(ColorsArray);
	}
	for (var i = 0; i < HElementsOne.length; i++) {
		HElementsOne[i].style['color'] = randomColor(ColorsArray);
	}
	for (var i = 0; i < HElementsTwo.length; i++) {
		HElementsTwo[i].style['color'] = randomColor(ColorsArray);
	}
	for (var i = 0; i < HElementsThr.length; i++) {
		HElementsThr[i].style['color'] = randomColor(ColorsArray);
	}
	for (var i = 0; i < HElementsFor.length; i++) {
		HElementsFor[i].style['color'] = randomColor(ColorsArray);
	}
	for (var i = 0; i < HElementsFiv.length; i++) {
		HElementsFiv[i].style['color'] = randomColor(ColorsArray);
	}
	for (var i = 0; i < HElementsSix.length; i++) {
		HElementsSix[i].style['color'] = randomColor(ColorsArray);
	}
	for (var i = 0; i < ULElementsAl.length; i++) {
		ULElementsAl[i].style['color'] = randomColor(ColorsArray);
	}
	for (var i = 0; i < OLElementsAl.length; i++) {
		OLElementsAl[i].style['color'] = randomColor(ColorsArray);
	}
	for (var i = 0; i < LIElementsAl.length; i++) {
		LIElementsAl[i].style['color'] = randomColor(ColorsArray);
	}
	for (var i = 0; i < HBodyElement.length; i++) {
		HBodyElement[i].style['color'] = randomColor(ColorsArray);
	}
	for (var i = 0; i < MainInputElt.length; i++) {
		MainInputElt[i].style['color'] = randomColor(ColorsArray);
	}
	for (var i = 0; i < MainSpanElts.length; i++) {
		MainSpanElts[i].style['color'] = randomColor(ColorsArray);
	}
	for (var i = 0; i < MyButtonElts.length; i++) {
		MyButtonElts[i].style['color'] = randomColor(ColorsArray);
	}
	for (var i = 0; i < MyTdElements.length; i++) {
		MyTdElements[i].style['color'] = randomColor(ColorsArray);
	}
}