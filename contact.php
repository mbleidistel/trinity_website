<!DOCTYPE html>
<html lang="en">
<head>

  <!-- Basic Page Needs
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <meta charset="utf-8">
  <title>Welcome to Trinity Post and Panel</title>
  <meta name="description" content="Trinity Post and Panel, Custom Homes">
  <meta name="author" content="Nicholas Fagerlid">

  <!-- Mobile Specific Metas
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- FONT
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link href="//fonts.googleapis.com/css?family=Raleway:400,300,600" rel="stylesheet" type="text/css">

  <!-- JS
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <script src='JS/jquery-1.11.3.js'></script>
  <script src='JS/jquery-ui.min.js'></script>
  <script src="JS/jquery.cycle2.js"></script>
  <script src="JS/spool.js"></script>
  
  <!-- CSS
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link rel='stylesheet' href='JS/jquery-ui.min.css'>
  <link rel='stylesheet' href='JS/jquery-ui.structure.min.css'>
  <link rel='stylesheet' href='JS/jquery-ui.theme.min.css'>
  <link rel='stylesheet' href="css/normalize.css">
  <link rel='stylesheet' href="css/skeleton.css">
  <link rel='stylesheet' href="css/mainpage.css">
  <link rel='stylesheet' href="css/formatstyle.css">
  
</head>
<body>

  <!-- Primary Page Layout
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
 
  <?php
  include "sections/topmenu.html";
  ?>
   <div style="position:relative; top: 60px; z-index:0">
	<div class="cycle-slideshow" data-cycle-fx="fade" data-cycle-speed="2500" style="width:100%; height:500px;">
		<img src="images/title/Squamish-06.jpg">
    </div>
   </div>
  <div class="container" style="margin-top: 100px;">
    <div class="row" style="margin-top: 20px;">
      <div class="one-half column" style="position: relative; z-level: -4; text-align:center;">
        <h3 id="post">Office Location</h3><br>
		<p style=" text-align: center;"><span>4994 Donslequa Dr</span><br>
            <span>108 Mile Ranch, BC</span><br>
            <span>V0K 2Z0</span><br>
            <span>Canada</span><br>
	  </div>
	  <div class="one-half column" style="position: relative; z-level: -4; text-align:center;">
		<h3 id="post">Plant Location</h3><br>
		<p style=" text-align: Center;"><span>Tatton Station Rd</span><br>
			<span>108 Mile Ranch, BC</span><br>
			<span>V0K 2Z0</span><br>
			<span>Canada</span><br><br><br>
			
			</p>
		
      </div>
	  <div class="full column" style="position: relative; z-level: -4; text-align:center;">
	  <span>Phone: <a class='no-link-decorations' href="callto:+1-250-791-0028">+1 (250) 791-0028</a></span><br>
	  <span>Email: <a class='no-link-decorations' href="mailto:info@trinitypostandpanel.com">info@trinitypostandpanel.com</a></span></p>
		<div class="map-frame">
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2928.051866813357!2d-121.32795909999999!3d51.723910400000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53806899287b2fef%3A0x3ad0f04665caad30!2s4994+Donsleequa+Rd%2C+100+Mile+House%2C+BC+V0K+2E1%2C+Canada!5e1!3m2!1sen!2sus!4v1441146168742" width="600" height="500" frameborder="0" style="border:0" allowfullscreen></iframe>
		</div>
	  </div>
    </div>
</div>
<div id="credits" style="background-color: #4dffff; width:100%; height: 80px;">
	<div class="container" style="margin-top: 10%;">
		<div class="row">
			<div class="one-half column" style="bottom:10px;">
				Copyright &#169; 2015 Trinity Post &#38; Panel Inc. &#174; All Rights Reserved.
			</div>
			<div class="one-half column" style="bottom:10px;">
				+1-250-791-0028 / <a href="mailto:info@trinitypostandpanel.com" style="color:blue; text-decoration: none">info&#64;trinitypostandpanel.com</a>
			</div>
		</div>
	</div>
</div>
 
<script type="text/javascript">
$(document).ready(function(){
  if (screen.width >= 800) {
    $("#credits").after(function(){
		var $div = $('<div>');
		$div.load("sections/bottombar.html");
		return $div;
	});
  }
});
</script>

<!-- End Document
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
</body>
</html>