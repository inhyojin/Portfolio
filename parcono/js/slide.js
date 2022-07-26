let img = document.querySelectorAll('#mainImg');
let nextBtn = document.querySelector('#nextBtn');
let prevBtn = document.querySelector('#prevBtn');

let currentImg = 0;
nextBtn.addEventListener('click', () => {
    let nextImg = (currentImg+1) % 3;
    img[currentImg].style.display = 'none';
    img[nextImg].style.display = 'block';
    currentImg = nextImg;
});

prevBtn.addEventListener('click', () => {
    let prevImg = currentImg-1;
    if (prevImg == -1) {
        prevImg = 2;
        img[currentImg].style.width = 'none';
        img[prevImg].style.display = 'block';
        currentImg = prevImg;
    } else {
        img[currentImg].style.display = 'none';
        img[prevImg].style.display = 'block';
        currentImg = prevImg;
    }
});
