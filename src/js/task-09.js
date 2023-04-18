function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');

const color = document.querySelector('.color');
const changeColor = document.querySelector('.change-color');

changeColor.addEventListener('click', () => {
  const randomColor = getRandomHexColor()
  color.textContent = randomColor;
  body.style.backgroundColor = randomColor
})

