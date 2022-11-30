//Sidebar
const sidebarCats = document.querySelectorAll(".sidebar-menu-drp");

sidebarCats.forEach((btn) => {
  btn.addEventListener("click", () => {
    const parentCat = btn.closest(".sidebar-menu-drp");
    const catOpen = parentCat.querySelector(".sidebar-menu-drp-cat");
    const catOpenToggle = parentCat.querySelector(".menu-cat");
    const filterToggle = () => {
      catOpen.classList.toggle("sidebar-menu-drp-cat-active");
      catOpenToggle.classList.toggle("menu-cat-active");
    };
    filterToggle(btn);
  });
});

var swiper = new Swiper(".section-courses .swiper", {
  slidesPerView: 3,
  spaceBetween: 24,
});
