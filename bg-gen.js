var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var sp1 = document.getElementById("sp1");
var sp2 = document.getElementById("sp2");
var sp3 = document.getElementById("sp3");
var btn = document.getElementById("btn");

sp1.innerHTML = color1.value;
sp2.innerHTML = color2.value;
sp3.innerHTML = body.style.background + ";";

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value+")";
	sp1.innerHTML = color1.value;
	sp2.innerHTML = color2.value;
	sp3.textContent = body.style.background + ";";
}

function randomColor() {
	var letters='0123456789ABCDEF';
	var color = '#';
	for (var i=0 ; i<6 ; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function setGradientRandom() {
	var col1 = randomColor();
	var col2 = randomColor();
	body.style.background = "linear-gradient(to right, " + col1 + ", " + col2 +")";
	sp1.innerHTML = col1;
	sp2.innerHTML = col2;
	sp3.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

btn.addEventListener("click" , setGradientRandom );