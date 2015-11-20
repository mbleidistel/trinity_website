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
<div class="container" style="margin-top: 100px;">
    <div class="row" style="margin-top: 20px;">
        <div class="full column" style="position: relative; z-level: -4; text-align:center;">
			<h3 id="post">Pick from one of our many IPP&reg; Certified Contractors</h3><br>
        </div>
		<div class="three columns roundedb" style="position: relative; z-level: -4; text-align:center;">
			<h5 id="post">A Buisness goes here.</h5><br>
        </div>
		<div class="one column" style="position: relative; z-level: -4; text-align:center;"><br></div>
		<div class="three columns roundedb" style="position: relative; z-level: -4; text-align:center;">
			<h5 id="post">A Buisness goes here.</h5><br>
        </div>
		<div class="one column" style="position: relative; z-level: -4; text-align:center;"><br></div>
		<div class="three columns roundedb" style="position: relative; z-level: -4; text-align:center;">
			<h5 id="post">A Buisness goes here.</h5><br>
        </div>
		<div class="three columns roundedb" style="position: relative; z-level: -4; text-align:center;">
			<h5 id="post">A Buisness goes here.</h5><br>
        </div>
		<div class="one column" style="position: relative; z-level: -4; text-align:center;"><br></div>
		<div class="three columns roundedb" style="position: relative; z-level: -4; text-align:center;">
			<h5 id="post">A Buisness goes here.</h5><br>
        </div>
		<div class="one column" style="position: relative; z-level: -4; text-align:center;"><br></div>
		<div class="three columns roundedb" style="position: relative; z-level: -4; text-align:center;">
			<h5 id="post">A Buisness goes here.</h5><br>
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