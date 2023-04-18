const counter = document.querySelector('#value');
const incBtn = document.querySelector('button[data-action="increment"]');
const decBtn = document.querySelector('button[data-action="decrement"]');

let counterValue = 0;

incBtn.addEventListener('click', () => {
    counter.textContent = counterValue += 1
})

decBtn.addEventListener('click', () => {
    counter.textContent = counterValue -= 1
})