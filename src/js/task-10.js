function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}




const boxes = document.querySelector('#boxes');
boxes.style.display = 'flex';
boxes.style.flexDirection = 'column';
boxes.style.gap = '10px'


const input = document.querySelector('#controls > input[type="number"]')
const boxesCreate = document.querySelector('[data-create]');
const boxesDestroy = document.querySelector('[data-destroy]');



let boxSize = 30;
let lastSize = 0

boxesCreate.addEventListener('click', () => { 
  for (let i = 0; i < input.value; i++) {
    const box = document.createElement('div');
    const progBoxSize = `${boxSize + lastSize * 10}px`
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = progBoxSize
    box.style.height = progBoxSize
    lastSize += 1
    boxes.appendChild(box)
  }
})

boxesDestroy.addEventListener('click', () => {
  lastSize = 0
  boxes.innerHTML = ''
})

