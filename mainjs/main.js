$(function () {
  //변수 ht에 브라우저의 높이값을 저장
  var ht = $(window).height();
  //브라우저의 높이값을 section의 높이값으로 지정
  $("section").height(ht);

  //브라우저가 리사이즈 될 때마다 브라우저와 section의 높이값을 갱신
  $(window).on("resize", function () {
    var ht = $(window).height();
    $("section").height(ht);
  });

  //section위에서 마우스 휠을 움직이면
  $("section").on("mousewheel", function (event, delta) {
    //마우스 휠을 올렸을때
    if (delta > 0) {
      //변수 prev에 현재 휠을 움직인 section에서 이전 section의 offset().top위치 저장
      var prev = $(this).prev().offset().top;
      //문서 전체를 prev에 저장된 위치로 이동
      $("html,body").stop().animate({ scrollTop: prev }, 500);

      //마우스 휠을 내렸을때
    } else if (delta < 0) {
      //변수 next에 현재 휠을 움직인 section에서 다음 section의 offset().top위치 저장
      var next = $(this).next().offset().top;
      //문서 전체를 next에 저장된 위치로 이동
      $("html,body").stop().animate({ scrollTop: next }, 500);
    }
  });

  /* 스크롤 부드럽게 */
  $("nav a, .dott a").click(function (e) {
    $.scrollTo(this.hash || 0, 300);
    e.preventDefault();
  });

  /*search open*/
  $(".search_btn").click(function () {
    $(".search_open").fadeIn();
  });
  $(".search_close").click(function () {
    $(".search_open").fadeOut();
  });

  /* menu li on */
  $(window).on("scroll", function () {
    //변수 ht에 현재 브라우저의 넓이값 저장
    var ht = $(window).height();

    //변수 scroll에 현재 문서가 스크롤된 거리 저장
    var scroll = $(window).scrollTop();

    for (var i = 0; i < 8; i++) {
      if (scroll >= ht * i && scroll < ht * (i + 1)) {
        $(".gnb>li").removeClass();
        $(".gnb>li").eq(i).addClass("on");
      }
    }
  });

  //page3
  $(".li3-1").on("click", function () {
    $(".box1").fadeIn();
    $(".box2").fadeOut();
    $(".box3").fadeOut();

    $(".cap3-1").fadeIn();
    $(".cap3-2").fadeOut();
    $(".cap3-3").fadeOut();
    return false;
  });

  $(".li3-2").on("click", function () {
    $(".box2").fadeIn();
    $(".box1").fadeOut();
    $(".box3").fadeOut();

    $(".cap3-2").fadeIn();
    $(".cap3-1").fadeOut();
    $(".cap3-3").fadeOut();

    return false;
  });

  $(".li3-3").on("click", function () {
    $(".box3").fadeIn();
    $(".box1").fadeOut();
    $(".box2").fadeOut();

    $(".cap3-3").fadeIn();
    $(".cap3-1").fadeOut();
    $(".cap3-2").fadeOut();
    return false;
  });

  $(".b_close").on("click", function () {
    $(".pages3_box").fadeOut();
    $(".cap3").fadeOut();
  });

  //page5 slide
  jQuery(document).ready(function ($) {
    var jssor_1_options = {
      $Idle: 2000,
      $SlideEasing: $Jease$.$InOutSine,
      $DragOrientation: 3,
      $ArrowNavigatorOptions: {
        $Class: $JssorArrowNavigator$,
      },
      $BulletNavigatorOptions: {
        $Class: $JssorBulletNavigator$,
      },
    };

    var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

    //make sure to clear margin of the slider container element
    jssor_1_slider.$Elmt.style.margin = "";

    var MAX_WIDTH = 3000;
    var MAX_HEIGHT = 3000;
    var MAX_BLEEDING = 1;

    function ScaleSlider() {
      var containerElement = jssor_1_slider.$Elmt.parentNode;
      var containerWidth = containerElement.clientWidth;

      if (containerWidth) {
        var originalWidth = jssor_1_slider.$OriginalWidth();
        var originalHeight = jssor_1_slider.$OriginalHeight();

        var containerHeight = containerElement.clientHeight || originalHeight;

        var expectedWidth = Math.min(
          MAX_WIDTH || containerWidth,
          containerWidth
        );
        var expectedHeight = Math.min(
          MAX_HEIGHT || containerHeight,
          containerHeight
        );

        //scale the slider to expected size
        jssor_1_slider.$ScaleSize(expectedWidth, expectedHeight, MAX_BLEEDING);

        //position slider at center in vertical orientation
        jssor_1_slider.$Elmt.style.top =
          (containerHeight - expectedHeight) / 2 + "px";

        //position slider at center in horizontal orientation
        jssor_1_slider.$Elmt.style.left =
          (containerWidth - expectedWidth) / 2 + "px";
      } else {
        window.setTimeout(ScaleSlider, 30);
      }
    }

    function OnOrientationChange() {
      ScaleSlider();
      window.setTimeout(ScaleSlider, 800);
    }

    ScaleSlider();

    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", OnOrientationChange);
    /*#endregion responsive code end*/
  });

  //footer
  $(".f_open").on("click", function () {
    $(".footer").animate({ marginBottom: "125px" }, 500);
    $(".f_open img").attr("src", "");
  });

  $(".f_close").on("click", function () {
    $(".footer").animate({ marginBottom: "0px" }, 500);
    $(".f_open img").attr("src", "common/images/open.png");
  });
});
