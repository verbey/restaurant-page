import { appendHomeContent } from "./home.js";
import { appendContactContent } from "./contact.js";
import { appendMenuContent } from "./menu.js";

const content = document.querySelector("#content");

const header = document.createElement("h1");
header.textContent = "Title of glorious restaurant";
content.appendChild(header);

const nav = document.createElement("nav");
const home = document.createElement("div");
const contact = document.createElement("div");
const menu = document.createElement("div");

home.addEventListener("click", () => {
	clearTabCont(tabCont);
	appendHomeContent(tabCont);
});

contact.addEventListener("click", () => {
	clearTabCont(tabCont);
	appendContactContent(tabCont);
});

menu.addEventListener("click", () => {
	clearTabCont(tabCont);
	appendMenuContent(tabCont);
});

nav.appendChild(home);
nav.appendChild(contact);
nav.appendChild(menu);
content.appendChild(nav);

const tabCont = document.createElement("div");
tabCont.classList.add("tabCont");
content.appendChild(tabCont);

function clearTabCont(tabCont) {
	while (tabCont.firstChild) {
		tabCont.firstChild.remove();
	}
}