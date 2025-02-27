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


<table class="table">
  <tr>
    <td>
      <div class="slick-slider">
        <div><img src="/assets/img/japan/IMG_1001.jpg" alt="Slide 1"></div>
        <div><img src="/assets/img/japan/IMG_1719.jpg" alt="Slide 2"></div>
        <div><img src="/assets/img/japan/IMG_1776.jpg" alt="Slide 3"></div>
		    <!--<div><img src="/assets/img/japan/IMG_1795.jpg" alt="Slide 4"></div>
		    <div><img src="/assets/img/japan/IMG_2120.jpg" alt="Slide 5"></div>
		    <div><img src="/assets/img/japan/IMG_2354.jpg" alt="Slide 6"></div>-->
      </div>
    </td>
    <td>
      <div class="slick-slider">
        <div><img src="/assets/img/japan/IMG_1001.jpg" alt="Slide 1"></div>
        <div><img src="/assets/img/japan/IMG_1719.jpg" alt="Slide 2"></div>
        <div><img src="/assets/img/japan/IMG_1776.jpg" alt="Slide 3"></div>
		    <!--<div><img src="/assets/img/japan/IMG_1795.jpg" alt="Slide 4"></div>
		    <div><img src="/assets/img/japan/IMG_2120.jpg" alt="Slide 5"></div>
		    <div><img src="/assets/img/japan/IMG_2354.jpg" alt="Slide 6"></div>-->
      </div>
    </td>
  </tr>
</table>

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


<div class="swiper-container">
   <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="/assets/img/japan/IMG_1001.jpg" alt="Image 1"></div>
      <div class="swiper-slide"><img src="/assets/img/japan/IMG_1719.jpg" alt="Slide 2"></div>
      <div class="swiper-slide"><img src="/assets/img/japan/IMG_1776.jpg" alt="Slide 3"></div>
   </div>
   <div class="swiper-pagination"></div>
   <div class="swiper-button-next"></div>
   <div class="swiper-button-prev"></div>
</div>

<script>
   var swiper = new Swiper('.swiper-container', {
      loop: true,
      autoplay: { delay: 3000 },
      pagination: { el: '.swiper-pagination', clickable: true },
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }
   });
</script>
