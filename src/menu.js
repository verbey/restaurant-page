function appendMenuContent(content) {
	const h2 = document.createElement("h2");
	h2.textContent = "Borscht";
	content.appendChild(h2);

	const borscht = document.createElement("div");
	borscht.textContent = "Something something, Ukrainian borscht, hurr durr";
	content.appendChild(borscht);
}
export { appendMenuContent };