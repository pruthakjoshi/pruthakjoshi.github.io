---
layout: page
title: Travel
subtitle:
---
### Under Construction

<style>
  .carousel-table {
    width: 100%; /* Adjust width */
    max-width: 100%;
    margin: auto;
    table-layout: fixed;
    border-collapse: collapse;
    border: none
  }
  .carousel-table td {
    width: 50%;
    padding: 10px;
    border: none
    text-align: center;
  }
  .swiper-container {
    width: 150px;
    max-width: 300px;
    height: 150px;
    margin: auto;
    position: relative
  }
  .swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
  .caption {
    text-align: center
  }


  .slideshow-caption {
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    margin-top: 10px;
    color: #333;
  }

  .swiper-pagination {
    position: relative !important; /* Moves the dots below */
    margin-top: 10px; /* Adds space between caption and dots */
    text-align: center;
  }

</style>

<table class="carousel-table">
  <tr>
    <td>
      <div class="swiper mySwiper1">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="/assets/img/japan/IMG_1001.jpg" alt="Trip 1">
            <div class="caption">Chureito Pagoda with Fuji-san in the background</div>
          </div>
          <div class="swiper-slide">
            <img src="/assets/img/japan/IMG_1719.jpg" alt="Trip 1">
            <div class="caption">The mighty Shinkansens (photo from Tokyo station)</div>
          </div>
          <div class="swiper-slide">
            <img src="/assets/img/japan/IMG_1776.jpg" alt="Trip 1">
            <div class="caption">Kiyomizu-dera temple in Kyoto</div>
          </div>
          <div class="swiper-slide">
            <img src="/assets/img/japan/IMG_1795.jpg" alt="Trip 1">
            <div class="caption">Fushimi Inari-taisha Shrine in Kyoto</div>
          </div>
          <div class="swiper-slide">
            <img src="/assets/img/japan/IMG_2120.jpg" alt="Trip 1">
            <div class="caption">State Guest House, Akasaka Palace, Tokyo</div>
          </div>
          <div class="swiper-slide">
            <img src="/assets/img/japan/IMG_2354.jpg" alt="Trip 1">
            <div class="caption">Todai-ji temple, Nara</div>
          </div>
        </div>
        <div class="slideshow-caption">Japan <img src="/assets/img/japan/japan-flag.jpeg" alt="Japanese Flag" width="32"></div>
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


