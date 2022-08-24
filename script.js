function makeDiv(sides) {
    deleteGrid();
    createGrid(sides);
    drawPixels();
}

function deleteGrid() {
    container.replaceChildren();
}

function createGrid(sides) {
    for (i = 0; i <= sides ** 2; i++) {
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.style.height = 960 / sides + 'px';
        pixel.style.width = 960 / sides + 'px';
        container.appendChild(pixel);
    }
}

function drawPixels() {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((pixel) => {
        pixel.addEventListener ('mouseover', () => {
        pixel.style.backgroundColor = 'black';
        });
    });
}

function getSize() {
    gridSize = parseInt(prompt('Please enter a new grid size.'));
    if (gridSize > 100) {
        gridSize = parseInt(prompt('Please enter a number below 100.'));
    }
}

const container = document.getElementById('container');
let gridSize = 16;

makeDiv(gridSize);

const button = document.getElementById('size');
button.addEventListener('click', getSize);
button.addEventListener('click', (e) => {
    makeDiv(gridSize);
});