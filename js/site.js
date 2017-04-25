document.addEventListener("DOMContentLoaded", function () {
	document.addEventListener("click", function(e) {
		eventHandler(e.target);
	}, true);
});

function eventHandler(e) {
	if (e.classList.contains("accordion")) {
		e.nextElementSibling.classList.toggle("isOpen");
	}
}
