
$("#toggleMenu").on("click", () => {
  $(".nav").toggleClass("close");
  $("#toggleMenu i").toggleClass("hj-chevron-left");
  $("#toggleMenu i").toggleClass("hj-chevron-right");
  $(".section-header").toggleClass("down")
})

$(".content").click(e => {
  $(".nav").addClass("close");
  $("#toggleMenu i").removeClass("hj-chevron-left");
  $("#toggleMenu i").addClass("hj-chevron-right");
  $(".section-header").addClass("down")
})

$(".menu-item").click(e => {
  $(".nav").addClass("close");
  $("#toggleMenu i").removeClass("hj-chevron-left");
  $("#toggleMenu i").addClass("hj-chevron-right");
  $(".section-header").addClass("down");
  var dis = e.target;
  var rel = dis.getAttribute('rel');
  console.log(rel);
  $(".section").removeClass("active");
  $("#"+rel).addClass("active");
})
