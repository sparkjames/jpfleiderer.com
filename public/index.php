<!DOCTYPE html>
<html lang="en-US">

<head>
	<link rel='dns-prefetch' href='//fonts.googleapis.com'>

	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>James Pfleiderer - Senior Web Developer</title>

	<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
	<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
	<link rel="shortcut icon" href="/favicon.ico" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<meta name="apple-mobile-web-app-title" content="JPfleiderer" />
	<link rel="manifest" href="/site.webmanifest" />

	<style>
		<?php echo file_get_contents('./assets/styles/style-critical.css', FILE_USE_INCLUDE_PATH); ?>
	</style>

	<?php
	$css_version = filemtime('assets/styles/style-critical.css');
	?>
	<noscript>
		<link rel='stylesheet' href='assets/styles/style.css?ver=<?php echo $css_version; ?>' type='text/css' media='all'>
	</noscript>
	<link rel='stylesheet' href='assets/styles/style.css?ver=<?php echo $css_version; ?>' type='text/css' media='print' onload="this.media='all'; this.onload=null;">

	<!-- Google tag (gtag.js) -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-26496563-1"></script>
	<script>
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());
		gtag('config', 'UA-26496563-1');
	</script>

</head>

<body class="home">

	<header class="header">
		<div class="header-inner container">

			<div class="logo">
				<svg class="logo-object" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
					<circle class="logo-circle" fill="#0C2530" cx="16" cy="16" r="16" />
					<path class="logo-mark" fill="#FFF" d="M26.9 10.4c-.2-.7-.6-1.3-1.1-1.8-.5-.5-1.1-1-1.9-1.3-.8-.3-1.7-.5-2.9-.5h-8.2v3.1H19.9c.5 0 .9 0 1.3.1s.8.2 1.1.4c.3.2.6.5.8.8.2.4.3.8.3 1.4 0 .6-.1 1-.3 1.4-.2.4-.5.6-.8.8-.3.2-.7.3-1.1.4-.4.1-.9.1-1.3.1h-3.1v-3.4h-4V20c0 .3-.1.7-.2 1-.1.3-.3.5-.6.7-.3.2-.7.3-1.2.3s-.9-.1-1.1-.2c-.3-.2-.5-.4-.7-.6-.2-.3-.3-.6-.4-.9-.1-.4-.1-.8-.1-1.2v-.8H4.8v1.6c0 1 .2 1.8.5 2.5s.8 1.3 1.3 1.7c.6.4 1.2.8 1.9 1 .7.2 1.4.3 2.2.3 1.3 0 2.4-.2 3.2-.6.8-.4 1.4-.9 1.8-1.5.4-.6.7-1.3.8-2 .1-.7.2-1.4.2-1.9v-.8H21c1.1 0 2.1-.2 2.9-.5.8-.3 1.4-.8 1.9-1.3s.9-1.2 1.1-1.9c.2-.7.3-1.4.3-2.1 0-1-.1-1.7-.3-2.4z" />
				</svg>
			</div>

			<h1 class="primary-heading">James Pfleiderer <span class="sub-heading">Senior Web Developer</span></h1>

		</div>
	</header>

	<div class="content-outer">
		<div class="content-inner container">

			<div class="controls">

				<button class="controls-color-scheme" type="button">
					<span class="color-scheme-label color-scheme-label--light-mode">Toggle Dark Mode</span>
					<span class="color-scheme-label color-scheme-label--dark-mode">Toggle Light Mode</span>
				</button>

				<button class="controls-retro-style" type="button">
					<span class="retro-label retro-label--retro-style">Toggle Retro Style</span>
					<span class="retro-label retro-label--modern-style">Toggle Modern Style</span>
				</button>

			</div>

			<div class="resume-table">

				<aside class="resume-column sidebar">

					<section class="sidebar-section">

						<h2 class="sidebar-heading">&lt;Greetings&gt;</h2>

						<p>Hi, I'm James! I've been tinkering on the web for as long as I can remember. I'm a self-starting, driven senior full-stack developer who works well independently but also enjoys leading and participating in teams.</p>

						<p>Always looking to hone my skills, currently working on more React and Angular projects in my free time. Interested in a position where I can bring my skills in leading development teams, providing guidance to clients, and using my expertise in custom WordPress development. I thrive in collaborative environments and can help lead development efforts from kickoff to launch to client training.</p>

					</section>

					<section class="sidebar-section" id="skills">

						<h2 class="sidebar-heading">Skills</h2>

						<ul class="list list--columns">
							<li class="list-item">WordPress API</li>
							<li class="list-item">PHP</li>
							<li class="list-item">JavaScript</li>
							<li class="list-item">React &amp; <wbr>JSX</li>
							<li class="list-item">ES6 &amp; <wbr>jQuery</li>
							<li class="list-item">Angular</li>
							<li class="list-item">Typescript</li>
							<li class="list-item">SASS/SCSS</li>
							<li class="list-item">HTML5</li>
							<li class="list-item">mySQL</li>
							<li class="list-item">SVG</li>
							<li class="list-item">Git</li>
							<li class="list-item">Gulp/<wbr>Parcel</li>
							<li class="list-item">OpenAI/ChatGPT</li>
							<li class="list-item">a11y</li>
							<li class="list-item">i18n</li>
							<li class="list-item">SEO</li>
							<li class="list-item">Pagespeed</li>
							<li class="list-item">Photoshop/<wbr>XD</li>
							<li class="list-item">Illustrator</li>
							<li class="list-item">Figma/<wbr>Sketch</li>
							<li class="list-item">SMACSS/<wbr>BEM</li>
							<li class="list-item">Modular/<wbr>Atomic</li>
							<li class="list-item">LAMP/LEMP stack</li>
						</ul>

					</section>

					<section class="sidebar-section">

						<h2 class="sidebar-heading">Fun Facts</h2>

						<table class="a-wild-table-appears">
							<tr>
								<td>Favorite Color:</td>
								<td>#FF00FF</td>
							</tr>
							<tr>
								<td>Hometown:</td>
								<td>Orlando, FL</td>
							</tr>
							<tr>
								<td>Favorite Team:</td>
								<td>UCF</td>
							</tr>
							<tr>
								<td>Fear:</td>
								<td>Bugs (in code)</td>
							</tr>
							<tr>
								<td>Former Life:</td>
								<td>Pharmacist</td>
							</tr>
						</table>

					</section>

					<section class="sidebar-section sidebar-section--find-me" id="find-me">

						<h2 class="sidebar-heading">Find Me</h2>

						<ul class="list list--find">
							<li class="list-item">
								<i class="icon icon--home"><img src="assets/images/icon-home.svg" height="16" width="16" alt="Home icon"></i>
								Lexington, KY
							</li>
							<li class="list-item">
								<a href="http://github.com/sparkjames">
									<i class="icon icon--github"><img loading="lazy" src="assets/images/icon-github.svg" height="16" width="16" alt="Github icon"></i>
									github.com/sparkjames
								</a>
							</li>
							<li class="list-item">
								<a href="https://codepen.io/sparkjames/">
									<i class="icon icon--codepen"><img loading="lazy" src="assets/images/icon-codepen.svg" height="16" width="16" alt="Codepen icon"></i>
									codepen.io/sparkjames
								</a>
							</li>
							<li class="list-item">
								<a href="mailto:jpfleiderer@gmail.com">
									<i class="icon icon--email"></i>
									jpfleiderer@gmail.com
								</a>
							</li>
						</ul>
					</section>

				</aside>

				<main class="resume-column resume-body">

					<!-- <section id="current" class="resume-section">

						<h2 class="resume-heading">Current Employment</h2>

						<p class="list-title">
							<strong><a href="https://nclud.com" target="_blank">nclud</a>, Senior Full-stack Developer</strong>
							<em>(2023 - 2024)</em>
						</p>

					</section> -->

					<section id="experience" class="resume-section">
						<h2 class="resume-heading">Experience</h2>

						<p class="list-title">
							<strong>NASA, Senior Web Developer</strong>
							<em>(2024-2025)</em>
						</p>
						<ul class="list list--experience">
							<li class="list-item">Increased operational efficiency by consolidating dozens of different NASA orgs' websites under nasa.gov.</li>
							<li class="list-item">Integrated search.gov to increase availability of NASA content.</li>
							<li class="list-item">Increased engagement and functionality with new content blocks like image comparisons and forms, built in React.</li>
							<li class="list-item">Documented plugin and theme component processes to
								enhance internal developer resources.</li>
						</ul>

						<p class="list-title">
							<strong>nclud, Senior Full-stack Developer</strong>
							<em>(2023-2024)</em>
						</p>
						<ul class="list list--experience">
							<li class="list-item">Automated deployment processes using GitHub Actions to reduce time and errors.</li>
							<li class="list-item">Developed custom Gutenberg blocks to improve end-user’s ability to edit website content.</li>
							<li class="list-item">Worked directly with clients to manage work requests and review project progress.</li>
							<li class="list-item">Added full multi-language features (i18n) for clients to reach multiple markets and increase business.</li>
							<li class="list-item">Planned and managed tasks for myself and other developers.</li>
							<li class="list-item">Improved team performance by providing expertise and guidance for other in-house developers.</li>
						</ul>

						<p class="list-title">
							<strong>Edelman, Senior WordPress Developer</strong>
							<em>(2021 - 2022)</em>
						</p>
						<ul class="list list--experience">
							<li class="list-item">Streamlined project timelines by planning features, architecture, and scope in build specification documents.</li>
							<li class="list-item">Implemented custom WordPress boilerplate to decrease time and effort to start new projects.</li>
							<li class="list-item">Developed WordPress sites from scratch, both independently and collaboratively, based on Sketch and Figma designs.</li>
							<li class="list-item">Integrated APIs (e.g., weather, stock prices) into WordPress themes and plugins to enhance content dynamism.</li>
							<li class="list-item">Developed a custom WordPress API to streamline content
								delivery for external platforms, reducing technical debt.</li>
							<li class="list-item">Provided expertise and guidance for other in-house developers.</li>
						</ul>

						<p class="list-title">
							<strong>Taoti Creative, Lead WordPress Developer</strong>
							<em>(2018 - 2021)</em>
						</p>
						<ul class="list list--experience">
							<li class="list-item">Improved our cost-efficiency by planning sprint/task lists for the WordPress development team.</li>
							<li class="list-item">Provided expertise and led other developers (both in-house and external) on WordPress projects.</li>
							<li class="list-item">Enhanced scope of work and build specification documents to clarify development deliverables and timelines.</li>
							<li class="list-item">Revamped project start time by implementing custom WordPress boilerplate for all projects.</li>
							<li class="list-item">Constructed WordPress plugins to make CMS more efficient with APIs like HubSpot, Google Maps, and Dribbble.</li>
						</ul>

						<p class="list-title">
							<strong>Knucklepuck, Senior Web Developer</strong>
							<em>(2016 - 2018)</em>
						</p>
						<ul class="list list--experience">
							<li class="list-item">Created wireframe documents to plan WordPress site structure and improve overall efficiency.</li>
							<li class="list-item">Communicated directly with clients to provide expertise on site functionality and content management.</li>
							<li class="list-item">Created an extendible module system to build WordPress templates to shorten project timelines.</li>
							<li class="list-item">Optimized websites with high performance pagespeed methods for higher user reach.</li>
							<li class="list-item">Collaborated with SEO team to improve website search rankings and reduce ad costs for clients.</li>
						</ul>

						<p>
							<strong>SPARK Experience, Senior Web Developer</strong>
							<em>(2012 - 2016)</em>
						</p>
						<!-- <ul class="list list--experience">
							<li class="list-item">Planned/created WordPress sites with a team of developers.</li>
							<li class="list-item">Worked directly with clients to identify needs/goals and plan solutions.</li>
							<li class="list-item">Used modular workflow to accelerate development process.</li>
							<li class="list-item">Used WordPress API for custom themes, plugins, and admin areas.</li>
							<li class="list-item">Extensive work with PHP, HTML, SCSS, and Javascript/jQuery.</li>
							<li class="list-item">All sites responsive and cross-browser compatible.</li>
							<li class="list-item">Managed and maintained projects with Git and Grunt/Gulp.</li>
							<li class="list-item">Planned projects alongside UX research, content, and design teams.</li>
						</ul> -->

						<p>
							<strong>pro2go Designs, Co-Founder</strong>
							<em>(2009 - 2012)</em>
						</p>
						<!-- <ul class="list">
							<li class="list-item">Met with clients for project milestone updates.</li>
							<li class="list-item">Created websites with WordPress API or a custom PHP/mySQL CMS.</li>
							<li class="list-item">All websites created with PHP, HTML, CSS, and Javascript/jQuery.</li>
							<li class="list-item">Designed websites in Photoshop and Illustrator.</li>
							<li class="list-item">A variety of design work &mdash; from full websites to Facebook covers.</li>
						</ul> -->

						<p><strong>Planet Digital, PHP Developer</strong> <em>(2010)</em></p>
						<p><strong>UCF SDES Webmaster</strong> <em>(2009)</em></p>
						<p><strong>Time and Gems Webmaster</strong> <em>(2008 - 2009)</em></p>
						<p><strong>Project Spot Designer</strong> <em>(2007 - 2008)</em></p>

					</section>

					<section id="fun-projects" class="resume-section">
						<h2 class="resume-heading">Fun Projects</h2>

						<ul class="list list--recent">

							<li class="list-item">
								<strong><a href="https://triviabot5000.com/" rel="nofollow noopener">TriviaBot 5000</a></strong>,
								<em>(2024)</em>
								<p>A fun little project to make something entertaining with OpenAI. This website makes use of Wikipedia's API, OpenAI's API, and React! A new trivia question is generated every day via OpenAI, based on Wikipedia's Topic of the Day from one year ago.</p>
							</li>

							<li class="list-item">
								<strong><a href="https://old-screensavers-react.netlify.app/" rel="nofollow noopener">Old Screensavers</a></strong>,
								<em>(2024)</em>
								<p>Just a neat demo of Windows 3.11 screensavers, built in React. Uses basic form elements to updates values used by the app to generate the stars/windows and control their speed.</p>
							</li>

							<li class="list-item">
								<strong><a href="http://htmlpreview.github.io/?https://github.com/sparkjames/star-fox/blob/master/star-fox.html" rel="nofollow noopener">Starfox in CSS</a></strong>,
								<em>(2016)</em>
								<p>A short scene built entirely with CSS, made to look like the old Super Nintendo game, Starfox. I used stretched out &lt;div&gt; shapes to look like polygons and everything else is pixel art using the CSS drop shadow trick. I like to see how far CSS can be pushed.</p>
							</li>

						</ul>

					</section>

					<section id="recent" class="resume-section">
						<h2 class="resume-heading">Recent Websites</h2>

						<ul class="list list--recent">

							<li class="list-item">
								<strong><a href="https://www.spendhq.com/" rel="nofollow noopener">SpendHQ</a></strong>,
								<em>(2023)</em>
								<p>The website features many custom Gutenberg blocks for an easy admin experience. The loading speed is very fast featuring many lazy-loaded assets and critical/non-critical CSS. It is also fully ready for translation into other languages (i18n).</p>
							</li>

							<li class="list-item">
								<strong><a href="https://babytracker5000.com/" rel="nofollow noopener">BabyTracker 5000</a></strong>,
								<em>(2023)</em>
								<p>A newborn feeding tracker web app built in Angular. It uses Firebase Auth and Realtime Database APIs to store data, or if you use the app in offline mode it uses your device's localStorage instead. View the <a rel="nofollow noopener" href="https://github.com/sparkjames/babytracker5000">GitHub repo</a>.
								</p>
							</li>

							<li class=" list-item">
								<strong><a href="https://beinillinois.org/" rel="nofollow noopener">Be In Illinois</a></strong>,
								<em>(2022)</em>
								<p>Using a custom method for WP to separately queue critical and non-critical CSS, this website is build to load fast even with the high-res images at the top. Modular page sections and Advanced Custom Fields make it easy to add new pages.</p>
							</li>

							<li class="list-item">
								<strong><a href="https://www.preludecapital.com/" rel="nofollow noopener">Prelude Capital</a></strong>,
								<em>(2021)</em>
								<p>Page speed was a big emphasis for this project, <a href="#modal" class="modal-link" data-screenshot="assets/images/2022-12-12_prelude-audit.png" data-alt="We achieved a 97 for performance on Prelude Capital's website.">we achieved a 97 for performance</a> despite the videos and high res images on the home page. This site will also feature multiple languages using the Polylang plugin.</p>
							</li>

							<li class="list-item">
								<strong><a href="https://www.protectedincome.org/" rel="nofollow noopener">Protected Lifetime Income</a></strong>, <em>(2021)</em>
								<p>This site features many custom page sections built with Advanced Custom Fields. Lazy loading is used throughout to improve loading times. The hero and video sliders are built with custom controllers in ES6 Javascript.</p>
							</li>

							<li class="list-item">
								<strong><a href="https://www.rootsandshoots.org/" rel="nofollow noopener">Jane Goodall - Roots and Shoots</a></strong>, <em>(2019)</em>
								<p>It's BuddyPress with a many custom additions, including how users create their own content and a map of all of their projects grouped by ZIP or city.</p>
							</li>

							<!-- <li class="list-item">
								<strong><a href="https://hstreet.org/" rel="nofollow noopener">H Street Main Street</a></strong>,
								<em>(2018)</em>
								<p>There are many page speed optimizations on this site, like lazy loading, image
									compression, and reducing render-blocking stylesheets and scripts. The client is
									able to add information for local businesses which are then automatically
									categorized and mapped to the different sections.</p>
							</li> -->

							<li class="list-item">
								<strong><a href="https://www.taoti.com/" rel="nofollow noopener">Taoti Creative</a></strong>,
								<em>(2018)</em>
								<p>In addition to page speed optimizations, there are some neat front-end features here like the 90&deg; main nav and images that are positioned/sized with linear equations.</p>
							</li>

							<!-- <li class="list-item">
								<strong><a href="https://www.knucklepuckmedia.com/" rel="nofollow noopener">Knucklepuck</a></strong>,
								<em>(2018)</em>
								<p>This is built with a custom, modular WordPress theme. I managed to achieve a <a href="#modal" class="modal-link" data-screenshot="assets/images/2018-03-15_kp-audit.png">95 score on the
										Lighthouse performance audit</a> by coding a way for WP to queue critical CSS
									separate from non-critical CSS.</p>
							</li> -->

							<!-- <li class="list-item">
								<strong><a href="https://www.danielmrosenberg.com/" rel="nofollow noopener">Daniel M. Rosenberg</a></strong>,
								<em>(2017)</em><br>
								<strong><a href="https://cbcsettlementfunding.com/" rel="nofollow noopener">CBC Settlement Funding</a></strong>,
								<em>(2017)</em>
								<p>Both of these are great examples of a modular WordPress theme. They are built on my
									extentible system where custom content modules can be added in for whatever the
									website's needs are.</p>
							</li> -->

						</ul><!-- END .recent-list -->

					</section><!-- END #recent -->

					<section id="awards" class="resume-section">
						<h2 class="icon icon--awards resume-heading">Awards</h2>

						<p class="list-title"><strong>Communicator Awards</strong></p>
						<ul class="list list--columns list--awards">
							<li class="list-item"><a href="https://www.ustelecom.org/">USTelecom</a>, <em>Website Redesign 2019</em>
							</li>
							<li class="list-item"><a href="https://nwlc.org/">NWLC.org</a>, <em>2016</em></li>
							<li class="list-item"><a href="https://kidneynation.org/">KidneyNation.org</a>, <em>2016</em></li>
							<li class="list-item"><a href="https://betterworldcampaign.org/">BetterWorldCampaign.org</a>,
								<em>2016</em>
							</li>
							<li class="list-item"><a href="https://www.mejditours.com/">Mejditours.com</a>, <em>2014</em></li>
							<li class="list-item"><a href="https://rasikarestaurant.com/">RasikaRestaurant.com</a>, <em>2013</em></li>
							<li class="list-item"><a href="https://jewishfoodexperience.com/">JewishFoodExperience.com</a>,
								<em>2013</em>
							</li>
						</ul>

						<p class="list-title"><strong>W3 Awards</strong></p>
						<ul class="list list--columns list--awards">
							<li class="list-item"><a href="https://awr.org/">AWR.org</a>, <em>2015</em></li>
						</ul>
					</section>

					<section id="education" class="resume-section">
						<h2 class="resume-heading">Education</h2>
						<p>Bachelor of Digital Media &mdash; Interactive Systems, 2009<br>
							University of Central Florida</p>
					</section>

				</main>

			</div><!-- END .resume-table -->

		</div><!-- END .content-inner -->
	</div><!-- END .content-outer -->

	<div id="modal">
		<a id="modal-inner" href="#0">
			<img id="modal-image" src="assets/images/placeholder.gif" alt="">
		</a>
	</div>

	<script src="assets/js/scripts.js?ver=<?php echo filemtime('assets/js/scripts.js'); ?>" async></script>
</body>

</html>
