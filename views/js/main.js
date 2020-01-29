
var toggleMenu = document.querySelector("#toggleMenu");
var nav = document.querySelector(".nav");
var headers = document.querySelectorAll(".section-header");
var content = document.querySelector(".content");
var menuItem = document.querySelectorAll(".menu-item");
var section = document.querySelectorAll(".section");

toggleMenu.addEventListener("click", e => {
  nav.classList.toggle("close");
  toggleMenu.children[0].classList.toggle("hj-chevron-left");
  toggleMenu.children[0].classList.toggle("hj-chevron-right");
  for (var i = 0; i < headers.length; i++) {
    headers[i].classList.toggle("down");
  }
})

content.addEventListener("click", e => {
  nav.classList.add("close");
  toggleMenu.children[0].classList.remove("hj-chevron-left");
  toggleMenu.children[0].classList.add("hj-chevron-right");
  for (var i = 0; i < headers.length; i++) {
    headers[i].classList.add("down");
  }
});

for (var i = 0; i < menuItem.length; i++) {
  menuItem[i].addEventListener("click", e => {
    nav.classList.add("close");
    toggleMenu.children[0].classList.remove("hj-chevron-left");
    toggleMenu.children[0].classList.add("hj-chevron-right");
    for (var i = 0; i < headers.length; i++) {
      headers[i].classList.add("down");
    }
    var dis = e.target;
    var rel = dis.getAttribute('rel');
    for (var i = 0; i < section.length; i++) {
      section[i].classList.remove("active");
    }
    document.querySelector("#"+rel).classList.add("active");
  });
}
