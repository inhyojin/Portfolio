$("header img").on("mouseover", function () {
  $(this).stop().animate(
    {
      backgroundPositionY: `100%`,
    },
    15000,
    "linear"
  );
});
$("img").on("mouseleave", function () {
  $(this).stop().animate(
    {
      backgroundPositionY: "0%",
    },
    1000,
    "linear"
  );
});

const header = document.querySelector("header");
const goUp = document.querySelector(".goUp");
console.log(header.clientHeight);
window.addEventListener("scroll", () => {
  if (scrollY > header.clientHeight) {
    goUp.classList.add("invert");
  } else {
    goUp.classList.remove("invert");
  }
});
