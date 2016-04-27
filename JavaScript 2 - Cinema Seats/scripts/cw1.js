onload = function() {
	myAnchors = document.getElementById("table1").getElementsByTagName("a");
	myImages = document.getElementById("table1").getElementsByTagName("img");
	for ( var i = 0; i < myAnchors.length; i++) {
		myAnchors[i].setAttribute('onmouseover', 'gettaken(' + i + ')');
		myAnchors[i].setAttribute('onmouseout', 'getavailable(' + i + ')');
		myAnchors[i].setAttribute('onclick', 'selectseat(' + i + ')');
		myAnchors[i].setAttribute('id', 'A' + i);
		myImages[i].setAttribute('id', i);
	}
}
function getavailable(id) {
	if (myImages[id].getAttribute('src') != 'images/taken.gif') {
	myImages[id].setAttribute('src', 'images/available.gif');
}
}
function gettaken(id) {
	if (myImages[id].getAttribute('src') != 'images/taken.gif') {
	myImages[id].setAttribute('src', 'images/mine.gif');
}
}


function selectseat(id) {
	if (myImages[id].getAttribute('src') != 'images/taken.gif'){
	if (myAnchors[id].getAttribute('onmouseover') == '') {
		myAnchors[id].setAttribute('onmouseover', 'gettaken(' + id + ')');
		myAnchors[id].setAttribute('onmouseout', 'getavailable(' + id + ')');
	} else {
		myAnchors[id].setAttribute('onmouseover', '');
		myAnchors[id].setAttribute('onmouseout', '');
		myImages[id].setAttribute('src', 'images/mine.gif');
	}
}
}
function confirmChoices() {
	var amount = 0;
	for ( var i = 0; i < myAnchors.length; i++) {
		myAnchors[i].setAttribute('onmouseover', '');
		myAnchors[i].setAttribute('onmouseout', '');
		myAnchors[i].setAttribute('onclick', '');

		if (myImages[i].getAttribute('src') == 'images/mine.gif') {
			if (i <= 17) {
				amount = amount + 10;
			} else {
				amount = amount + 5;
			}
			document.getElementById("Amount").innerHTML = 'Total Price: £'+ amount;
		}

	}

	document.getElementById("checkout").disabled = false;
}

function resetAll() {
	window.location = "home.html";
}
function cancelChoices() {
	
	for ( var i = 0; i < myAnchors.length; i++) {
		if (myImages[i].getAttribute('src') == 'images/mine.gif') {
			myImages[i].setAttribute('src', 'images/available.gif');
		}
		myAnchors[i].setAttribute('onmouseover', 'gettaken(' + i + ')');
		myAnchors[i].setAttribute('onmouseout', 'getavailable(' + i + ')');
		myAnchors[i].setAttribute('onclick', 'selectseat(' + i + ')');
	}
	document.getElementById("Amount").innerHTML = ' Total Price ';
	document.getElementById("checkout").disabled = true;
}

function NewCustomer() 
{
	
	for ( var i = 0; i < myAnchors.length; i++) {
		if (myImages[i].getAttribute('src') == 'images/mine.gif') {
			myImages[i].setAttribute('src', 'images/available.gif');
		}
		myAnchors[i].setAttribute('onmouseover', 'gettaken(' + i + ')');
		myAnchors[i].setAttribute('onmouseout', 'getavailable(' + i + ')');
		myAnchors[i].setAttribute('onclick', 'selectseat(' + i + ')');
	}
	document.getElementById("Amount").innerHTML = ' Total Price ';
	document.getElementById("checkout").disabled = true;
}

function checkOut() {
	for ( var i = 0; i < myAnchors.length; i++) {
		if (myImages[i].getAttribute('src') == 'images/mine.gif') {
			myImages[i].setAttribute('src', 'images/taken.gif');
		}
		myAnchors[i].setAttribute('onmouseover', 'gettaken(' + i + ')');
		myAnchors[i].setAttribute('onmouseout', 'getavailable(' + i + ')');
		myAnchors[i].setAttribute('onclick', 'selectseat(' + i + ')');
	}

}