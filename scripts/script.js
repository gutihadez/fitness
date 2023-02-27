/* 
	Student Name: Agustin Hernandez
	File Name: script.js
	Date: 02/24/2023
*/

//Hamburger menu Function
function hamburger() {
	var menu = document.getElementById("menu-links");
	var logo = document.getElementById("ffc-log");
	if (menu.style.display === "block" && logo.style.display === "none") {
		menu.style.display = "none";
		logo.style.display = "block";
	} else {
		menu.style.display = "block";
		logo.style.display = "none";
	}
}
