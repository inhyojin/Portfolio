const nav = document.querySelector('nav');
const section = document.querySelector('section');

// 메뉴 스크롤 이벤트
addEventListener('scroll', (e) => {
    if (scrollY > section.offsetTop || gnb.classList.contains('active_menu')) {
        nav.classList.add('style');
    } else {
        nav.classList.remove('style');
    }
});

// 토글 메뉴
const toggle = document.querySelector('.toggle');
const gnb = document.querySelector('.gnb');
const menus = document.querySelectorAll('.gnb li');

toggle.addEventListener('click', (e) => {
    e.preventDefault();
    if (scrollY <= section.offsetTop) {
        nav.classList.toggle('style');
    }
    e.currentTarget.classList.toggle('active_toggle');
    gnb.classList.toggle('active_menu');
});
// 메뉴 클릭 시 창 닫힘
menus.forEach(menu => {
    menu.addEventListener('click', (e) => {
        e.preventDefault();
        toggle.classList.remove('active_toggle');
        gnb.classList.remove('active_menu');
        if (scrollY <= section.offsetTop) {
            nav.classList.remove('style');
        }
    });
});

// 로고 맨 위로
const logo = document.querySelector('.logo');

logo.addEventListener('click', () => {
    scrollTo({
        top:0,
        behavior: "smooth"
    });
});

// toTo 맨 위로
const goTo = document.querySelector('.goTo');
goTo.addEventListener('click', (e) => {
    e.preventDefault();
    scrollTo({
        top:0,
        behavior: "smooth"
    });
});

