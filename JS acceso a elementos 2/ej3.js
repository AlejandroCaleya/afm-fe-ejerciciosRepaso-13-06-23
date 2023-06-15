let code = document.createElement("input");
code.type = "email";
document.body.appendChild(code);

var regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
function check() {
	if (regex.test(code.value)) {
		code.style.borderColor = "greenyellow";
	} else {
		alert("Correo electrónico inválido");
	}
}

code.addEventListener("blur", check);
