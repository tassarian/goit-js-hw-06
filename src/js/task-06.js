const input = document.querySelector('#validation-input');

input.addEventListener('blur', () => {
   if (input.value.length >= input.dataset.length) {
       input.classList.add('valid');
       input.classList.remove('invalid');
    } else {
       input.classList.add('invalid');
       input.classList.remove('valid');
    } if (input.value.length === 0) {
       input.classList.remove('invalid');
       input.classList.remove('valid');
    }
}) 