const modalBox = document.querySelector(".modal");
const btn = document.querySelector(".close");

btn.addEventListener("click", (e) => {
  modalBox.style.display = "none";
});

const emoji = document.querySelector(".emoji");

let mouseX = 0;
let mouseY = 0;

let emojiX = 0;
let emojiY = 0;

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

const logo = document.querySelector(".logo");

logo.addEventListener("click", () => {
  const header = document.querySelector("header");
  header.scrollIntoView();
});

const topBtn = document.querySelector(".btn");
const gnb = document.querySelector(".gnb");

topBtn.addEventListener("click", (e) => {
  e.preventDefault();
  nav.classList.toggle("active");
});
