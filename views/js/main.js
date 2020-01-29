
$("#toggleMenu").on("click", () => {
  $(".nav").toggleClass("close");
  $("#toggleMenu i").toggleClass("hj-chevron-left");
  $("#toggleMenu i").toggleClass("hj-chevron-right");
  $(".section-header").toggleClass("up")
})

$(".content").click(e => {
  $(".nav").addClass("close");
  $("#toggleMenu i").removeClass("hj-chevron-left");
  $("#toggleMenu i").addClass("hj-chevron-right");
  $(".section-header").removeClass("up")
})

$(".menu-item").click(e => {
  $(".nav").addClass("close");
  $("#toggleMenu i").removeClass("hj-chevron-left");
  $("#toggleMenu i").addClass("hj-chevron-right");
  $(".section-header").removeClass("up");
  var rel = $(this).attr('rel');
  console.log(rel);
  $(".section").removeClass("active");
  $("#"+rel).addClass("active");
})
