---
layout: page
title: Projects
subtitle: A showcase of systems I've built or contributed to
css:
  - "/assets/css/projects.css"
js:
  - "/assets/js/projects.js"
---

<nav>
	<ul id="toc">
		<li><a href="#openarm01">Bimanual humanoid arms</a></li>
		<li><a href="#project1">Teleoperated Bartender</a></li>
		<li><a href="#project2">MRI Surgical Robot</a></li>
		<li><a href="#fluid_char">Hydrostatic Actuators</a></li>
		<li><a href="#ribcage">Motion Phantom</a></li>
		<li><a href="#project3">Smart Machining</a></li>
		<li><a href="#project4">Soft Finger</a></li>
	</ul>
</nav>

<section class="project-grid">

<article id="openarm01" class="project-card">
	<div class="project-header">
		<h2>Bimanual 7-DOF humanoid arms</h2>
	</div>
	<div class="project-content">
		<div class="video-container">
			<iframe width="100%" height="315"
				src="https://www.youtube.com/embed/6ZLM6f8kF4Q?autoplay=1&mute=1&loop=1&playlist=6ZLM6f8kF4Q&rel=0&modestbranding=1"
				title="YouTube video player" frameborder="0"
				allow="autoplay; encrypted-media" allowfullscreen>
			</iframe>
		</div>
		<p>Built the hardware behind OpenArm 01. Total BOM cost ~$6500. Nominal Payload 4.1kg, Peak Payload 6.0kg. Arm weight 5.5kg. Visit: <a href="https://openarm.dev/">https://openarm.dev/</a></p>
	</div>
</article>

<article id="project1" class="project-card">
	<div class="project-header">
		<h2>Teleoperated Bartender End-Effector</h2>
	</div>
	<div class="project-content">
		<div class="video-container">
			<iframe width="100%" height="315"
				src="https://www.youtube.com/embed/qySb-Zqn2x0?autoplay=1&mute=1&loop=1&playlist=qySb-Zqn2x0&rel=0&modestbranding=1"
				title="YouTube video player" frameborder="0"
				allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
			</iframe>
		</div>
		<p>Designed and fabricated the end-effector for a semi-humanoid robot. This project was developed during my internship at Reazon Human Interaction Lab, Summer 2024.</p>
	</div>
</article>

<article id="project2" class="project-card collapsible">
	<div class="project-header">
		<h2>MR-Compatible Surgical Robot</h2>
	</div>
	<div class="project-content">
		<div class="media-container">
			<video class="hover-play" autoplay muted controls>
				<source src="/assets/img/master_slave_demo.mp4" type="video/mp4">
			</video>
		</div>
		<p>Built the first prototype for a liver biopsy robot using 3D printing, hydrostatic actuators, and non-magnetic materials.</p>
		<button class="toggle-btn">Learn More</button>
		<div class="content">
			<div class="media-container">
				<video class="hover-play" autoplay muted controls>
					<source src="/assets/img/robot_cad.mp4" type="video/mp4">
				</video>
			</div>
			<p>CAD demo of robot inside MRI chamber</p>
			<div class="media-container">
				<video class="hover-play" autoplay muted controls>
					<source src="/assets/img/robot_in_MR.mp4" type="video/mp4">
				</video>
			</div>
			<p>Prototype testing</p>
		</div>
	</div>
</article>

<article id="fluid_char" class="project-card collapsible">
	<div class="project-header">
		<h2>Low-Friction Hydrostatic Actuator Testing</h2>
	</div>
	<div class="project-content">
		<div class="media-container">
			<video class="hover-play" autoplay muted controls>
				<source src="/assets/img/fluidchar.mp4" type="video/mp4">
			</video>
		</div>
		<p>Built a test rig to analyze linearity and force-position characteristics of hydrostatic actuators used for haptic teleoperation.</p>
		<button class="toggle-btn">Learn More</button>
		<div class="content">
			<img src="/assets/img/setup_schematic.png" class="hover-zoom">
			<p>System Schematic</p>
			<img src="/assets/img/position_staircase.png" class="hover-zoom">
			<p>Position Control Data</p>
			<img src="/assets/img/force_staircase.png" class="hover-zoom">
			<p>Force Control Data</p>
		</div>
	</div>
</article>

<article id="ribcage" class="project-card collapsible">
	<div class="project-header">
		<h2>MR-Compatible Motion Phantom</h2>
	</div>
	<div class="project-content">
		<div class="media-container">
			<video class="hover-play" autoplay muted controls>
				<source src="/assets/img/phantom_motion.mp4" type="video/mp4">
			</video>
		</div>
		<p>Built a breathing phantom using air blowers and MR-visible liver to simulate human motion inside an MRI scanner.</p>
		<button class="toggle-btn">Learn More</button>
		<div class="content">
			<img src="/assets/img/test4_all.png" class="hover-zoom">
			<p>Open-loop actuation test results</p>
		</div>
	</div>
</article>

<article id="project3" class="project-card">
	<div class="project-header">
		<h2>Smart Machining Data Collection</h2>
	</div>
	<div class="project-content">
		<div class="media-container">
			<img src="/assets/img/poster.JPG" class="hover-zoom">
		</div>
		<p>Instrumented a CNC machine with sensors to collect data during drilling/milling. Data used to explore predictive maintenance and process diagnostics.</p>
	</div>
</article>

<article id="project4" class="project-card collapsible">
	<div class="project-header">
		<h2>Soft Robotic Finger</h2>
	</div>
	<div class="project-content">
		<div class="media-container">
			<video class="hover-play" autoplay muted controls>
				<source src="/assets/img/extension_onlyT3_Trim.mp4" type="video/mp4">
			</video>
		</div>
		<p>Evaluated two soft finger designs using CV tracking and kinematic simulations.</p>
		<button class="toggle-btn">Learn More</button>
		<div class="content">
			<img src="/assets/img/RRR_model.JPG" class="hover-zoom">
			<img src="/assets/img/RRR_totalfinger.JPG" class="hover-zoom">
		</div>
	</div>
</article>

</section>
