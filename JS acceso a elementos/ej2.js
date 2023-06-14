let div = document.createElement("div");
div.style.backgroundColor = "blue";
div.style.height = "20vh";
div.style.width = "20vw";
document.body.appendChild(div);

let button = document.createElement("button");
button.textContent = "Button";
document.body.appendChild(button);
button.addEventListener("click", changeColor);

function changeColor() {
	div.style.backgroundColor = "green";
}
