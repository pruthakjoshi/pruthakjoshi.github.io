---
layout: page
title: Travel
subtitle:
---
### Under Construction

<style>
  .carousel-table {
    width: 80%; /* Adjust width */
    max-width: 900px;
    margin: auto;
    table-layout: fixed;
    border-collapse: collapse;
  }
  .carousel-table td {
    width: 50%;
    padding: 10px;
    text-align: center;
  }
  .swiper-container {
    width: 100%;
    max-width: 300px;
    height: 200px;
    margin: auto;
  }
  .swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
</style>

<table class="carousel-table">
  <tr>
    <td>
      <div class="swiper mySwiper1">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="/assets/img/japan/IMG_1001.jpg" alt="Trip 1"></div>
          <div class="swiper-slide"><img src="/assets/img/japan/IMG_1719.jpg" alt="Trip 1"></div>
          <div class="swiper-slide"><img src="/assets/img/japan/IMG_1776.jpg" alt="Trip 1"></div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </td>
    <td>
      <div class="swiper mySwiper2">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="/assets/img/japan/IMG_1001.jpg" alt="Trip 2"></div>
          <div class="swiper-slide"><img src="/assets/img/japan/IMG_1719.jpg" alt="Trip 2"></div>
          <div class="swiper-slide"><img src="/assets/img/japan/IMG_1776.jpg" alt="Trip 2"></div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </td>
  </tr>
</table>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    let carousels = document.querySelectorAll(".swiper");
    carousels.forEach((carousel, index) => {
      new Swiper(`.mySwiper${index + 1}`, {
        loop: true,
        autoplay: { delay: 3000 },
        slidesPerView: 1,
        pagination: { el: ".swiper-pagination", clickable: true },
      });
    });
  });
</script>


