$(function () {
  // 비디오 정지
  // $(".pause-btn").click(function () {
  //     $("#visualVideo").get(0).pause();
  // });

  let a = 0;
  setInterval(function () {
    $(".solution-box article").removeClass("color");
    $(".solution-box article").eq(a).addClass("color");
    a++;
    if (a >= 3) {
      a = 0;
    }
  }, 1000);

  // Section2 이들이 못난이가 된 사연
  $(".slide-con").slick({
    arrows: true,
    prevArrow: $(".left-btn"),
    nextArrow: $(".right-btn"),
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true,
    vertical: false,
    initialSlide: 0,
    responsive: [
      // 반응형 적용여부
      {
        breakpoint: 771, //해상도 브레이크 포인트 설정
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  let imgIndex;
  $(".small").click(function () {
    // small-box 에 border 넣기
    $(this).addClass("active").siblings().removeClass("active");

    // small-list index 에 맞춰서 main-img 변화
    const smallImgIndex = $(this).attr("data-src");
    $(".main-box").children().attr("src", smallImgIndex);
  });

  // Small-box 에 맞추어 text 변화
  $(".small-box2").click(function () {
    $(".desc-jumbo").removeClass("on").siblings().addClass("on");
  });
  $(".small-box1").click(function () {
    $(".desc-standard").removeClass("on").siblings().addClass("on");
  });

  // Offset & ScrollTop 위치값 변수
  const innerHeight = $(window).innerHeight();
  const pointOffset = $(".point-area").offset().top;
  const main_title_offset = $(".visual .main-title").offset().top;
  const s3_card_offset = $(".sec_03 .intro-cards").offset().top;

  $(window).scroll(function () {
    const scrollTopLocation = $(this).scrollTop();

    // Section 01 desc-area
    if (scrollTopLocation >= pointOffset) {
      $(".problem-box .left span").css({
        opacity: "1",
        visibility: "visible",
        transform: "translateY(0)",
      });
      $(".problem-box .left p").css({
        opacity: "1",
        visibility: "visible",
        transform: "translateY(0)",
      });
    }

    // Fixed navBar
    if (scrollTopLocation + innerHeight * 0.1 >= main_title_offset) {
      $(".side-navBar").css({
        position: "fixed",
      });
    } else {
      $(".side-navBar").css({
        position: "absolute",
      });
    }

    // Section 03 Animation
    if (scrollTopLocation + innerHeight * 0.7 >= s3_card_offset) {
      $(".intro-cards .card").addClass("active");
    } else {
      $(".intro-cards .card").removeClass("active");
    }
  });
});
