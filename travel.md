---
layout: page
title: Travel
subtitle:
---

<style>
  .carousel-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    padding: 1rem;
  }

  .carousel-item {
    flex: 1 1 300px;
    max-width: 400px;
    min-width: 250px;
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 10px;
  }

  .caption {
    text-align: center;
    font-size: 0.9rem;
    padding: 0.5rem 0;
  }

  .slideshow-caption {
    text-align: center;
    font-weight: bold;
    font-size: 1.1rem;
    margin-top: 0.5rem;
  }

  @media screen and (max-width: 600px) {
    .carousel-item {
      flex: 1 1 100%;
      max-width: 100%;
    }
  }
</style>

<div class="carousel-grid">
  <!-- Japan -->
  <div class="carousel-item">
    <div class="swiper mySwiper1">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="/assets/img/japan/IMG_1001.jpg"><div class="caption">Chureito Pagoda with Fuji-san in the background</div></div>
        <div class="swiper-slide"><img src="/assets/img/japan/hiroshima.JPEG"><div class="caption">Atomic Bomb Memorial, Hiroshima</div></div>
        <div class="swiper-slide"><img src="/assets/img/japan/osaka.JPEG"><div class="caption">Namba Yasaka Jinja, Osaka</div></div>
        <div class="swiper-slide"><img src="/assets/img/japan/IMG_1767.JPEG"><div class="caption">Hokan-ji temple, Kyoto</div></div>
        <div class="swiper-slide"><img src="/assets/img/japan/IMG_1719.jpg"><div class="caption">The mighty Shinkansens (photo from Tokyo station)</div></div>
        <div class="swiper-slide"><img src="/assets/img/japan/IMG_1776.jpg"><div class="caption">Kiyomizu-dera temple in Kyoto</div></div>
        <div class="swiper-slide"><img src="/assets/img/japan/IMG_1795.jpg"><div class="caption">Fushimi Inari-taisha Shrine in Kyoto</div></div>
        <div class="swiper-slide"><img src="/assets/img/japan/IMG_2120.jpg"><div class="caption">State Guest House, Akasaka Palace, Tokyo</div></div>
        <div class="swiper-slide"><img src="/assets/img/japan/IMG_2354.jpg"><div class="caption">Todai-ji temple, Nara</div></div>
      </div>
      <div class="slideshow-caption">Japan</div>
      <div class="swiper-pagination"></div>
    </div>
  </div>

  <!-- USA -->
  <div class="carousel-item">
    <div class="swiper mySwiper2">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="/assets/img/US/nyc2.JPEG"><div class="caption">New York City</div></div>
        <div class="swiper-slide"><img src="/assets/img/US/goldengate.jpg"><div class="caption">SFO</div></div>
        <div class="swiper-slide"><img src="/assets/img/US/LA.JPEG"><div class="caption">Getty Villa, LA</div></div>
        <div class="swiper-slide"><img src="/assets/img/US/houston.JPEG"><div class="caption">NASA, Houston</div></div>
        <div class="swiper-slide"><img src="/assets/img/US/dallas.JPEG"><div class="caption">Dallas</div></div>
        <div class="swiper-slide"><img src="/assets/img/US/dc.JPEG"><div class="caption">Washington D.C.</div></div>
        <div class="swiper-slide"><img src="/assets/img/US/nyc.JPEG"><div class="caption">Dumbo, NYC</div></div>
        <div class="swiper-slide"><img src="/assets/img/US/orlando.JPEG"><div class="caption">Orlando, FL</div></div>
        <div class="swiper-slide"><img src="/assets/img/US/seattle.JPEG"><div class="caption">Seattle</div></div>
        <div class="swiper-slide"><img src="/assets/img/US/solvang.JPEG"><div class="caption">Solvang, CA</div></div>
        <div class="swiper-slide"><img src="/assets/img/US/vegas.JPEG"><div class="caption">Las Vegas</div></div>
        <div class="swiper-slide"><img src="/assets/img/US/big_bear.JPEG"><div class="caption">Big Bear Lake, CA</div></div>
        <div class="swiper-slide"><img src="/assets/img/US/djoko.jpg"><div class="caption">Novak Djokovic practising at UCLA tennis courts</div></div>
      </div>
      <div class="slideshow-caption">U.S.A.</div>
      <div class="swiper-pagination"></div>
    </div>
  </div>

  <!-- Canada -->
  <div class="carousel-item">
    <div class="swiper mySwiper3">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="/assets/img/canada/vancouver1.jpg"><div class="caption">Canada Place, Vancouver</div></div>
        <div class="swiper-slide"><img src="/assets/img/canada/toronto.jpg"><div class="caption">Toronto Skyline</div></div>
        <div class="swiper-slide"><img src="/assets/img/canada/vancouver2.jpg"><div class="caption">Cypress Mountain</div></div>
        <div class="swiper-slide"><img src="/assets/img/canada/cntower.jpg"><div class="caption">CN Tower</div></div>
        <div class="swiper-slide"><img src="/assets/img/canada/vancouver3.jpg"><div class="caption">Science World</div></div>
        <div class="swiper-slide"><img src="/assets/img/canada/cntowerview.jpg"><div class="caption">View from CN Tower</div></div>
        <div class="swiper-slide"><img src="/assets/img/canada/vancouver4.jpg"><div class="caption">Queen Elizabeth Park</div></div>
        <div class="swiper-slide"><img src="/assets/img/canada/locks.jpg"><div class="caption"></div></div>
        <div class="swiper-slide"><img src="/assets/img/canada/sign.jpg"><div class="caption">Thanks for the heads up!</div></div>
      </div>
      <div class="slideshow-caption">Canada</div>
      <div class="swiper-pagination"></div>
    </div>
  </div>

  <!-- Bali -->
  <div class="carousel-item">
    <div class="swiper mySwiper4">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="/assets/img/bali/garuda.png"><div class="caption">Garuda statue</div></div>
        <div class="swiper-slide"><img src="/assets/img/bali/nusa_penida.png"><div class="caption">Nusa Penida</div></div>
        <div class="swiper-slide"><img src="/assets/img/bali/monkey_selfie.png"><div class="caption">Monkey Selfie</div></div>
        <div class="swiper-slide"><img src="/assets/img/bali/rafting.jpeg"><div class="caption">Rafting in Ayung River</div></div>
        <div class="swiper-slide"><img src="/assets/img/bali/swing.png"><div class="caption">Bali Swing</div></div>
        <div class="swiper-slide"><img src="/assets/img/bali/beach.jpg"><div class="caption">Bali Beach</div></div>
        <div class="swiper-slide"><img src="/assets/img/bali/IMG_9290-ANIMATION.jpg"><div class="caption">Waterfall on rafting trail</div></div>
      </div>
      <div class="slideshow-caption">Bali</div>
      <div class="swiper-pagination"></div>
    </div>
  </div>

  <!-- Thailand -->
  <div class="carousel-item">
    <div class="swiper mySwiper5">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="/assets/img/thailand/jetski.jpg"><div class="caption">Jetski, Pattaya</div></div>
        <div class="swiper-slide"><img src="/assets/img/thailand/temple.jpg"><div class="caption">Sanctuary of Truth</div></div>
        <div class="swiper-slide"><img src="/assets/img/thailand/buddha_head.jpg"><div class="caption">Wat Mahathat</div></div>
        <div class="swiper-slide"><img src="/assets/img/thailand/sleeping_buddha.jpg"><div class="caption">Wat Pho</div></div>
      </div>
      <div class="slideshow-caption">Thailand</div>
      <div class="swiper-pagination"></div>
    </div>
  </div>

  <!-- UAE -->
  <div class="carousel-item">
    <div class="swiper mySwiper6">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="/assets/img/dubai/IMG_2456.JPG"><div class="caption">Sheikh Zayed Mosque</div></div>
        <div class="swiper-slide"><img src="/assets/img/dubai/IMG_2265.JPG"><div class="caption">Dubai Skyline</div></div>
        <div class="swiper-slide"><img src="/assets/img/dubai/ferrari_world.jpg"><div class="caption">Ferrari World, Abu Dhabi</div></div>
        <div class="swiper-slide"><img src="/assets/img/dubai/IMG_1484.JPG"><div class="caption">Atlantis The Palm</div></div>
      </div>
      <div class="slideshow-caption">U.A.E.</div>
      <div class="swiper-pagination"></div>
    </div>
  </div>

  <!-- India -->
  <div class="carousel-item">
    <div class="swiper mySwiper7">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="/assets/img/india/scuba.JPG"><div class="caption">Scuba at Neil Island</div></div>
        <div class="swiper-slide"><img src="/assets/img/india/taj_mahal.JPEG"><div class="caption">Taj Mahal</div></div>
        <div class="swiper-slide"><img src="/assets/img/india/lotus_temple.JPEG"><div class="caption">Lotus Temple</div></div>
        <div class="swiper-slide"><img src="/assets/img/india/thiksey monastery.JPG"><div class="caption">Thiksey Monastery</div></div>
        <div class="swiper-slide"><img src="/assets/img/india/chinesenets.JPG"><div class="caption">Chinese fishing nets</div></div>
        <div class="swiper-slide"><img src="/assets/img/india/khardung_la.JPG"><div class="caption">Khardung La</div></div>
        <div class="swiper-slide"><img src="/assets/img/india/ellora.JPG"><div class="caption">Kailash Temple, Ellora</div></div>
        <div class="swiper-slide"><img src="/assets/img/india/jaisalmer_sand.JPG"><div class="caption">Thar Desert, Jaisalmer</div></div>
        <div class="swiper-slide"><img src="/assets/img/india/pangong_tso.JPG"><div class="caption">Pangong Tso</div></div>
        <div class="swiper-slide"><img src="/assets/img/india/allepey.JPG"><div class="caption">Alappuzha Backwaters</div></div>
      </div>
      <div class="slideshow-caption">India</div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</div>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    let carousels = document.querySelectorAll(".swiper");
    carousels.forEach((carousel, index) => {
      new Swiper(`.mySwiper${index + 1}`, {
        loop: true,
        autoplay: { delay: 5000 },
        slidesPerView: 1,
        pagination: { el: ".swiper-pagination", clickable: true },
      });
    });
  });
</script>
