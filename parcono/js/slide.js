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
