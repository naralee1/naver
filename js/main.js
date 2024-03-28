$("#gnb .dep2").hide();
$("#gnb>li").hover(
  function () {
    $("#gnb .dep2").stop().slideUp();
    $(this).children("ul").stop().slideDown();
  },
  function () {
    $("#gnb .dep2").stop().slideUp();
  }
);
$(".family_site button").click(function () {
  $(".family_site ul").show();
});
$(".copyright").click(function () {
  $(".family_site ul").hide();
});
$(".vod_select_box button").click(function (event) {
  event.preventDefault(); //버튼의 기본역할(이벤트)을 없앰
  $(".vod_select_box ul").show();
});
$(".btn_sitemap").click(function () {
  $(".sitemap").show();
  $(".ham_btn").hide();
  $(".btn_sitemap_close").show();
  $(".util .language a").css("color", "white");
});
$(".btn_sitemap_close").click(function () {
  $(this).hide();
  $(".sitemap").hide();
  $(".ham_btn").show();
  $(".util .language a").css("color", "");
});
$("main.ads .sub_content li").click(function () {
  $("main.ads .vod_popup_box").show();
});

$("main.ads .vod_popup_box .vid_close").click(function () {
  $("main.ads .vod_popup_box").hide();
});

const swiper = new Swiper(".swiper-container1", {
  // Optional parameters
  autoplay: {
    delay: 3000, // 자동 플레이 간격 (3초로 설정)
    disableOnInteraction: false, // 유저 상호작용 시 자동 플레이 일시 중지 여부
  },
  direction: "horizontal",
  loop: true,
  delay: 1000,
  pauseOnMouseEnter: true,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  spaceBetween: 0,
  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
