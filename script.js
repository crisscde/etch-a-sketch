let sketch = document.getElementById("sketch");
let button = document.getElementById("number");
let numberSquare = document.getElementById("squares");

function createSquares(numberOfSquares) {
	if (sketch.childNodes.length > 0) {
		while (sketch.firstChild) {
			sketch.removeChild(sketch.firstChild);
		}
	}
	let createdSquares = 0;
	while (createdSquares < numberOfSquares * numberOfSquares) {
		let square = document.createElement("div");
		square.setAttribute("class", "square");
		square.setAttribute(
			"style",
			`width: ${898 / numberOfSquares}px; height: ${468 / numberOfSquares}px`
		);
		sketch.appendChild(square);
		createdSquares++;
	}
}

button.addEventListener("click", (ev) => {
	ev.preventDefault();
	createSquares(Number(numberSquare.value));
});
