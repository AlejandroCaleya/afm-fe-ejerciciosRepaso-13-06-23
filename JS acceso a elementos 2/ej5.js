let element = document.createElement("div");
element.style.height = "20vh";
element.style.width = "20vw";
element.style.backgroundColor = "green";
document.body.appendChild(element);

let space = document.createElement("br");
document.body.appendChild(space);

let btn = document.createElement("button");
btn.textContent = "Button";
document.body.appendChild(btn);

btn.addEventListener("click", showHide);

function showHide() {
	if (element.style.visibility == "hidden") {
		element.style.visibility = "visible";
	} else {
		element.style.visibility = "hidden";
	}
}
