import Restaurant from "./images/restaurant.jpg";

function appendHomeContent() {

	const content = document.querySelector("#content");

	const header = document.createElement("h1");
	header.textContent = "Restreasdefreraunt";
	content.appendChild(header);

	const image = document.createElement("img");
	image.src = Restaurant;
	image.alt = "A restaurant with chilly atmosphere";
	content.appendChild(image);

	const p1 = document.createElement("p");
	p1.textContent = "Restaurant X is a true gem in the world of dining. Their dishes are created with only the freshest and highest quality ingredients, and every bite is bursting with flavor. From their juicy steaks to their perfectly cooked chicken, Restaurant X's menu has something for everyone.";
	content.appendChild(p1);

	const p2 = document.createElement("p");
	p2.textContent = "But it's not just the food that makes Restaurant X stand out. The atmosphere is warm and inviting, making it the perfect spot for a romantic dinner or a night out with friends. The attentive and friendly staff will make you feel right at home, and the elegant décor adds to the overall dining experience.";
	content.appendChild(p2);

	const p3 = document.createElement("p");
	p3.textContent = "Whether you're looking for a quick lunch or a leisurely dinner, Restaurant X offers impeccable service and delicious food that will leave you satisfied and coming back for more. Don't miss out on the chance to dine at this amazing restaurant and experience their truly exceptional cuisine for yourself.";
	content.appendChild(p3);

}
export { appendHomeContent };