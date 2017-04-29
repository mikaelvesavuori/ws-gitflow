document.addEventListener("DOMContentLoaded", function () {
	document.addEventListener("click", function(e) {
		eventHandler(e.target);
	}, true);
});

function eventHandler(e) {
	if (e.classList.contains("accordion")) {
		e.classList.toggle("active");
		e.nextElementSibling.classList.toggle("isOpen");
	}

	if (e.classList.contains("menu-btn")) {
		e.nextElementSibling.classList.toggle("isOpen");
	}
}
