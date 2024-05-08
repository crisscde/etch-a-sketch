let body = document.querySelector("body");
let sketch = document.getElementById("sketch");
let button = document.getElementById("number");
let numberSquare = document.getElementById("squares");

function createSquares(numberOfSquares) {
	let createdSquares = 0;
	while (createdSquares < numberOfSquares * numberOfSquares) {
		let square = document.createElement("div");
		square.setAttribute("class", "square");
		sketch.appendChild(square);
		// document.documentElement.style.setProperty("--bg-color", numberOfSquares);
	}
	createdSquares++;
}

button.addEventListener("click", (ev) => {
	ev.preventDefault();
	createSquares(numberSquare.value);
});
