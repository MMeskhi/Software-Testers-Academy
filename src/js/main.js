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

const swiper = new Swiper(".section-courses .swiper", {
  spaceBetween: 24,

  navigation: {
    nextEl: ".section-courses .swiper-button-next",
    prevEl: ".section-courses .swiper-button-prev",
  },
  breakpoints: {
    300: {
      slidesPerView: 1.1,
    },
    700: {
      slidesPerView: 2,
    },
    1400: {
      slidesPerView: 3,
    },
  },
});

const swiper2 = new Swiper(".section-blog .swiper", {
  spaceBetween: 24,

  navigation: {
    nextEl: ".section-blog .swiper-button-next",
    prevEl: ".section-blog .swiper-button-prev",
  },
  breakpoints: {
    300: {
      slidesPerView: 1.1,
    },
    700: {
      slidesPerView: 1.7,
    },
    1400: {
      slidesPerView: 2.2,
    },
  },
});

const swiper3 = new Swiper(".section-brands .swiper", {
  spaceBetween: 166,
  breakpoints: {
    300: {
      slidesPerView: 2,
      spaceBetween: 41.5,
    },
    700: {
      slidesPerView: 3,
      spaceBetween: 83,
    },
    1400: {
      slidesPerView: 4,
    },
  },
});

const reviewCardSelector = document.querySelectorAll(".review-card");

reviewCardSelector.forEach((btn, index) => {
  btn.addEventListener("mouseover", () => {
    const changeReview = (active) => {
      for (let i = 0; i < reviewCardSelector.length; i++) {
        reviewCardSelector[i].classList.remove("active");
      }
      active.classList.add("review-card-active");
    };
    changeReview(btn);
  });
});

const reviewCard = document.querySelectorAll(".review");

reviewCardSelector.forEach((btn, index) => {
  btn.addEventListener("mouseover", () => {
    for (let i = 0; i < reviewCardSelector.length; i++) {
      reviewCard[i].classList.remove("review-active");
      reviewCardSelector[i].classList.remove("review-card-active");
    }
    reviewCard[index].classList.add("review-active");
    reviewCardSelector[index].classList.add("review-card-active");
  });
});

const elementToView = document.querySelector(".section-courses-cont");
const scrollBtn = document.querySelector(".main-btn-scroll");

scrollBtn.addEventListener("click", function () {
  elementToView.scrollIntoView();
});

const hamburgerBtn = document.getElementById("hamburger-menu"),
  hamburgerSpan = hamburgerBtn.getElementsByTagName("span")[0];

hamburgerBtn.onclick = function () {
  hamburgerSpan.classList.toggle("hamburger-menu-button-close");
};

const sidebar = document.querySelector(".sidebar");
const mouseText = document.querySelector(".mouse-click-over");

if (window.matchMedia("(max-width: 1024px)").matches) {
  sidebar.classList.remove("sidebar");
  sidebar.classList.add("sidebar-active");
  mouseText.innerHTML = "შეეხე  შეფასებას";

  reviewCardSelector.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      for (let i = 0; i < reviewCardSelector.length; i++) {
        reviewCardSelector[i].classList.remove("review-card-open");
      }
      reviewCardSelector[index].classList.add("review-card-open");
    });
  });
}

//Mobile sidebar
const sidebarMobile = document.querySelector(".sidebar-active");
const noScroll = document.querySelector("body");
const logo = document.querySelector(".logo-img");

function openSidebar() {
  sidebar.classList.toggle("sidebar-active-active");
  noScroll.classList.toggle("no-scroll");
  logo.classList.toggle("logo-hide");
  // topFunction();
}

hamburgerBtn.addEventListener("click", openSidebar);

// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }
