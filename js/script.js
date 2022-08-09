// 연락 모달창
const modalBox = document.querySelector(".modal");
const btn = document.querySelector(".close");

btn.addEventListener("click", (e) => {
  modalBox.style.display = "none";
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
  mouseX = e.clientX;
  mouseY = e.clientY;
});
function ani() {
  requestAnimationFrame(ani);

  emojiX += (mouseX - emojiX) * 0.1;
  emojiY += (mouseY - emojiY) * 0.1;

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
