function setActive()
{
	const navbar = document.querySelector("header nav ul");
	let navItems = navbar.querySelectorAll("li");
	navItems.forEach((item) => {
		if (item.textContent.toLowerCase() == page)
		{
			let currentClasses = item.getAttribute("class")
			if (currentClasses == null)
			{
				currentClasses = "";
			}
			else
			{
				currentClasses += " ";
			}
			item.setAttribute("class", currentClasses + "active");
		}
	});
}
const logoDiv = document.querySelector("header div.logo")
logoDiv.addEventListener("click", () => {
	window.open("/", "_self");
});
const hamburger = document.querySelector(".hamburger");
function toggleNav()
{
	const nav = document.querySelector("header nav");
	nav.classList.toggle("hidden");
	nav.classList.toggle("absolute");
	nav.classList.toggle("top-14");
	nav.classList.toggle("left-0");
	nav.classList.toggle("bg-pri");
}
window.addEventListener("DOMContentLoaded", setActive);
hamburger.addEventListener("click", toggleNav);
