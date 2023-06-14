let code = document.createElement("input");
code.type = "email";
document.body.appendChild(code);

var regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

if (regex.test(code.textContent)) {
} else {
	alert("Correo electrónico inválido");
}
