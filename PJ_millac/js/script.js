const content = "民 樂. 사람들이 모여 즐겁게 사는 동네";
const text = document.querySelector(".typingTxt");
let i = 0;

function typing() {
  let txt = content[i++];
  text.innerHTML += txt;
  if (i > content.length) {
    text.textContent = "";
    i = 0;
  }
}
setInterval(typing, 300);

const container = document.querySelector(".view");
const stickyBox = document.querySelector(".sticky_box");
const wrapper = document.querySelector(".view_wrapper");

const calcHeight = (item) => {
  const clientWidth = document.documentElement.clientWidth;
  const clientHeight = document.documentElement.clientHeight;
  return item.scrollWidth - clientWidth + clientHeight;
};
let conHt = (container.style.height = `${calcHeight(wrapper)}px`);

addEventListener("scroll", () => {
  wrapper.style.transform = `translateX(-${stickyBox.offsetTop}px)`;
});

$(".slide").eq(0).addClass("active");
const auto = function () {
  slide(n + 1);
};
let t = $(".slide").length;
let n = 0;
$(".prev").on("click", function () {
  slide(n - 1);
});
$(".next").on("click", auto);
function slide(idx) {
  num = (idx + t) % t;
  $(".slide").removeClass("active");
  $(".slide").eq(num).addClass("active");
  n = num;
}
setInterval(auto, 4000);

gsap.registerPlugin(ScrollTrigger);

gsap.to(".txt1", {
  scrollTrigger: {
    trigger: ".tit_ani",
    start: "top 20%",
    end: "100% 100%",
    scrub: 1,
    id: "txt1",
    pin: true,
  },
  x: 0,
});
gsap.to(".txt3", {
  scrollTrigger: {
    trigger: ".tit_ani",
    start: "top 10%",
    scrub: 1,
    id: "txt3",
    pin: true,
  },
  x: 0,
});
gsap.to(".img1", {
  scrollTrigger: {
    trigger: ".tit_ani",
    scrub: 1,
    start: "top",
    id: "img1",
    pin: true,
  },
  y: -1080,
});
gsap.to(".img2", {
  scrollTrigger: {
    trigger: ".tit_ani",
    scrub: 5,
    pin: true,
  },
  y: -680,
});
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".fnb",
      start: "top top",
      end: "bottom 20%",
      scrub: true,
      pin: true,
    },
  })
  .to(".fnb .left", {
    x: 0,
    duration: 1,
  })
  .to(".fnb .right", {
    x: 0,
    duration: 1,
  });
