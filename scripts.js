const container = document.querySelector('.container');
function createDivs() {
    let sideLength = prompt('Enter side length: ');

    if (sideLength > 100) {
        alert('Max length is 100');
        return createDivs();
    }

    container.innerHTML = '';

    for (let i = 0; i < sideLength * sideLength; ++i) {
        const div = document.createElement('div');
        div.style.background = '#ffffff';
        div.style.border = '1px solid black';
        div.style.width = `calc(100%/ ${sideLength})`;
        div.style.height = `calc(100%/ ${sideLength})`;

        div.addEventListener('mouseover', () => {
            if (isMouseDown) div.style.background = 'black';
            else if (div.style.background !== 'black')
                div.style.background = 'purple';
        });

        div.addEventListener('mouseleave', () => {
            if (div.style.background !== 'black')
                div.style.background = '#ffffff';
        });

        div.addEventListener('click', () => {
            div.style.background = 'black';
        });
        container.appendChild(div);
    }
}

createDivs();

const resetBtn = document
    .querySelector('.resetBtn')
    .addEventListener('click', createDivs);

let isMouseDown = false;
document.addEventListener('mousedown', () => {
    isMouseDown = true;
});
document.addEventListener('mouseup', () => {
    isMouseDown = false;
});
