---
layout: page
title: Projects
subtitle: Short case studies of systems I have built or contributed to
css:
  - "/assets/css/projects.css"
js:
  - "/assets/js/projects.js"
---

<nav aria-label="Projects">
	<ul id="toc">
		<li><a href="#openarm">OpenArm</a></li>
		<li><a href="#teleoperated-bartender">Teleoperated Bartender</a></li>
		<li><a href="#mri-surgical-robot">MRI Surgical Robot</a></li>
		<li><a href="#hydrostatic-actuators">Hydrostatic Actuators</a></li>
		<li><a href="#motion-phantom">Motion Phantom</a></li>
		<li><a href="#smart-machining">Smart Machining</a></li>
		<li><a href="#soft-finger">Soft Finger</a></li>
	</ul>
</nav>

<section class="project-grid">

<article id="openarm" class="project-card project-card-featured">
	<div class="project-header">
		<p class="project-meta">Reazon Holdings · Hardware design</p>
		<h2>OpenArm</h2>
	</div>
	<div class="project-content">
		<div class="video-container">
			<iframe
				src="https://www.youtube.com/embed/6ZLM6f8kF4Q?rel=0&modestbranding=1"
				title="OpenArm 01 hardware overview"
				allow="encrypted-media; picture-in-picture"
				allowfullscreen>
			</iframe>
		</div>
		<p>I built the hardware for OpenArm 01, an open-source bimanual robot arm meant to be capable without being expensive.</p>
		<dl class="project-facts">
			<div>
				<dt>Role</dt>
				<dd>Hardware design and build</dd>
			</div>
			<div>
				<dt>Outcome</dt>
				<dd>4.1&nbsp;kg nominal / 6.0&nbsp;kg peak payload; 5.5&nbsp;kg arm mass; ~$6,500 BOM</dd>
			</div>
			<div>
				<dt>Link</dt>
				<dd><a href="https://openarm.dev/">openarm.dev</a></dd>
			</div>
		</dl>
	</div>
</article>

<article id="teleoperated-bartender" class="project-card">
	<div class="project-header">
		<p class="project-meta">End-effector · Teleoperation</p>
		<h2>Teleoperated bartender</h2>
	</div>
	<div class="project-content">
		<div class="video-container">
			<iframe
				src="https://www.youtube.com/embed/qySb-Zqn2x0?rel=0&modestbranding=1"
				title="Teleoperated bartender end-effector"
				allow="encrypted-media; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen>
			</iframe>
		</div>
		<p>The task was to pick up and pour from real glassware without crushing it. I designed and fabricated the end-effector so a teleoperated bartender could handle fragile bottles and glasses with a controlled grasp.</p>
		<dl class="project-facts">
			<div>
				<dt>Role</dt>
				<dd>End-effector design and fabrication</dd>
			</div>
			<div>
				<dt>Focus</dt>
				<dd>Gentle grasping, pouring, teleoperated use</dd>
			</div>
		</dl>
	</div>
</article>

<article id="mri-surgical-robot" class="project-card collapsible">
	<div class="project-header">
		<p class="project-meta">UCLA Mechatronics and Controls Lab · Medical robotics</p>
		<h2>MR-compatible surgical robot</h2>
	</div>
	<div class="project-content">
		<div class="media-container">
			<video controls preload="metadata" playsinline>
				<source src="{{ '/assets/img/robot_in_MR.mp4' | relative_url }}" type="video/mp4">
			</video>
		</div>
		<p>I built the first prototype of a liver biopsy robot that can sit inside an MRI scanner. Ferromagnetic parts were off the table, so the machine is 3D-printed, uses non-magnetic materials, and is driven by hydrostatic actuators.</p>
		<dl class="project-facts">
			<div>
				<dt>Role</dt>
				<dd>Prototype design and build</dd>
			</div>
			<div>
				<dt>Approach</dt>
				<dd>Additive manufacturing, hydrostatic actuation, MR-safe materials</dd>
			</div>
		</dl>
		<button class="toggle-btn" type="button" aria-expanded="false">Learn more</button>
		<div class="content">
			<div class="media-container">
				<video controls preload="metadata" playsinline>
					<source src="{{ '/assets/img/robot_cad.mp4' | relative_url }}" type="video/mp4">
				</video>
			</div>
			<p>CAD of the robot inside an MRI chamber</p>
			<div class="media-container">
				<video controls preload="metadata" playsinline>
					<source src="{{ '/assets/img/master_slave_demo.mp4' | relative_url }}" type="video/mp4">
				</video>
			</div>
			<p>Master–slave prototype testing</p>
		</div>
	</div>
</article>

<article id="hydrostatic-actuators" class="project-card collapsible">
	<div class="project-header">
		<p class="project-meta">UCLA · Haptic teleoperation</p>
		<h2>Hydrostatic actuator characterization</h2>
	</div>
	<div class="project-content">
		<div class="media-container">
			<video controls preload="metadata" playsinline>
				<source src="{{ '/assets/img/fluidchar.mp4' | relative_url }}" type="video/mp4">
			</video>
		</div>
		<p>Hydrostatic actuators are useful in MRI and haptics because they keep motors out of the field and can transmit force cleanly. I built a test rig to measure how linear they are, and how force and position track under closed-loop control.</p>
		<dl class="project-facts">
			<div>
				<dt>Role</dt>
				<dd>Test-rig design, build, and characterization</dd>
			</div>
			<div>
				<dt>Measured</dt>
				<dd>Linearity, force tracking, position tracking</dd>
			</div>
		</dl>
		<button class="toggle-btn" type="button" aria-expanded="false">Learn more</button>
		<div class="content">
			<img src="{{ '/assets/img/setup_schematic.png' | relative_url }}" alt="Hydrostatic actuator test-rig schematic" class="hover-zoom">
			<p>System schematic</p>
			<img src="{{ '/assets/img/position_staircase.png' | relative_url }}" alt="Position control staircase response" class="hover-zoom">
			<p>Position control data</p>
			<img src="{{ '/assets/img/force_staircase.png' | relative_url }}" alt="Force control staircase response" class="hover-zoom">
			<p>Force control data</p>
		</div>
	</div>
</article>

<article id="motion-phantom" class="project-card collapsible">
	<div class="project-header">
		<p class="project-meta">UCLA · MR imaging</p>
		<h2>MR-compatible motion phantom</h2>
	</div>
	<div class="project-content">
		<div class="media-container">
			<video controls preload="metadata" playsinline>
				<source src="{{ '/assets/img/phantom_motion.mp4' | relative_url }}" type="video/mp4">
			</video>
		</div>
		<p>Scanners need a repeatable stand-in for a breathing patient. I built a phantom that moves an MR-visible liver with air blowers so imaging and robot tests can happen without a human in the bore.</p>
		<dl class="project-facts">
			<div>
				<dt>Role</dt>
				<dd>Design, build, and open-loop testing</dd>
			</div>
			<div>
				<dt>Approach</dt>
				<dd>Pneumatic actuation and an MR-visible liver analog</dd>
			</div>
		</dl>
		<button class="toggle-btn" type="button" aria-expanded="false">Learn more</button>
		<div class="content">
			<img src="{{ '/assets/img/test4_all.png' | relative_url }}" alt="Open-loop actuation test results" class="hover-zoom">
			<p>Open-loop actuation test results</p>
		</div>
	</div>
</article>

<article id="smart-machining" class="project-card">
	<div class="project-header">
		<p class="project-meta">Process monitoring · Manufacturing</p>
		<h2>Smart machining data collection</h2>
	</div>
	<div class="project-content">
		<div class="media-container">
			<img src="{{ '/assets/img/poster.JPG' | relative_url }}" alt="Smart machining sensor instrumentation poster" class="hover-zoom">
		</div>
		<p>I instrumented a CNC machine with sensors during drilling and milling so the cut itself became a data source. The dataset was used to look at process diagnostics and early signs of wear for predictive maintenance.</p>
		<dl class="project-facts">
			<div>
				<dt>Role</dt>
				<dd>Sensor instrumentation and data collection</dd>
			</div>
			<div>
				<dt>Use</dt>
				<dd>Diagnostics and predictive maintenance</dd>
			</div>
		</dl>
	</div>
</article>

<article id="soft-finger" class="project-card collapsible">
	<div class="project-header">
		<p class="project-meta">Soft robotics · Modeling</p>
		<h2>Soft robotic finger</h2>
	</div>
	<div class="project-content">
		<div class="media-container">
			<video controls preload="metadata" playsinline>
				<source src="{{ '/assets/img/extension_onlyT3_Trim.mp4' | relative_url }}" type="video/mp4">
			</video>
		</div>
		<p>I compared two soft finger designs by tracking their motion with computer vision and matching that to a kinematic model. The point was to see which geometry produced usable, predictable bending rather than relying on appearance alone.</p>
		<dl class="project-facts">
			<div>
				<dt>Role</dt>
				<dd>Design evaluation and modeling</dd>
			</div>
			<div>
				<dt>Methods</dt>
				<dd>CV tracking and kinematic simulation</dd>
			</div>
		</dl>
		<button class="toggle-btn" type="button" aria-expanded="false">Learn more</button>
		<div class="content">
			<img src="{{ '/assets/img/RRR_model.JPG' | relative_url }}" alt="RRR kinematic model of the soft finger" class="hover-zoom">
			<img src="{{ '/assets/img/RRR_totalfinger.JPG' | relative_url }}" alt="Full soft finger kinematic model" class="hover-zoom">
		</div>
	</div>
</article>

</section>
