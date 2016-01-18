// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function getClosestClass(elem, selector) {
	for (; elem && elem !== document; elem = elem.parentNode ) {
		if (elem.classList.contains(selector)) {
			return elem;
		}
	}
	return false;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
