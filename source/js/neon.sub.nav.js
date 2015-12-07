// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function clickNeonSubNavKey(e) {
	var target = getClosestClass(e.target, 'js-sub-nav');
	if (target) {
		target.classList.toggle('is-open');
		target.classList.toggle('is-closed');
	}
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function clickNeonSubNavValue(e) {
	var subNavValue = e.currentTarget,
		subNav = getClosestClass(subNavValue, 'js-sub-nav'),
		subNavValueSiblings = subNav.getElementsByClassName('js-sub-nav-value')
		textToUpdate = document.getElementById('js-sub-nav-key-additional')
	;
	e.preventDefault();
	if (textToUpdate) {
		for (var i = 0; i < subNavValueSiblings.length; i++) {
			subNavValueSiblings[i].classList.remove('is-selected');
		}
		subNavValue.classList.add('is-selected');
		textToUpdate.textContent = subNavValue.textContent;
	}
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// Entry Point

var neonSubNavKeys = document.getElementsByClassName('js-sub-nav-key');
for (var i = 0; i < neonSubNavKeys.length; i++) {
	neonSubNavKeys[i].addEventListener('click', clickNeonSubNavKey, false);
}

var neonSubNavValues = document.getElementsByClassName('js-sub-nav-value');
for (var j = 0; j < neonSubNavValues.length; j++) {
	neonSubNavValues[j].addEventListener('click', clickNeonSubNavValue, false);
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
