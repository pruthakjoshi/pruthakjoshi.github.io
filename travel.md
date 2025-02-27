---
layout: page
title: Travel
subtitle:
---
### Under Construction

<!--
<div id="slideshow">
	<div class="slide-fade">
		<div class="slide">
			<img src="{{ 'assets/img/japan/IMG_1001.jpg' | relative_url }}" alt="Not found" />
		</div>
		<div class="slide">
			<img src="{{ 'assets/img/japan/IMG_1719.jpg' | relative_url }}" alt="Not found" />
		</div>
		<div class="slide">
			<img src="{{ 'assets/img/japan/IMG_1776.jpg' | relative_url }}" alt="Not found" />
		</div>
		<div class="slide">
			<img src="{{ 'assets/img/japan/IMG_1795.jpg' | relative_url }}" alt="Not found" />
		</div>
		<div class="slide">
			<img src="{{ 'assets/img/japan/IMG_2120.jpg' | relative_url }}" alt="Not found" />
		</div>
		<div class="slide">
			<img src="{{ 'assets/img/japan/IMG_2354.jpg' | relative_url }}" alt="Not found" />
		</div>
		<figcaption>Japan</figcaption>
	</div>
</div>-->

<!--
<div id="slideshow">
<div class="slideshow-container">
  <div class="slide fade">
    <img src="assets/img/japan/IMG_1001.jpg" alt="Slide 1" />
  </div>
  <div class="slide fade">
    <img src="assets/img/japan/IMG_1719.jpg" alt="Slide 2" />
  </div>
  <div class="slide fade">
    <img src="assets/img/japan/IMG_1776.jpg" alt="Slide 3" />
  </div>
  <div class="slide fade">
    <img src="assets/img/japan/IMG_1795.jpg" alt="Slide 4" />	
  </div>
</div> 
</div>
-->

<style>
  .carousel-table {
    width: 80%; /* Adjust as needed */
    max-width: 900px; /* Prevents the table from getting too wide */
    margin: auto; /* Centers the table */
  }

  .carousel-table td {
    padding: 10px;
    vertical-align: top;
    width: 50%; /* Adjust for number of columns */
  }
  .swiper-container {
    width: 100%;
    max-width: 400px; /* Adjust as needed */
    height: 300px; /* Set a fixed height */
    margin: auto;
  }

  .swiper-slide img {
    width: 100%;  /* Make the image fill the container */
    height: 100%;
    object-fit: cover; /* Maintain aspect ratio and crop if needed */
    border-radius: 10px;
  }

</style>

<div style="max-width: 900px; margin: auto;">
  <table class="carousel-table">
    <tr>
      <td>
        <div class="swiper mySwiper1">
          <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="/assets/img/japan/IMG_1001.jpg" alt="Slide 1" ></div>
          </div>
          <div class="swiper-pagination"></div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </td>
      <td>
        <div class="swiper mySwiper2">
          <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="/assets/img/japan/IMG_1001.jpg" alt="Slide 1" ></div>
          </div>
          <div class="swiper-pagination"></div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <div class="swiper mySwiper3">
          <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="/assets/img/japan/IMG_1001.jpg" alt="Slide 1" ></div>
          </div>
          <div class="swiper-pagination"></div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </td>
      <td>
        <div class="swiper mySwiper4">
          <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="/assets/img/japan/IMG_1001.jpg" alt="Slide 1" ></div>
            <div class="swiper-slide"><img src="/assets/img/japan/IMG_1719.jpg" alt="Slide 1" ></div>
          </div>
          <div class="swiper-pagination"></div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </td>
    </tr>
  </table>
</div>



