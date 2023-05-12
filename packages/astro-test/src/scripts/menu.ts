const hamburgerIcon = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburgerIcon?.addEventListener("click", () => {
  navLinks?.classList.toggle("expanded");
});
