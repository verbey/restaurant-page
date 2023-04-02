import { appendHomeContent } from "./home.js";
import { appendContactContent } from "./contact.js";

if (Math.floor(Math.random() * 2) === 0) appendHomeContent();
else appendContactContent();