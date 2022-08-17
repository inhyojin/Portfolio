const nav = document.querySelector("nav");
const headTit = document.querySelector("header .tit");
console.log(headTit.offsetTop);
addEventListener("scroll", () => {
  if (scrollY > headTit.offsetTop) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
});

const slideItems = document.querySelectorAll(".slideItem");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

function autoSlide() {
  let i = 0;
  prevBtn.addEventListener("click", (e) => {
    e.preventDefault();
    slideItems[i].classList.remove("active");
    i--;
    if (i < 0) {
      i = slideItems.length - 1;
    }
    slideItems[i].classList.add("active");
  });

  nextBtn.addEventListener("click", (e) => {
    e.preventDefault();
    slideItems[i].classList.remove("active");
    i++;
    if (i >= slideItems.length) {
      i = 0;
    }
    slideItems[i].classList.add("active");
  });
}

setInterval(function () {
  nextBtn.click();
}, 3000);

autoSlide();

const toggleBtn = document.querySelector("#gnb_m");
const menu = document.querySelector("#gnb");

toggleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  menu.classList.toggle("active");
});

const lis = document.querySelectorAll("#list li");
const prds = document.querySelectorAll(".product");
lis.forEach((li, index) => {
  li.addEventListener("click", (e) => {
    e.preventDefault();
    prds.forEach((prd) => {
      prd.classList.remove("active");
    });
    lis.forEach((li) => {
      li.classList.remove("activeFont");
    });
    prds[index].classList.add("active");
    lis[index].classList.add("activeFont");
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});
const inputs = document.querySelectorAll("input");
const labels = document.querySelectorAll("label");

inputs.forEach((input) => {
  const idx = input.dataset["index"];
  input.addEventListener("keyup", () => {
    labels[idx].style.color = "#cabe89";
  });
  input.addEventListener("blur", () => {
    labels[idx].style.color = "#353e4b";
  });
});

const btn = document.querySelector("button");
btn.addEventListener("click", (e) => {
  const checkConfirm = confirm("작성한 내용으로 문의하시겠습니까?");
  if (checkConfirm === false) {
    e.preventDefault();
  }
});

const nan = document.querySelector("#nan");
const tels = document.querySelectorAll('[name="user_tel"]');
tels.forEach((tel) => {
  tel.addEventListener("keyup", (e) => {
    e.preventDefault();
    const num = tel.value;
    if (isNaN(num)) {
      nan.textContent = "*전화번호는 숫자만 입력해주세요";
      nan.style.color = "red";
      nan.style.marginBottom = "2vw";
      nan.style.fontSize = "1.5vw";
    } else {
      nan.textContent = "";
    }
  });
});

/* name 불러오기 
const txt = document.forms.txt;
// textarea color 변경
txt.addEventListener('keyup', () => {
    labels[3].style.color = '#cabe89';
});
*/
