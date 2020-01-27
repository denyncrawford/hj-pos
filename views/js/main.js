
$("#toggleMenu").on("click", () => {
  $(".nav").toggleClass("close");
  $("#toggleMenu i").toggleClass("hj-chevron-left");
  $("#toggleMenu i").toggleClass("hj-chevron-right");
})
