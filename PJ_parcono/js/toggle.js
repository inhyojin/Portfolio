const toggleBtn = document.querySelector('#gnb_m');
const menu = document.querySelector('#gnb')

toggleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.toggle('active');
});
