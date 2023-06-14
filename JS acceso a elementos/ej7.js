let formulario = document.createElement("input");
let btn = document.createElement("button");
btn.textContent = "Button";
document.body.appendChild(formulario);
document.body.appendChild(btn);

btn.addEventListener("click", valid);

function valid() {
	let regex = /.+/;
	if (regex.test(formulario.value)) {
		alert("Formulario enviado");
	} else {
		alert("Rellena el formulario");
	}
}
