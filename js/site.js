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

	if (e.tagName === "IMG" || e.classList.contains("imageviewer") || e.classList.contains("imageviewer--content")) {
		handlePopup(e);
	}
}

function handlePopup(e) {
	if (e === null || e === undefined || e === "") {
		toggleModal();
	}

	else {
		if (e.src !== undefined) {
			let url = e.src;
			let image = document.querySelector(".imageviewer--image");
			image.src = url;
		}

		toggleModal();
	}
}

function toggleModal() {
	let body = document.querySelector("body");
	let viewer = document.querySelector(".imageviewer");

	body.classList.toggle("noscroll");
	viewer.classList.toggle("active");
}
