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
    let previmg = currentImg-1;
    if (previmg == -1) {
        previmg = 2;
        img[currentImg].style.display = 'none';
        img[previmg].style.display = 'block';
        currentImg = previmg
    } else {
        img[currentImg].style.display = 'none';
        img[previmg].style.display = 'block';
        currentImg = previmg
    }
});
