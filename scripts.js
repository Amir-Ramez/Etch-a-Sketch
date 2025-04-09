const container = document.querySelector('.container');
function createDivs() {
    let sideLength = prompt('Enter side length: ');
    for (let i = 0; i < sideLength * sideLength; ++i) {
        const div = document.createElement('div');
        div.style.background = '#ffffff';
        div.style.border = '1px solid black';
        div.style.width = `calc(100%/ ${sideLength})`;
        div.style.height = `calc(100%/ ${sideLength})`;
        container.appendChild(div);
    }
}
