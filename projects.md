---
layout: page
title: Projects
subtitle: A showcase of systems I've built or contributed to
---

<style>
	h1, h2, h3, p { text-align: center; }
	#toc {
		list-style: none;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 16px;
		margin-bottom: 30px;
	}
	#toc li a {
		text-decoration: none;
		font-weight: 600;
		color: #007bff;
		padding: 6px 12px;
		border-radius: 5px;
		transition: background 0.3s;
	}
	#toc li a:hover {
		background-color: #e6f0ff;
	}
	.project-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		gap: 24px;
		padding: 0 20px;
	}
	.project-card {
		background: #fff;
		padding: 20px;
		border-radius: 12px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
		transition: transform 0.2s ease, box-shadow 0.3s ease;
	}
	.project-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
	}
	video, img {
		width: 100%;
		border-radius: 8px;
		margin-top: 10px;
	}
	.hover-play:hover, .hover-zoom:hover {
		transform: scale(1.03);
	}
	.collapsible .content { display: none; margin-top: 10px; }
	.toggle-btn {
		display: inline-block;
		margin-top: 10px;
		background: #007bff;
		color: white;
		border: none;
		padding: 8px 16px;
		border-radius: 6px;
		cursor: pointer;
	}
	.video-container {
		position: relative;
		width: 100%;
		padding-bottom: 56.25%; /* 16:9 aspect ratio */
		height: 0;
		overflow: hidden;
		border-radius: 8px;
		margin-top: 10px;
	}

	.video-container iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	
</style>

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
	<h2>Bimanual 7-DOF humanoid arms</h2>
	<div class="video-container">
	<iframe width="100%" height="315"
		src="https://www.youtube.com/embed/6ZLM6f8kF4Q?autoplay=1&mute=1&loop=1&playlist=6ZLM6f8kF4Q&rel=0&modestbranding=1"
		title="YouTube video player" frameborder="0"
		allow="autoplay; encrypted-media" allowfullscreen>
	</iframe>
	</div>
	<p>Built the hardware behind OpenArm 01. Total BOM cost ~$6500. Nominal Payload 4.1kg, Peak Payload 6.0kg. Arm weight 5.5kg Visit: <a href="https://openarm.dev/">https://openarm.dev/</a></p>
</article>

<article id="project1" class="project-card">
	<h2>Teleoperated Bartender End-Effector</h2>
	<div class="video-container">
	<iframe width="100%" height="315"
		src="https://www.youtube.com/embed/qySb-Zqn2x0?autoplay=1&mute=1&loop=1&playlist=qySb-Zqn2x0&rel=0&modestbranding=1"
		title="YouTube video player" frameborder="0"
		allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
	</iframe>
	</div>
	<p>Designed and fabricated the end-effector for a semi-humanoid robot. This project was developed during my internship at Reazon Human Interaction Lab, Summer 2024.</p>
</article>

<article id="project2" class="project-card collapsible">
	<h2>MR-Compatible Surgical Robot</h2>
	<video class="hover-play" autoplay muted controls>
		<source src="/assets/img/master_slave_demo.mp4" type="video/mp4">
	</video>
	<p>Built the first prototype for a liver biopsy robot using 3D printing, hydrostatic actuators, and non-magnetic materials.</p>
	<button class="toggle-btn">Expand</button>
	<div class="content">
		<video class="hover-play" autoplay muted controls>
			<source src="/assets/img/robot_cad.mp4" type="video/mp4">
		</video>
		<p>CAD demo of robot inside MRI chamber</p>
		<video class="hover-play" autoplay muted controls>
			<source src="/assets/img/robot_in_MR.mp4" type="video/mp4">
		</video>
		<p>Prototype testing</p>
	</div>
</article>

<article id="fluid_char" class="project-card collapsible">
	<h2>Low-Friction Hydrostatic Actuator Testing</h2>
	<video class="hover-play" autoplay muted controls>
		<source src="/assets/img/fluidchar.mp4" type="video/mp4">
	</video>
	<p>Built a test rig to analyze linearity and force-position characteristics of hydrostatic actuators used for haptic teleoperation.</p>
	<button class="toggle-btn">Expand</button>
	<div class="content">
		<img src="/assets/img/setup_schematic.png" class="hover-zoom">
		<p>System Schematic</p>
		<img src="/assets/img/position_staircase.png" class="hover-zoom">
		<p>Position Control Data</p>
		<img src="/assets/img/force_staircase.png" class="hover-zoom">
		<p>Force Control Data</p>
	</div>
</article>

<article id="ribcage" class="project-card collapsible">
	<h2>MR-Compatible Motion Phantom</h2>
	<video class="hover-play" autoplay muted controls>
		<source src="/assets/img/phantom_motion.mp4" type="video/mp4">
	</video>
	<p>Built a breathing phantom using air blowers and MR-visible liver to simulate human motion inside an MRI scanner.</p>
	<button class="toggle-btn">Expand</button>
	<div class="content">
		<img src="/assets/img/test4_all.png" class="hover-zoom">
		<p>Open-loop actuation test results</p>
	</div>
</article>

<article id="project3" class="project-card">
	<h2>Smart Machining Data Collection</h2>
	<img src="/assets/img/poster.JPG" class="hover-zoom">
	<p>Instrumented a CNC machine with sensors to collect data during drilling/milling. Data used to explore predictive maintenance and process diagnostics.</p>
</article>

<article id="project4" class="project-card collapsible">
	<h2>Soft Robotic Finger</h2>
	<video class="hover-play" autoplay muted controls>
		<source src="/assets/img/extension_onlyT3_Trim.mp4" type="video/mp4">
	</video>
	<p>Evaluated two soft finger designs using CV tracking and kinematic simulations.</p>
	<button class="toggle-btn">Expand</button>
	<div class="content">
		<img src="/assets/img/RRR_model.JPG" class="hover-zoom">
		<img src="/assets/img/RRR_totalfinger.JPG" class="hover-zoom">
	</div>
</article>

</section>

<script>
	document.querySelectorAll('.toggle-btn').forEach(button => {
		button.addEventListener('click', function () {
			const content = this.nextElementSibling;
			content.style.display = content.style.display === 'block' ? 'none' : 'block';
			this.textContent = content.style.display === 'block' ? 'Collapse' : 'Expand';
		});
	});
</script>
