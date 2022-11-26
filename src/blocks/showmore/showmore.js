function showmore_click_handler(button, targets) {

	button.addEventListener('click', function() {

		if (button.classList.contains('showmore--is-visible')) {
			button.classList.remove('showmore--is-visible');
			for (var i = targets.length - 1; i >= 0; i--) {
				targets[i].style.display = '';
			}

		} else {
			button.classList.add('showmore--is-visible');
			for (var i = targets.length - 1; i >= 0; i--) {
				targets[i].style.display = targets[i].dataset.ds;
			}
		}
	});
}

showmore_buttons = document.querySelectorAll('.showmore--button');

for (var i = showmore_buttons.length - 1; i >= 0; i--) {
	target = showmore_buttons[i].dataset.target;
	targets = document.querySelectorAll('.showmore--item--'+target);
	
	showmore_click_handler(showmore_buttons[i], targets);
}