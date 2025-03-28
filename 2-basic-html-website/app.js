const labels = document.querySelectorAll(".contact-us label");

labels.forEach((label) => {
	label.innerHTML = label.textContent
		.split("")
		.map((letter, index) => `<span style="transition-delay:${index * 50}ms">${letter}</span>`)
		.join("");
});
