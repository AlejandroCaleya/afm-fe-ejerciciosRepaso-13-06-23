let support = document.createElement("span");
let black = document.createElement("strong");

function refresh() {
	var date = new Date();
	var hour = date.getHours();
	var minute = date.getMinutes();
	var second = date.getSeconds();
	support.textContent = "Hora actual: " + hour + ":" + minute + ":" + second;
}

setInterval(refresh, 1000);

black.appendChild(support);
document.body.appendChild(black);
