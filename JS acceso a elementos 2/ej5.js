let bdy = $("<div></div>").css("display", "flex").appendTo("body");
let bigImg = $("<div></div>").appendTo(bdy);
let images = $("<div></div>").appendTo(bdy).css("display", "flex");
let imagesSub1 = $("<div></div>").appendTo(images);
let imagesSub2 = $("<div></div>").appendTo(images);

var imgShow = $("<div></div>")
	.css({
		backgroundImage: "url(/imgs/img5.jpg)",
		width: "400px",
		height: "400px",
		backgroundSize: "cover",
		marginRight: "20px",
	})
	.appendTo(bigImg);

var img1 = $("<div></div>")
	.css({
		backgroundImage: "url(/imgs/img1.jpg)",
		width: "200px",
		height: "200px",
		backgroundSize: "cover",
	})
	.appendTo(imagesSub1)
	.on("click", () => swap(img1));

var img2 = $("<div></div>")
	.css({
		backgroundImage: "url(/imgs/img2.jpg)",
		width: "200px",
		height: "200px",
		backgroundSize: "cover",
	})
	.appendTo(imagesSub1)
	.on("click", () => swap(img2));

var img3 = $("<div></div>")
	.css({
		backgroundImage: "url(/imgs/img3.jpg)",
		width: "200px",
		height: "200px",
		backgroundSize: "cover",
	})
	.appendTo(imagesSub2)
	.on("click", () => swap(img3));

var img4 = $("<div></div>")
	.css({
		backgroundImage: "url(/imgs/img4.jpg)",
		width: "200px",
		height: "200px",
		backgroundSize: "cover",
	})
	.appendTo(imagesSub2)
	.on("click", () => swap(img4));

function swap(urlSwap) {
	let link = imgShow.css("backgroundImage");
	imgShow.css("backgroundImage", urlSwap.css("backgroundImage"));
	urlSwap.css("backgroundImage", link);
}
