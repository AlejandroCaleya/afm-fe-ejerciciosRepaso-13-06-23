let code = document.createElement("input");
code.type = "color";
document.body.appendChild(code);

let btn = document.createElement("button");
btn.textContent = "ENVIAR";
btn.style.margin = "7px";
document.body.appendChild(btn);

btn.addEventListener("click", changeColor);

function changeColor() {
	let parraf = document.body.querySelectorAll("p");
	parraf.forEach((elemento) => {
		elemento.style.backgroundColor = code.value;
	});
}

// ----------Para cuando el input no es code.type = 'color'----------
// function changeColor() {
// 	var regex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
// 	if (regex.test(code.value)) {
// 		let parraf = document.body.querySelectorAll("p");
// 		parraf.forEach((elemento) => {
// 			elemento.style.backgroundColor = code.value;
// 		});
// 	} else {
// 		alert("Código de color inválido");
// 	}
// }
