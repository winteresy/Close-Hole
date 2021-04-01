

$(document).ready(function() {
  let hole = 2;
  $(".hole_1").on("click", function(event) {
  $(".hole_background").css("background-image", "url(images/1hole.jpg)");
  hole = 1;
  });
  $(".hole_2").on("click", function(event) {
  $(".hole_background").css("background-image", "url(images/2hole.jpg)");
  hole = 2;
  });
  $(".hole_3").on("click", function(event) {
  $(".hole_background").css("background-image", "url(images/3hole.png)");
  hole = 3;
  });
  $(".hole_4").on("click", function(event) {
  $(".hole_background").css("background-image", "url(images/4hole.png)");
  hole = 4;
  });
  let mask = 2;
  $(".round_1").on("click", function(event) {
  $(".hole_mask").css("background-image", "url(images/hole1.1.png)");
  mask = 1;
  });
  $(".round_2").on("click", function(event) {
  $(".hole_mask").css("background-image", "url(images/hole2.1.png)");
  mask = 2;
  });
  $(".round_3").on("click", function(event) {
  $(".hole_mask").css("background-image", "url(images/hole3.1.png)");
  mask = 3;
  });
  $(".round_4").on("click", function(event) {
  $(".hole_mask").css("background-image", "url(images/hole4.1.png)");
  mask = 4;
  });
  $(".round_5").on("click", function(event) {
  $(".hole_mask").css("background-image", "url(images/hole5.1.png)");
  mask = 5;
  });
  $(".round_6").on("click", function(event) {
  $(".hole_mask").css("background-image", "url(images/hole6.1.png)");
  mask = 6;
  });

  $(function () {
    let count = 0;
    $('.button-effects_1').click(function () {
      count += 1;
      if (count%2 == 1) {
        $(".hole_background").css("-webkit-filter", "blur(5px)");
      } else {
        $(".hole_background").css("-webkit-filter", "blur(0px)");
      }
    });
  });

  $(function () {
    let count = 0;
    $('.button-effects_2').click(function () {
      count += 1;
      if (count%2 == 1) {
        $(".hole_background").css("-webkit-filter", "grayscale(100%)");
      } else {
        $(".hole_background").css("-webkit-filter", "grayscale(0%)");
      }
    });
  });

  $(function () {
    let count = 0;
    $('.button-effects_3').click(function () {
      count += 1;
      if (count == 1) {
        $(".hole_background").css("-webkit-filter", "hue-rotate(25deg)");
      }
      if (count == 2) {
        $(".hole_background").css("-webkit-filter", "hue-rotate(45deg)");
      }
      if (count == 3) {
        $(".hole_background").css("-webkit-filter", "hue-rotate(65deg)");
      }
      if (count == 4) {
        $(".hole_background").css("-webkit-filter", "hue-rotate(85deg)");
      }
      if (count == 5) {
        $(".hole_background").css("-webkit-filter", "hue-rotate(105deg)");
      }
      if (count == 6) {
        $(".hole_background").css("-webkit-filter", "hue-rotate(125deg)");
      }
      if (count == 7) {
        $(".hole_background").css("-webkit-filter", "hue-rotate(145deg)");
      }
      if (count == 8) {
        $(".hole_background").css("-webkit-filter", "hue-rotate(165deg)");
      }
      if (count == 9) {
        $(".hole_background").css("-webkit-filter", "hue-rotate(185deg)");
      }
      if (count == 10) {
        $(".hole_background").css("-webkit-filter", "hue-rotate(205deg)");
      }
      if (count == 11) {
        $(".hole_background").css("-webkit-filter", "hue-rotate(225deg)");
      }
      if (count == 12) {
        $(".hole_background").css("-webkit-filter", "hue-rotate(245deg)");
      }
      if (count == 13) {
        $(".hole_background").css("-webkit-filter", "hue-rotate(265deg)");
      }
      if (count == 14) {
        $(".hole_background").css("-webkit-filter", "hue-rotate(285deg)");
      }
      if (count == 15) {
        $(".hole_background").css("-webkit-filter", "hue-rotate(305deg)");
      }
      if (count == 16) {
        $(".hole_background").css("-webkit-filter", "hue-rotate(325deg)");
      }
      if (count == 17) {
        $(".hole_background").css("-webkit-filter", "hue-rotate(365deg)");
      }
      if (count == 18) {
        $(".hole_background").css("-webkit-filter", "hue-rotate(385deg)");
      }
      if (count == 19) {
        $(".hole_background").css("-webkit-filter", "hue-rotate(405deg)");
      }
      if (count == 20) {
      count = 0;
      }
    });
  });

  $(function () {
    let count = 0;
    $('.button-effects_4').click(function () {
      count += 1;
      if (count%2 == 1) {
        $(".hole_background").css("-webkit-filter", "invert(100%)");
      } else {
        $(".hole_background").css("-webkit-filter", "invert(0%)");
      }
    });
  });

  $(function () {
    let count = 0;
    $('.button-effects_5').click(function () {
      count += 1;
      if (hole == 1) {
        if (count%2 == 1) {
          $(".hole_background").css("background-image", "url(images/Новая_иллюстрация7.jpg)");
        }
        if (count%2 == 0) {
          $(".hole_background").css("background-image", "url(images/1hole.jpg)");
        }
      }
      if (hole == 2) {
        if (count%2 == 1) {
          $(".hole_background").css("background-image", "url(images/Новая_иллюстрация4.jpg)");
        }
        if (count%2 == 0) {
          $(".hole_background").css("background-image", "url(images/2hole.jpg)");
        }
      }
      if (hole == 3) {
        if (count%2 == 1) {
          $(".hole_background").css("background-image", "url(images/Новая_иллюстрация5.jpg)");
        }
        if (count%2 == 0) {
          $(".hole_background").css("background-image", "url(images/3hole.png)");
        }
      }
      if (hole == 4) {
        if (count%2 == 1) {
          $(".hole_background").css("background-image", "url(images/Новая_иллюстрация6.jpg)");
        }
        if (count%2 == 0) {
          $(".hole_background").css("background-image", "url(images/4hole.png)");
        }
      }
    });
  });

  $(function () {
    let count = 0;
    $('.button-effects_6').click(function () {
      count += 1;
      if (count == 1) {
        $(".hole_background").css("-webkit-filter", "brightness(.9)");
      }
      if (count == 2) {
        $(".hole_background").css("-webkit-filter", "brightness(.8)");
      }if (count == 3) {
        $(".hole_background").css("-webkit-filter", "brightness(.7)");
      }if (count == 4) {
        $(".hole_background").css("-webkit-filter", "brightness(.6)");
      }if (count == 5) {
        $(".hole_background").css("-webkit-filter", "brightness(.5)");
      }if (count == 6) {
        $(".hole_background").css("-webkit-filter", "brightness(.4)");
      }if (count == 7) {
        $(".hole_background").css("-webkit-filter", "brightness(.3)");
      }if (count == 8) {
        $(".hole_background").css("-webkit-filter", "brightness(.2)");
      }if (count == 9) {
        $(".hole_background").css("-webkit-filter", "brightness(.1)");
      }if (count == 10) {
        $(".hole_background").css("-webkit-filter", "brightness(0)");
      }
      if (count == 11) {
      count = 0;
      }
    });
  });



  let count_1 = document.getElementById("buttonCountNumber_1");

  document.getElementById("buttonCountPlus_1").onclick = function() {
    let countPlus_1 = count_1.innerHTML;
    if(+countPlus_1 <= 4){
      count_1.innerHTML++;
      let countPlus_1 = count_1.innerHTML;
    }
  }

  document.getElementById("buttonCountMinus_1").onclick = function() {
    let countMinus_1 = count_1.innerHTML;
    if(+countMinus_1 >= 2){
      count_1.innerHTML--;
      let countMinus_1 = count_1.innerHTML;
    }
  }

  let count_2 = document.getElementById("buttonCountNumber_2");
  let counter = 5;

  document.getElementById("buttonCountPlus_2").onclick = function() {
    let countPlus_2 = count_2.innerHTML;
    if(+countPlus_2 <= 4){
      count_2.innerHTML++;
      counter += 1;
      let countPlus_2 = count_2.innerHTML;
    }
  }

  document.getElementById("buttonCountMinus_2").onclick = function() {
    let countMinus_2 = count_2.innerHTML;
    if(+countMinus_2 >= 2){
      count_2.innerHTML--;
      counter -= 1;
      let countMinus_2 = count_2.innerHTML;
    }
  }


  $(function () {
    if (mask == 1) {
      if (counter == 1) {
        $(".hole_mask").css("background-image", "url(images/hole1.1.png)");
      }
      else if (counter == 2) {
        $(".hole_mask").css("background-image", "url(images/hole1.2.png)");
      }
      else if (counter == 3) {
        $(".hole_mask").css("background-image", "url(images/hole1.3.png)");
      }
      else if (counter == 4) {
        $(".hole_mask").css("background-image", "url(images/hole1.4.png)");
      }
      else if (counter == 5) {
        $(".hole_mask").css("background-image", "url(images/hole1.5.png)");
      }
    }
  });

  $(function () {
  let count_1 = 0;
  let count_2 = 0;
    $(".arrow_right").on("click", function(event) {
      count_1 += 1;
      if (count_1 == 1) {
        $(".slide_1").removeClass("showing");
        $(".slide_2").addClass("showing");
      }
      if (count_1 == 2) {
        $(".slide_2").removeClass("showing");
        $(".slide_1").removeClass("showing");
        $(".slide_3").addClass("showing");
      }
      if (count_1 == 3) {
        count_1 = 0;
        $(".slide_3").removeClass("showing");
        $(".slide_1").addClass("showing");
      }
    });
    $(".arrow_left").on("click", function(event) {
      count_2 += 1;
      if (count_2 == 1) {
        $(".slide_2").removeClass("showing");
        $(".slide_3").removeClass("showing");
        $(".slide_1").addClass("showing");
      }
      if (count_2 == 2) {
        $(".slide_1").removeClass("showing");
        $(".slide_2").removeClass("showing");
        $(".slide_3").addClass("showing");
      }
      if (count_2 == 3) {
        count_2 = 0;
        $(".slide_1").removeClass("showing");
        $(".slide_3").removeClass("showing");
        $(".slide_2").addClass("showing");
      }
    });
  });

  $(function () {
  let count_1 = 0;
  let count_2 = 0;
    $(".union_left").on("click", function(event) {
      count_1 += 1;
      if (count_1 == 1) {
        $(".slide_1").removeClass("showing");
        $(".slide_2").addClass("showing");
      }
      if (count_1 == 2) {
        $(".slide_2").removeClass("showing");
        $(".slide_1").removeClass("showing");
        $(".slide_3").addClass("showing");
      }
      if (count_1 == 3) {
        count_1 = 0;
        $(".slide_3").removeClass("showing");
        $(".slide_1").addClass("showing");
      }
    });
    $(".union_right").on("click", function(event) {
      count_2 += 1;
      if (count_2 == 1) {
        $(".slide_2").removeClass("showing");
        $(".slide_3").removeClass("showing");
        $(".slide_1").addClass("showing");
      }
      if (count_2 == 2) {
        $(".slide_1").removeClass("showing");
        $(".slide_2").removeClass("showing");
        $(".slide_3").addClass("showing");
      }
      if (count_2 == 3) {
        count_2 = 0;
        $(".slide_1").removeClass("showing");
        $(".slide_3").removeClass("showing");
        $(".slide_2").addClass("showing");
      }
    });
  });

});
