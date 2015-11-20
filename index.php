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
  <script src="JS/VimeoPlayer.js"></script>
  <script src="JS/jquery.dropdownPlain.js"></script>
  
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
   <div class="picgrad" style="position:relative; top: 60px; z-index:0;">
	<div id="toppic" class="cycle-slideshow" data-cycle-fx="fade" data-cycle-speed="2500" style="width:90%; left:5%;">
    </div>
   </div>
  <div class="container" style="margin-top: 100px;">
    <div class="row" style="margin-top: 20px;">
      <div class="full column" style="position: relative; z-level: -4; text-align:center;">
        <h3>Trinity Post &amp; Panel - Building the Future</h3><br>
		<p>This is a development demo. Please refer to <a href="notes.html"><button>notes</button></a> for progress details.</p>
		<p style=" text-align: justify;">Welcome to Trinity Post &amp; Panel, creators of the futuristic IPP&copy; building system. With our revolutionary new system, construction of a log home goes from a several week process down to a number of days. Our integrated log homes are structured to exceed qualifications set by Energy Star, R-2000 and Leeds, made to provide the most protection and energy savings per square foot of all our competitors. Our structures can be built to meet any space requirements, and can be put in place to completion in a number of weeks in comparison to our competitors. Our video below will explain the details of our system and how we can provide such a exemplory product.</p>
		<div style="width: 100%; text-align:center;"><button onclick="playmovie()">Click here to see a video</button></div>
		<div id="pics" style="display: none;">
		</div>
      </div>
    </div>
	<div class="row" style="margin-top: 20px;">
      <div class="one-half column roundedb">
        <p>Our buildings are highly fire resistant, rated at a Type 1V 2 hr fire rating. The foam used in the IPP&reg; panel is fire rated up to 2000&deg;, and does not have issues with either off-gassing or brittality. <br><br>Part of the danger of conventional Stick framing is that even with modern insulation methods, fire can still get in the gaps and air spaces and climb up into the roof and attic of the building. With our form fitting IPP&reg; system, fire cannot get in between the panels or burn through the foam, as the foam is tight-fitting and rated to 2000&deg;. As well as being one of the best insulators on the market from a cost per square foot perspective, the IPP&reg; system benifits from being dust and allergen free, as well as resistant to Mildew and Mold.</p>
      </div>
      <div class="one-half column roundedb">
        <p>Trinity is a local employer. All materials are manufactered in Canada, creating jobs in the communities we serve. Our primary plant is in 108 Mile, British Columbia, providing several hundred jobs in the area. Our machinery is some of the most advanced in the industry, providing safty to our workers unparalelled in our industry.</p>
      </div>
    </div>
	<div class="row" style="margin-top: 20px;">
      <div class="one-third column roundedb" style="text-align: justify">
	    <h3>Latest News</h3><br>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
      <div class="one-third column roundedb" style="text-align: center">
	    <h3>Upcoming Presentations</h3><br>
        <h6>Somewhere, Nowhereville.<br>July 6 - 8, 1897</h6>
		<h6>A place, Nowhereville.<br>Aug 6 - 8, 1897</h6>
		<h6>Here, Nowhereville.<br>Sept 6 - 8, 1897</h6>
      </div>
      <div class="one-third column roundedb" style="text-align: center">
        <h3>Customer Feedback</h3><br>
		<h5>"This is a generic response from a customer."<br><i>~A. Customer</i></h5>
		<h5>"I think this is good feedback."<br><i>~S. Omeone</i></h5>
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
