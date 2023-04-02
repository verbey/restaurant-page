function appendContactContent() {

	const content = document.querySelector("#content");

	const h2 = document.createElement("h2");
	h2.textContent = "Sanitar";
	content.appendChild(h2);

	const phoneNum = document.createElement("div");
	phoneNum.textContent = "Phone: +1 324 234 432 234";
	content.appendChild(phoneNum);

}
export { appendContactContent };