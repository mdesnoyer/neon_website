// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function clickNeonHamburger(e) {
	document.body.classList.toggle('hamburger-mode-is-hidden');
	document.body.classList.toggle('hamburger-mode-is-shown');
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// Entry Point

var neonHamburger = document.getElementById('js-hamburger');
if (neonHamburger) {
	neonHamburger.addEventListener('click', clickNeonHamburger, false);
}

var neonX = document.getElementById('js-x');
if (neonX) {
	neonX.addEventListener('click', clickNeonHamburger, false);
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
