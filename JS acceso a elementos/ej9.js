let link = document.createElement("a");
link.href = "https://github.com/AlejandroCaleya";
link.textContent = "GitHub";

document.body.appendChild(link);

link.addEventListener("mouseover", () => (link.style.textDecoration = "none"));
