// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function clickNeonSlide(e) {
	var target = getClosestClass(e.target, 'js-sldr');
	if (target) {
		var anchor = target.getAttribute('href').split('#')[1];
		renderNeonSlide(anchor);
	}
};

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

function renderNeonSlide(newSlideId) {

	// old
	var oldSlideId = neonSlidesContainer.dataset.currentSlide,
		oldSlideElement = document.getElementById(oldSlideId),
		body = document.body
	;
	if (oldSlideElement) {
		oldSlideElement.classList.add('ani-exit-slide');
		oldSlideElement.classList.remove('ani-enter-slide');
	}

	// new
	if (newSlideId !== '') {
		neonSlidesContainer.dataset.currentSlide = newSlideId;
		newSlideElement = document.getElementById(newSlideId);
		if (newSlideElement) {
			newSlideElement.classList.add('ani-enter-slide');
			newSlideElement.classList.remove('ani-exit-slide');
		}
		renderNeonNav(newSlideId);
		if (newSlideId === 'best-performer') {
			body.classList.add('show-footer');
			body.classList.remove('hide-footer');
		}
		else {
			body.classList.remove('show-footer');
			body.classList.add('hide-footer');
		}
	}

}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function renderNeonNav(newSlideId) {
	if (newSlideId === 'introduction') {
		neonNav.classList.remove('ani-enter-nav');
		neonNav.classList.add('ani-exit-nav');
	}
	else {
		neonNav.classList.remove('ani-exit-nav');
		neonNav.classList.add('ani-enter-nav');
	}
	// Try and select the new slide
	var navItems = document.querySelectorAll('#js-neon-how-it-works-nav .timeline-nav-item');
	var navItem = document.querySelector('#js-neon-how-it-works-nav .-' + newSlideId);
	if (navItems) {
		for (var i = 0; i < navItems.length; i++) {
			navItems[i].classList.remove('-selected');
			navItems[i].classList.remove('-selected-border');
		}
	}
	if (navItem) {
		navItem.classList.add('-selected');
		navItem.classList.add('-selected-border');
	}
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// Entry Point

var neonSlides = document.getElementsByClassName('js-neon-slide'),
	neonSlidesContainer = document.getElementById('js-neon-slides'),
	neonObstacles = document.getElementById('js-how-it-works-obstacles'),
	neonNav = document.getElementById('js-neon-how-it-works-nav')
;
for (var i = 0; i < neonSlides.length; i++) {
	neonSlides[i].addEventListener('click', clickNeonSlide, false);
}
neonNav.addEventListener('click', clickNeonSlide, false);
renderNeonSlide('introduction');

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
