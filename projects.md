---
layout: page
title: Projects
subtitle: Things that I have worked on over the years
---

<style>
	/*body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f4f4f4; }
	header { text-align: center; padding: 20px; }*/
	#toc { list-style: none; padding: 0; display: flex; justify-content: center; gap: 20px; }
	#toc li { display: inline; }
	#toc a { text-decoration: none; font-weight: bold; color: #007bff; }
	.project-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
	.project-card { background: white; padding: 15px; border-radius: 8px; box-shadow: 2px 2px 10px rgba(0,0,0,0.1); }
	video, img { width: 100%; border-radius: 5px; transition: transform 0.3s ease; }
	.hover-play:hover { transform: scale(1.05); }
	.hover-zoom:hover { transform: scale(1.1); }
	.collapsible .content { display: none; }
	.toggle-btn { display: block; width: 100%; padding: 10px; margin-top: 10px; background: #007bff; color: white; border: none; cursor: pointer; }
</style>

<body>
	<nav>
		<ul id="toc">
			<li><a href="#project1">End-Effector of Teleoperated Bartender</a></li>
			<li><a href="#project2">MR-compatible Robot for Liver Biopsy</a></li>
			<li><a href="#project3">Smart Machining</a></li>
			<li><a href="#project4">Soft Robotic Finger</a></li>
		</ul>
	</nav>
	<section class="project-grid">
		<article id="project1" class="project-card">
			<h2>Design of End-Effector for Robust Teleoperation</h2>
			<video class="hover-play" autoplay muted controls>
				<source src="/assets/img/REAZON-TRIAD-PV-1MIN.mp4" type="video/mp4">
			</video>
			<p>Final event and press release video demonstrating the teleoperated robot.</p> 
			<p> <strong>My role:</strong> Ideation, design, and fabrication of the end-effector</p>
		</article>
		<article id="project2" class="project-card">
			<h2>Design of MR-compatible Robotic System</h2>
			<div class="content">
				<video class="hover-play" autoplay muted controls>
					<source src="/assets/img/robot_cad.mp4" type="video/mp4">
				</video>
				<p>Concept CAD demonstrating the robot operating in an MRI chamber.</p>
				<p> <strong>My role:</strong>Starting with initial concept, I built the first prototype of the system using 3D printing, non-magnetic components, and low-friction hydrostatic actuators
				<video class="hover-play" autoplay muted controls>
					<source src="/assets/img/master_slave_demo.mp4" type="video/mp4">
				</video>
				<p>First prototype of master and slave connected via hydrostatic transmission.</p>
			</div>
		</article>
		<article id="project3" class="project-card">
			<h2>Smart Machining: Data Collection</h2>
			<img src="/assets/img/poster.JPG" class="hover-zoom">
			<p>Poster explaining CNC machining data collection during drilling and milling.</p>
		</article>
		<article id="project4" class="project-card">
			<h2>Soft Robotic Finger</h2>
			<img src="/assets/img/RRR_model.JPG" class="hover-zoom">
			<img src="/assets/img/RRR_totalfinger.JPG" class="hover-zoom">
			<video class="hover-play" autoplay muted controls>
				<source src="/assets/img/extension_onlyT3_Trim.mp4" type="video/mp4">
			</video>
		</article>
	</section>
</body>