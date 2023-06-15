// WORK IN PROGRESS NOT FINISHED

let form = document.createElement("form");
form.action = "https://releases.jquery.com";

let label1 = document.createElement("label");
label1.textContent = "Introduce el mail:";
let code = document.createElement("input");

let label2 = document.createElement("label");
label2.textContent = "Introduce el nombre:";
let nombre = document.createElement("input");

let label3 = document.createElement("label");
label3.textContent = "Introduce el genero:";
let gender = document.createElement("input");
let gender1 = document.createElement("input");
let gender2 = document.createElement("input");
gender.type = "checkbox";
gender1.type = "checkbox";
gender2.type = "checkbox";

gender.name = "grupo";
gender1.name = "grupo";
gender2.name = "grupo";

label1.appendChild(code);
form.appendChild(label1);

label2.appendChild(nombre);
form.appendChild(label2);

label3.appendChild(gender);
label3.appendChild(gender1);
label3.appendChild(gender2);
form.appendChild(label3);

document.body.appendChild(form);

let btn = document.createElement("button");
btn.type = "submit";
btn.textContent = "SEND";

form.appendChild(btn);

// function (params) {

// }
