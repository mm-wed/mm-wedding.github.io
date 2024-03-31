document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuIcon = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".nav-mobile");
  const closeBtn = document.querySelector(".close");
  const hero = document.querySelector(".hero");

  mobileMenuIcon.addEventListener("click", () => {
      mobileMenu.classList.toggle("active");
      hero.classList.toggle("mobile");
      mobileMenuIcon.classList.toggle("hidden");
  });

  closeBtn.addEventListener("click", function () {
      mobileMenu.classList.remove("active");
      hero.classList.remove("mobile");
      mobileMenuIcon.classList.remove("hidden");
  });
});
