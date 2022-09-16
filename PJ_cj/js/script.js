$(".gnb>li").on("mouseenter", function () {
  if ($(this).index() === 2) {
    $(this).find(">ul").css({ display: "flex" });
  } else {
    $(this).find(">ul").css({ display: "block" });
  }
});
$(".gnb>li").on("mouseleave", function () {
  $(this).find(">ul").css("display", "none");
});

var swiper = new Swiper(".sustainSwiper", {
  slidesPerView: "auto",
  spaceBetween: 140,
  pagination: {
    clickable: true,
  },
});
var swiper = new Swiper(".mainSwiper", {
  speed: 600,
  parallax: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$(".slide").eq(0).addClass("active");
const auto = function () {
  slide(i + 1);
};
let t = $(".slide").length;
let i = 0;
$("#prev").on("click", function () {
  slide(i - 1);
});
$("#next").on("click", auto);
function slide(idx) {
  num = (idx + t) % t;
  $(".slide").removeClass("active");
  $(".slide").eq(num).addClass("active");
  i = num;
}
setInterval(auto, 2000);

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
