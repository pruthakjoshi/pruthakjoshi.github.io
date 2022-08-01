---
layout: page
title: Projects
subtitle: A list of things that have taught and tested me on a few things
---

### Modeling and Characterization of a Soft Robotic Finger

<div class="text-center">
	<img src="{{ 'assets/img/RRR_model.JPG' | relative_url }}" alt="Not found" />
	<img src="{{ 'assets/img/RRR_totalfinger.JPG' | relative_url }}" alt="Not found" />
</div>

<video width="768" height="432" autoplay muted>
  <source src="{{ 'assets/img/extension_onlyT3_Trim.mp4' | relative_url }}" alt="Not found" type="video/mp4">
Your browser does not support the video tag.
</video>

<html>
  <head>
    <title>Slideshow Images</title>
    <style>
      .slider {
        width: 500px;
        height: 300px;
        background-color: yellow;
        margin-left: auto;
        margin-right: auto;
        margin-top: 0px;
        text-align: center;
        overflow: hidden;
      }
      .image-container {
        width: 1500px;
        background-color: pink;
        height: 300px;
        clear: both;
        position: relative;
        -webkit-transition: left 2s;
        -moz-transition: left 2s;
        -o-transition: left 2s;
        transition: left 2s;
      }
      .slide {
        float: left;
        margin: 0px;
        padding: 0px;
        position: relative;
      }
      #slide-1:target ~ .image-container {
        left: 0px;
      }
      #slide-2:target ~ .image-container {
        left: -500px;
      }
      .buttons {
        position: relative;
        top: -20px;
      }
      .buttons a {
        display: inline-block;
        height: 15px;
        width: 15px;
        border-radius: 50px;
        background-color: lightgreen;
      }
    </style>
  </head>
  <body>
    <div class="slider">
      <span id="slide-1"></span>
      <span id="slide-2"></span>
      <span id="slide-3"></span>
      <div class="image-container">
        <img src="{{ 'assets/img/RRR_model.JPG' | relative_url }}" class="slide" width="500" height="300" />
        <img src="{{ 'assets/img/RRR_totalfinger.JPG' | relative_url }}" class="slide" width="500" height="300" />
      </div>
      <div class="buttons">
        <a href="#slide-1"></a>
        <a href="#slide-2"></a>
      </div>
    </div>
  </body>
</html>
  
