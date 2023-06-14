let option = document.createElement("select");
let opt1 = document.createElement("option");
opt1.textContent = "VERDE";
let opt2 = document.createElement("option");
opt2.textContent = "ROJO";
let opt3 = document.createElement("option");
opt3.textContent = "AZUL";

option.appendChild(opt1);
option.appendChild(opt2);
option.appendChild(opt3);
document.body.appendChild(option);

let btn = document.createElement("button");
btn.textContent = "Apply";
btn.style.margin = "7px";

document.body.appendChild(btn);

let head = document.body.querySelector("h2");

btn.addEventListener("click", action);

function action() {
	if (option.value == "VERDE") {
		head.style.color = "green";
	}
	if (option.value == "ROJO") {
		head.style.color = "red";
	}
	if (option.value == "AZUL") {
		head.style.color = "blue";
	}
}
