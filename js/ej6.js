document.body.style.height = "300vh";

addEventListener("scroll", size);

function size() {
	let text = document.getElementById("titol");
	text.style.fontSize = "50px";
}
