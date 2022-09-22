$(function () {
  var swiper = new Swiper(".main_swiper", {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });
  var swiper = new Swiper(".intro_swiper", {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      autoplayDisableOnInteraction: false,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
    },
    observer: true,
    observeParents: true,
    on: {
      slideChange: function () {
        const $txtWrap = $(".tab_box.on .txt_wrap");
        $txtWrap.css({ display: "none" });
        $txtWrap.eq(this.realIndex).css({
          display: "block",
        });
      },
    },
  });

  var swiper = new Swiper(".brandSwiper", {
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      autoplayDisableOnInteraction: false,
    },
  });

  const $tabMenu = $(".intro .tab_menu li"),
    $tabBox = $(".intro .tab_box");

  $tabMenu.on("click", function (e) {
    e.preventDefault();
    $tabMenu.removeClass("on");
    $tabBox.removeClass("on");

    const idx = $(this).index();
    $(this).addClass("on");
    $tabBox.eq(idx).addClass("on");
  });

  AOS.init({
    offset: 200,
    easing: "ease-out-cubic",
    duration: 3000,
  });
});
