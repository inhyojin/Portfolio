const toggleBtn = document.querySelector(".gnb_m");
const nav = document.querySelector("nav");
toggleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  nav.classList.toggle("menu");
});

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const slides = document.querySelectorAll(".slide");
const current = document.querySelector(".current");

let i = 0;
let c = 1;
prev.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  i--;
  if (i < 0) {
    i = slides.length - 1;
  }
  slides[i].classList.add("active");
  c--;
  if (c <= 0) {
    c = slides.length;
  }
  current.textContent = "0" + c;
});
next.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  i++;
  if (i >= slides.length) {
    i = 0;
  }
  slides[i].classList.add("active");
  current.textContent = "0" + (i + 1);
});

const txtBox = document.querySelector("header .txtbox");
addEventListener("scroll", () => {
  if (scrollY > 250) {
    nav.classList.add("invert");
  } else {
    nav.classList.remove("invert");
  }
});

$(".gnb li").on("mouseenter", function () {
  $(this).find(".sub_menu").stop().slideDown();
});

$(".gnb li").on("mouseleave", function () {
  $(this).find(".sub_menu").stop().slideUp();
});

const lists = document.querySelectorAll(".list li");
const prds = document.querySelectorAll(".product");

lists.forEach((list, idx) => {
  list.addEventListener("click", (e) => {
    e.preventDefault();
    lists.forEach((list) => {
      list.classList.remove("tabList");
    });
    prds.forEach((prd) => {
      prd.classList.remove("tab");
    });
    prds[idx].classList.add("tab");
    lists[idx].classList.add("tabList");
  });
});

var swiper = new Swiper(".gallery_wrapper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
