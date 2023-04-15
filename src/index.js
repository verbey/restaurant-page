import { appendHomeContent } from "./home.js";
import { appendContactContent } from "./contact.js";
import { appendMenuContent } from "./menu.js";

const content = document.querySelector("#content");

const header = document.createElement("h1");
header.textContent = "Title of glorious restaurant";
content.appendChild(header);

const nav = document.createElement("nav");
const home = document.createElement("div");
home.textContent = "Home";
const contact = document.createElement("div");
contact.textContent = "Contact";
const menu = document.createElement("div");
menu.textContent = "Menu";

function clearTabCont(tabCont) {
	while (tabCont.firstChild) {
		tabCont.firstChild.remove();
	}
}

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

clearTabCont(tabCont);
appendHomeContent(tabCont);