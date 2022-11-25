function modal_button_open_handler(button) {
	var target = button.dataset.target;

	button.addEventListener('click', function() {
		document.querySelector(target).classList.add('modal--open');
	});
}

function modal_close_handler(modal) {
	button = modal.querySelector('.modal__button-close');

	button.addEventListener('click', function() {
		modal.classList.remove('modal--open');
	});

	modal.addEventListener('click', function(e) {
		if (!e.target.closest('.modal__content')) {
			modal.classList.remove('modal--open');
		}
	})
}

var modals = document.querySelectorAll('.modal--dialog');
var openbuttons = document.querySelectorAll('.modal--button');

for (var i = modals.length - 1; i >= 0; i--) {
	modal_close_handler(modals[i]);
}

for (var i = openbuttons.length - 1; i >= 0; i--) {
	modal_button_open_handler(openbuttons[i]);
}