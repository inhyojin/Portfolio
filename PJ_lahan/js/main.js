$(function () {
  // main swiper
  var swiper = new Swiper(".main_swiper", {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });
  // intro swiper
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
    /* active된 slide의 index랑 같은 txtwrap index 활성화 */
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

  // tab
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

  // aos
  AOS.init({
    offset: 200,
    easing: "ease-out-cubic",
    duration: 3000,
  });
});
