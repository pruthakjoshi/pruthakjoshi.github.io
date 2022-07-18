---
layout: page
title: About me
subtitle: 
---

My name is Pruthak Joshi. I have completed my Bachelor's and Master's in Mechanical Engineering from [IIT Bombay](https://www.iitb.ac.in/). I like machines to look and behave as per my liking, which led me to pursue my studies in Mechanical Engineering, specializing in Computer Aided Design and Automation. If you want to check out a few of my projects, visit my [projects](https://pruthakjoshi.github.io/projects/) page. 

I enjoy playing tennis, and regularly follow Formula-1, and am a Tifosi by heart (Go Charles!!!). As with almost all Indians, I am also an avid follower of cricket, and enjoy playing a game or two occasionally. I like exploring new places, and am always up to go ice-cream hunting. I also enjoy watching movies, "The Shawshank Redemption" being my all time favourite.

<div class="text-center">
	<img src="{{ 'assets/img/tennis.jpeg' | relative_url }}" alt="Not found" />
	<figcaption>I along with my coach and other 23 batchmates as a part of NSO Tennis group</figcaption>
</div>

Throughout my journey at IIT Bombay, which was my home for about 5 years (which was substantially shortened due to the pandemic :/), I was involved in different roles, right from my sophomore year till my senior year. A few of them were:

- [IITB Mars Rover Team](https://iitbmartian.github.io/)

The IITB Mars Rover Team (MRT) is a student technical team consisting of 40+ members from various disciplines at IITB working towards developing a semi-autonomous rover to participate in various student rover design competitions including the [University Rover Challenge](https://urc.marssociety.org/) and [International Rover Challenge](https://roverchallenge.org/). 
<figure>
	<img src="{{ 'assets/img/mrt.JPG' | relative_url }}" alt="Not found" />
	<figcaption>The team participating in URC at the Mars Desert Research Station at Utah, U.S.A</figcaption>
</figure>
 
<!-- Slideshow container -->
<div class="slideshow-container">

  <!-- Full-width images with number and caption text -->
  <div class="mySlides fade">
    <div class="numbertext">1 / 3</div>
    <img src="{{ 'assets/img/mrt.JPG' | relative_url }}" style="width:100%">
    <div class="text">Caption Text</div>
  </div>

  <div class="mySlides fade">
    <div class="numbertext">2 / 3</div>
    <img src="{{ 'assets/img/rover.JPG' | relative_url }}" style="width:100%">
    <div class="text">Caption Two</div>
  </div>

  <div class="mySlides fade">
    <div class="numbertext">3 / 3</div>
    <img src="{{ 'assets/img/team_18_19.jpg' | relative_url }}" style="width:100%">
    <div class="text">Caption Three</div>
  </div>

  <!-- Next and previous buttons -->
  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
  <a class="next" onclick="plusSlides(1)">&#10095;</a>
</div>
<br>

<!-- The dots/circles -->
<div style="text-align:center">
  <span class="dot" onclick="currentSlide(1)"></span>
  <span class="dot" onclick="currentSlide(2)"></span>
  <span class="dot" onclick="currentSlide(3)"></span>
</div>

* {box-sizing:border-box}

# Slideshow container 
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

# Hide the images by default 
.mySlides {
  display: none;
}

# Next & previous buttons 
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

# Position the "next button" to the right 
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

# On hover, add a black background color with a little bit see-through 
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}

# Caption text 
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

# Number text (1/3 etc) 
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

# The dots/bullets/indicators 
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot:hover {
  background-color: #717171;
}

# Fading animation 
.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}

let slideIndex = 1;
showSlides(slideIndex);

# Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

# Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


I joined the team in my sophomore year as a Junior Design Engineer and went on to assume the role of Team Leader in my senior year. As the Team Leader, I led the team to 4th position in Indian Rover Design Challenge 2020, the team's best ever position in any international competition. Being in the team taught me what it means to be an engineer - to get things done while optimising the use of available resources.

- ISMP and DAMP 

The [Student Mentor Programme](https://smp.gymkhana.iitb.ac.in/index.html) at IITB is a student community aiming to provide a reliable and comprehensive support system from within and for the student community to motivate students to excel in both academic and non-academic fields and to make the most of their life at IIT Bombay. Some of my most treasured experiences have been through mentoring juniors as an Institute Student Mentor and Department Academic Mentor for 2 years. 

