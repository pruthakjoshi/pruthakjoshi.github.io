document.addEventListener("DOMContentLoaded", function () {
  if (typeof Swiper === "undefined") {
    return;
  }

  document.querySelectorAll(".travel-grid .swiper").forEach(function (carousel) {
    new Swiper(carousel, {
      loop: true,
      autoplay: { delay: 5000 },
      slidesPerView: 1,
      pagination: {
        el: carousel.querySelector(".swiper-pagination"),
        clickable: true
      }
    });
  });
});
