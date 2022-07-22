const label = document.querySelectorAll('label');
const txtBox = document.querySelectorAll('input');

txtBox.addEventListener('keyup',() => label.style.color = '#cabe89');
txtBox.addEventListener('blur', () => label.style.color = '#353e4b')