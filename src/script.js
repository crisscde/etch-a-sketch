let sketch = document.getElementById("sketch");
let button = document.getElementById("number");
let numberSquare = document.getElementById("squares");
let randomColor = document.getElementById("random-color");
let color = document.getElementById("color");

const RANDOM_RGB = () => {
	const R = Math.floor(Math.random() * 255);
	const G = Math.floor(Math.random() * 255);
	const B = Math.floor(Math.random() * 255);
	return `rgb(${R} ${G} ${B})`;
};

const NEW_SQUARE = (totalSquares) => {
	let square = document.createElement("div");
	square.setAttribute("class", "square");
	square.setAttribute(
		"style",
		`width: ${998 / totalSquares}px; height: ${
			625 / totalSquares
		}px; opacity: 0`
	);
	sketch.appendChild(square);
};

let attachMouseOverEvent = () => {
	let squares = [...sketch.querySelectorAll(".square")];
	squares.forEach((element) => {
		let opacityColor = 0;
		element.addEventListener("mouseover", (squareEvent) => {
			let selectedColor = color.value;
			element.style.backgroundColor = selectedColor;
			opacityColor += 0.1;
			element.style.opacity = opacityColor;
		});
	});
};

function createSquares(numberOfSquares) {
	if (sketch.childNodes.length > 0) {
		while (sketch.firstChild) {
			sketch.removeChild(sketch.firstChild);
		}
	}
	let createdSquares = 0;
	while (createdSquares < numberOfSquares * numberOfSquares) {
		NEW_SQUARE(numberOfSquares);
		createdSquares++;
	}
	attachMouseOverEvent();
}
document.addEventListener("DOMContentLoaded", () => createSquares(16));

button.addEventListener("click", (ev) => {
	ev.preventDefault();
	createSquares(Number(numberSquare.value));
});
