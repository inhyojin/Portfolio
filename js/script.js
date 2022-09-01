// fullpage

new fullpage("#fullpage", {
  autoScrolling: true,
  scrollHorizontally: true,
  fitToSection: true,
  continuousVertical: true,
});

// modal
const modalBox = document.querySelector(".modal");
const btn = document.querySelector(".close");

btn.addEventListener("click", (e) => {
  modalBox.style.display = "none";
});

// 마우스로 이동
const onMove = (e) => {
  modalBox.style.left = `${e.clientX}px`;
  modalBox.style.top = `${e.clientY}px`;
};
modalBox.addEventListener("mousedown", () => {
  addEventListener("mousemove", onMove);
  addEventListener("mouseup", () => {
    removeEventListener("mousemove", onMove);
  });
});

// 커서를 따라다니는 이모지
const emoji = document.querySelector(".emoji");
// 마우스 좌표
let mouseX = 0;
let mouseY = 0;
// 커서를 따라다니는 이모지 좌표
let emojiX = 0;
let emojiY = 0;
// 마우스 이동
document.body.addEventListener("mousemove", (e) => {
  mouseX = e.clientX + 30;
  mouseY = e.clientY + 10;
});
function ani() {
  requestAnimationFrame(ani);
  emojiX += (mouseX - emojiX) * 0.2;
  emojiY += (mouseY - emojiY) * 0.2;
  emoji.style.transform = `translate(${emojiX}px, ${emojiY}px)`;
}
ani();

// nav 클릭 시 section 상단으로 부드럽게 이동
const menus = document.querySelectorAll(".gnb li");
const sections = document.querySelectorAll("section");

menus.forEach((menu, idx) => {
  menu.addEventListener("click", () => {
    setTimeout(() => {
      sections[idx].scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  });
});

// 로고 클릭 시 상단 이동
const logo = document.querySelector(".logo");
logo.addEventListener("click", () => {
  const header = document.querySelector("header");
  header.scrollIntoView();
});

// 모바일 메뉴 토글
const topBtn = document.querySelector(".btn");
const gnb = document.querySelector(".gnb");

topBtn.addEventListener("click", (e) => {
  e.preventDefault();
  nav.classList.toggle("active");
});

const headerTits = document.querySelectorAll(".intro span");
const headerTxt = document.querySelector(".intro .txt");
const nav = document.querySelector("nav");
const moveTop = {
  transform: "translate(0)",
  opacity: "1",
};
const elems = [headerTxt, nav, modalBox];
elems.forEach((elem) => {
  elem.animate(moveTop, {
    duration: 600,
    fill: "forwards",
    delay: 600,
  });
});
headerTits.forEach((headerTit, idx) => {
  headerTit.animate(moveTop, {
    duration: 800,
    fill: "forwards",
    delay: 800 * idx,
  });
});

// 드래그 방지 x
$("body").on("selectstart", () => {
  return false;
});
$("body").on("dragstart", () => {
  return false;
});
