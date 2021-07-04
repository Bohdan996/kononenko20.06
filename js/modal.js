const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const closeModalMenu = document.getElementById("close");

mobileMenuBtn.onclick = function () {
  mobileMenu.style.display = "block";
}

closeModalMenu.onclick = function () {
  mobileMenu.style.display = "none";
}
