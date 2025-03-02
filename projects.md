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
	#toc a { text-decoration: none; text-align: center; font-weight: bold; color: #007bff; }
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
			<li><a href="#project2">MR-compatible Surgical Robot</a></li>
			<li><a href="#fluid_char">Testing rig for hydrostatic actuators</a></li>
			<li><a href="#ribcage">MR-compatible motion phantom</a></li>
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
			<p>Final event and press release video demonstrating the teleoperated robot. This project was a part of my internship at Reazon Human Interaction lab in Summer 2024.</p> 
			<p> <strong>My role:</strong> Ideation, design, and fabrication of the end-effector</p>
		</article>
		<article id="project2" class="project-card collapsible">
			<h2>Design of MR-compatible Robotic System for Liver Biopsy</h2>
			<video class="hover-play" autoplay muted controls>
				<source src="/assets/img/master_slave_demo.mp4" type="video/mp4">
			</video>
			<p> <strong>My role:</strong> Starting with initial concept, I built the first prototype of the system using 3D printing, non-magnetic components, and low-friction hydrostatic actuators </p>
			<button class="toggle-btn">Expand</button>
			<div class="content">
				<video class="hover-play" autoplay muted controls>
					<source src="/assets/img/robot_cad.mp4" type="video/mp4">
				</video>
				<p>Concept CAD demonstrating the robot operating in an MRI chamber.</p>
				<video class="hover-play" autoplay muted controls>
					<source src="/assets/img/robot_in_MR.mp4" type="video/mp4">
				</video>
				<p>Demo of the first prototype</p>
			</div>
		</article>
		<article id="fluid_char" class="project-card collapsible">
			<h2>Characterization of low-friction hydrostatic actuators</h2>
			<video class="hover-play" autoplay muted controls>
				<source src="/assets/img/fluidchar.mp4" type="video/mp4">
			</video>
			<p> <strong>My role:</strong> Built the hardware of the testing rig to characterize hydrostatic actuators for high-fidelity motion and force transmission in teleoperation.</p>
			<button class="toggle-btn">Expand</button>
			<div class="content">
				<img src="/assets/img/setup_schematic.png" class="hover-zoom">
				<p>Schematic of the testing rig</p>
				<img src="/assets/img/position_staircase.png" class="hover-zoom">
				<p> Position Transmission </p>
				<img src="/assets/img/force_staircase.png" class="hover-zoom">
				<p> Force Transmission</p>
				<p>Initial test results demonstrating a highly linear and (almost) 1-to-1 relationship between master and follower actuators. The blue (0 psi) and purple (10 psi) colors represent the different backpressures applied to the actuator pistons. </p>
			</div>
		</article>
		<article id="ribcage" class="project-card collapsible">
			<h2>Development of MR-compatible anthropomorphic motion phantom</h2>
			<video class="hover-play" autoplay muted controls>
				<source src="/assets/img/phantom_motion.mp4" type="video/mp4">
			</video>
			<p> <strong>My role:</strong> Building the phantom to generate repeatable breathing patterns using air blowers. Used balloons as lungs, rubber sheet as diaphragm, and MR-compatible gel for liver with markers embedded for visibility under MRI scans. The aim was to use this phantom to test the robot.</p>
			<button class="toggle-btn">Expand</button>
			<div class="content">
				<img src="/assets/img/test4_all.png" class="hover-zoom">
				<p>Initial test results demonstrating repeatable motion on open-loop control of PWM of the air blowers, the pressure generated inside the lungs, and the motion of the liver</p>
			</div>
		</article>
		<article id="project3" class="project-card">
			<h2>Smart Machining: Data Collection</h2>
			<img src="/assets/img/poster.JPG" class="hover-zoom">
			<p>Poster explaining CNC machining data collection during drilling and milling.</p>
			<p><strong>My role:</strong> Integrated acoustic, vibration, and power sensors with Haas TM2P CNC machine. Collected milling and drilling data across various machining parameters by performing different machining experiments. </p>
		</article>
		<article id="project4" class="project-card collapsible">
			<h2>Soft Robotic Finger</h2>
			<video class="hover-play" autoplay muted controls>
				<source src="/assets/img/extension_onlyT3_Trim.mp4" type="video/mp4">
			</video>
			<p><strong>My role:</strong> Tested the two models of a 3-link 3-joint soft finger using Computer Vision and simulations</p>
			<button class="toggle-btn">Expand</button>
			<div class="content">
				<img src="/assets/img/RRR_model.JPG" class="hover-zoom">
				<img src="/assets/img/RRR_totalfinger.JPG" class="hover-zoom">
			</div>
		</article>
	</section>
	<script>
        document.querySelectorAll('.toggle-btn').forEach(button => {
            button.addEventListener('click', function() {
                const content = this.nextElementSibling;
                content.style.display = content.style.display === 'block' ? 'none' : 'block';
                this.textContent = content.style.display === 'block' ? 'Collapse' : 'Expand';
            });
        });
    </script>
</body>