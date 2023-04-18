const inputFontSize = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

inputFontSize.addEventListener('input', () => {
    text.style.fontSize = inputFontSize.value + 'px'
})