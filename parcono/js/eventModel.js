const inputs = document.querySelectorAll('input');
const labels = document.querySelectorAll('label');

inputs.forEach(input => {
    const index = input.dataset["index"];
    input.addEventListener('keyup', () => {
        labels[index].style.color = '#cabe89';
    } );
    input.addEventListener('blur', () => {
        labels[index].style.color = '#353e4b';
    })
});