const gnbOpen = document.querySelector('#gnbOpen');
const gnb = document.querySelector('#gnb');
const gnbClose = document.querySelector('#gnb .close');
gnbOpen.addEventListener('click', (e) => {
    e.preventDefault();
    gnb.style.transform = 'translateX(0)';
});
gnbClose.addEventListener('click', (e) => {
    e.preventDefault();
    gnb.style.transform = 'translateX(-100%)';
});

