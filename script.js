let sketch = document.getElementById("sketch");
let button = document.getElementById("number");
let numberSquare = document.getElementById("squares");

let newSquare = (totalSquares) => {
	let square = document.createElement("div");
	square.setAttribute("class", "square");
	square.setAttribute(
		"style",
		`width: ${898 / totalSquares}px; height: ${
			470 / totalSquares
		}px; opacity: 0;`
	);
	sketch.appendChild(square);
};

function createSquares(numberOfSquares) {
	if (sketch.childNodes.length > 0) {
		while (sketch.firstChild) {
			sketch.removeChild(sketch.firstChild);
		}
	}
	let createdSquares = 0;
	while (createdSquares < numberOfSquares * numberOfSquares) {
		newSquare(numberOfSquares);
		createdSquares++;
	}
	let squares = [...sketch.querySelectorAll(".square")];
	squares.forEach((e) => {
		let opacityColor = 0;
		e.addEventListener("mouseover", () => {
			opacityColor += 0.1;
			e.style.opacity = opacityColor;
		});
	});
}

document.addEventListener("DOMContentLoaded", () => createSquares(16));

button.addEventListener("click", (ev) => {
	ev.preventDefault();
	createSquares(Number(numberSquare.value));
});
