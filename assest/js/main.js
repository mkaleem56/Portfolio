

// ==== follow me %%%%

$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 300) {
    $(".follow-me").addClass("darkHeader");
  } else {
    $(".follow-me").removeClass("darkHeader");
  }
});


// ==== button click to top %%%%

$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 500) {
    $(".click-top a").removeClass("darkHeader");
  } else {
    $(".click-top a").addClass("darkHeader");
  }
});


// ==== mobile navbar *****

$(document).ready(function () {
  $(".menu-icon i").click(function () {
    $(".mobile-navbar").show()
  })
  $(".cros-icon").click(function () {
    $(".mobile-navbar").hide()
  })
  $(".mob-menu li a").click(function () {
    $(".mobile-navbar").hide()
  })
})