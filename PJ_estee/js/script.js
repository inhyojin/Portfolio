var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  loop: true,
  autoplay: {
    delay: 1500,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 2,
  spaceBetween: 30,
  slidesPerGroup: 2,
  loopFillGroupWithBlank: false,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    1400: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
  },
});

const gnbOpen = document.querySelector("#gnbOpen");
const gnb = document.querySelector("#gnb");
const gnbClose = document.querySelector("#gnb .close");
gnbOpen.addEventListener("click", (e) => {
  e.preventDefault();
  gnb.style.transform = "translateX(0)";
});
gnbClose.addEventListener("click", (e) => {
  e.preventDefault();
  gnb.style.transform = "translateX(-100%)";
});

const gnbAs = document.querySelectorAll("#gnb a");
gnbAs.forEach((gnbA) => {
  gnbA.addEventListener("click", () => {
    gnb.style.transform = "translate(-100%)";
  });
});

const nav = document.querySelector("nav");
const headerTb = document.querySelector("header .txtbox");

window.addEventListener("scroll", () => {
  if (scrollY > headerTb.offsetTop) {
    nav.classList.add("color");
  } else {
    nav.classList.remove("color");
  }
});

const logo = document.querySelector(".logo");
logo.addEventListener("click", () => {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

$("#video").YTPlayer();

const a = 100;
const b = document.querySelectorAll(".sa");

const saFunc = function () {
  for (const element of b) {
    if (!element.classList.contains("show")) {
      if (window.innerHeight > element.getBoundingClientRect().top + a) {
        element.classList.add("show");
      }
    }
  }
};

window.addEventListener("load", saFunc);
window.addEventListener("scroll", saFunc);
