const slideItems = document.querySelectorAll('.slideItem'); //슬라이드
const prevBtn = document.querySelector('#prevBtn'); // 이전 버튼
const nextBtn = document.querySelector('#nextBtn'); // 다음 버튼

//버튼을 누르면 현재 슬라이드가 사라지고 다음 슬라이드가 보여짐

function autoSlide() {
    
let i = 0;
prevBtn.addEventListener('click', (e) => {
    e.preventDefault();
    slideItems[i].classList.remove('active');
    i--;
    if (i < 0) {
        i = slideItems.length - 1;
    }
    slideItems[i].classList.add('active');
});

nextBtn.addEventListener('click', (e) => {
    e.preventDefault();
    slideItems[i].classList.remove('active');
    i++;
    if (i >= slideItems.length) {
        i = 0;
    }
    slideItems[i].classList.add('active');
});
}


setInterval(function() {
    nextBtn.click();
}, 3000);

autoSlide();















/*
const slideItems = document.querySelectorAll('.slideItem');
const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');

function autoSlide() {
    let i = 0;
    prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            slideItems[i].classList.remove('active');
            i--;
            if (i < 0) {
                i = slideItems.length -1 ;
            }
            slideItems[i].classList.add('active');
    });
    nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        slideItems[i].classList.remove('active');
        i++;
        if (i >= slideItems.length) {
            i = 0
        }
        slideItems[i].classList.add('active');
    });
}

setInterval(function() {
    nextBtn.click();
}, 3000);

autoSlide();
*/