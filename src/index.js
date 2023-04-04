import { appendHomeContent } from "./home.js";
import { appendContactContent } from "./contact.js";
import { appendMenuContent } from "./menu.js";

if (Math.floor(Math.random() * 2) === 0) appendHomeContent();
else if (Math.floor(Math.random() * 2) === 0) appendContactContent();
else appendMenuContent();