let sentence = prompt("Introduce una frase: ");

let text = document.createElement("h3");
text.textContent = sentence;
document.body.appendChild(text);

let btn = document.createElement("button");
btn.textContent = "ALERT";
document.body.appendChild(btn);

btn.addEventListener("click", () => alert(sentence));
