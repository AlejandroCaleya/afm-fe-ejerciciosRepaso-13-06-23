let btn = document.createElement("button");
let list = document.createElement("ul");

btn.textContent = "Añadir elemento";
document.body.appendChild(btn);
document.body.appendChild(list);

let cont = 0;

function moreElements() {
	cont++;
	let element = document.createElement("li");
	element.textContent = cont;
	list.appendChild(element);
}

btn.addEventListener("click", moreElements);
