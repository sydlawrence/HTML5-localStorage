// define the variables
var btn, content;

// when loaded
window.onload = function() {

	// check browser support
	if (!window.localStorage) {
	
		// display error for lack of support
		alert('Your browser does not support localStorage');
	
	}

	// get the elements
	input = document.querySelector("#text_input");
	results = document.querySelector("#results");
		
	// listen for click on button
	input.onkeyup = function() {
		
		// set the text
		results.innerHTML = input.value;
		setData(input.value);
	};
	
	input.value = getData();
	results.innerHTML = getData();
	
	
	clear = document.querySelector("#clear");
	clear.onclick = function() {
		setData('');
		results.innerHTML = "";
		input.value = "";
	}
};


function getData() {
	if (!window.localStorage['data'])
		return '';
	return window.localStorage['data'];
}

function setData(data) {
	window.localStorage['data'] = data;
}
