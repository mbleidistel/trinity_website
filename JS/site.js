/**
 * Created by Michael on 15-04-09.
 */

var Site = '#Site';
var Menu = null;
var AnimationDiv = null;
var TargetDiv = null;
var TargetContent = null;

var PDFViewer = "<iframe id='HTMLObject' width='100%' height='100%' type='text/html' allowfullscreen webkitallowfullscreen></iframe>";

function Init()
{
	// Center the Copyright information
	$('#Copyright').css('position', 'fixed');

	// Declare and show the Banner
	Banner = addDiv('Banner', '0px', '0px', '100%', '120px').addClass('Banner').fadeIn('slowly');
	// Create the NavMenu
	m = new NavMenu();
	m.addItem("Home", ".home");
	m.startSubMenu("IPP&#174; Design");
		m.addItem('Residential', 'Residential.info');
		m.addItem('Commercial', 'Commercial.info');
	m.endSubmenu();
	m.startSubMenu('IPP&#174; Advantage');
		m.addItem('Benefits/Features', "superscrollorama.iframe");
		//m.addItem('Smart Homes');
		//m.addItem('Details', 'Details.info');
	m.endSubmenu();
	m.startSubMenu('IPP&#174; Green');
		m.addItem('Green Building', "TPP - Project Green Plan.pdf");
		//m.addItem('Energy Standard');
	m.endSubmenu();
	m.startSubMenu('IPP&#174; Construct');
		m.addItem('Certified Builders', "TPP - Certified Builder Program.pdf");
		m.addItem('Training', "TPP - Technically Speaking.pdf");
	m.endSubmenu();
	m.addItem("IPP&#174; News", "Data/Blog/index.php");
	m.addItem("Contact Us", "HTML/Location.htm");//"mailto:info@trinitypostandpanel.com.mail");

	m.attach('#Site');
	$('#NavMenu').hide();

	// Catch the menu clicks
	$('a').click( function(event)
	{
		event.preventDefault();

		if ( event.currentTarget )
		{
			// Complete URL
			var href = event.currentTarget.href;

			var startIndex = 0;
			// Is this a re-direct url?
			if ( (startIndex = href.toLowerCase().indexOf('redirecturl=')) != -1 )
			{
				// Redirect
				href = href.substr(startIndex); // Start copying from redirecturl=
				href = href.substr(0, href.indexOf('&')); // Copy string until the next parameter
				href = href.substr(href.indexOf('=') + 1); // Remove redirecturl=
				href = decodeURIComponent(href);
			}

			// last part of path and suffix
			var URL = href.split('/');
			URL = URL[URL.length - 1];

			// Just the suffix
			var suffix = URL.substr(URL.lastIndexOf('.') + 1).toLowerCase();

			if ( !suffix)
			{
				return;
			}

			// Just in case
			//stopYoutubeVideo();
			stopVimeoVideo();
			TargetDiv.fadeOut();
			InfoDiv.fadeOut();
			iFrameDiv.fadeOut();
			iFrameDiv.html('');

			$('#HTMLObject').css('display', 'none');
			switch(suffix)
			{
				case 'mail':
					Background.fadeIn();
					window.location.href = href.substr(0, href.indexOf('.mail'));
					PiwikEvent("Menu", "Click", "mail");
					break;

				case "home":
					Background.fadeIn();
					// Record the page viewing
					PiwikPageView("Homepage");
					break;

				case 'pdf':
					Background.fadeIn();
					$('#HTMLObject').attr('src', 'JS/ViewerJS/#../../PDF/' + URL);//event.toElement.href);
					TargetDiv.fadeIn();
					break;

				case 'info':
					Background.fadeOut();
					InfoDiv.fadeOut(function()
					{
						// Record the page viewing
						PiwikPageView(URL.substr(0, URL.indexOf('.')));

						createInfoScreenFor( '#Info', URL.substr(0, URL.indexOf('.')) );
						InfoDiv.fadeIn();
					});
					break;

				case 'iframe':
					Background.fadeOut();
					iFrameDiv.fadeIn();

					// Record the page viewing
					PiwikPageView(URL.substr(0, URL.indexOf('.')));

					iFrameDiv.html("<iframe class='iframe-link' id='" + URL.killSpaces().killSpecialChars() + "' src='" + URL.substr(0, URL.indexOf('.')) + "'>");
					iFrameInterval = setInterval(function(){
						if ( $('.iframe-link').contents().find('body').scrollTop() >= finish )
						{
							clearInterval(iFrameInterval);
							iframeInterval = null;

							iFrameDiv.fadeOut(function()
							{
								iFrameDiv.html('');
							});
							Background.fadeIn();
						}
					}, 500);

					break;

				case 'html':
				case 'htm':
				case 'jpg':
				case 'php':
					Background.fadeIn();
					$('#HTMLObject').attr('src', href);
					// Record the page viewing
					PiwikPageView(URL.substr(0, URL.indexOf('.')));
					TargetDiv.fadeIn();
					break;

				case '#':
					Background.fadeIn();
					break;
			}

			$('#HTMLObject').css('display', 'block');
		}
	});

	// Move the menu into the Banner
	//$('#NavMenu').prependTo($('#Banner'));
	// Move the Logo into the banner
	$('#Logo').prependTo($('#Banner'));

	// Add the Banner, Social and Background
	delayedDisplay(.25, function()
	{
		// Move the banner down, to make room on the top
		Banner.animate({top:'30px'});

		// Watch for the scroll
		scrolled = false;

		window.onscroll = function()
		{
			scrolled = true;
		};

		setInterval(function()
		{
			if (scrolled)
			{
				scrolled = false;
				if ( window.pageYOffset >= 29 )
					$('#Banner').addClass('follow');
				else
					$('#Banner').removeClass('follow');
			}
		}, 150);

		delayedDisplay(.25, function()
		{
			delayedDisplay(.5, function()
			{
				// Display the menu
				$('#NavMenu').slideDown('slowly');
				$('#NavMenu').css('z-index', 99999);
			});

			// Declare the room on the top for the Facebook button
			Social = addDiv('Social', '0px', '-10px', '100%', '30px');
			Social.html(
				"<img id='Twitter' class='Social' src='Images/twitter.png'>" +
				"<a target='_blank' href='https://ca.linkedin.com/company/trinity-post-and-panel'><img id='LinkedIn' class='Social' src='Images/linkedin.png'></a>" +
				"<a target='_blank' href='https://www.facebook.com/pages/Trinity-Post-Panel-Inc/204070129628546'><img id='Facebook' class='Social' src='Images/facebook.png'></a>"
				);
			Social.fadeIn('slowly');

			// Declare the room for the image
			Background = addDiv('Background', '140px', '0px', '100%', '74%').css({backgroundColor:'white'}).addClass('BackgroundImage').addClass('BackgroundAnimation');//.fadeIn('slowly');
		});
	});

	// Declare and show the target for the links
	TargetDiv = addDiv('Target', undefined, undefined, '80%', '90%', document.body).center().addClass('TargetDiv');//.show();

	TargetContent = addDiv('TargetContent', '0px', '0px', '100%', '100%', 'Target').addClass('overflow-hidden').show();
	TargetContent.html(PDFViewer);

	// Declare Closing Div button for the TargetDiv
	CloseTarget = addDiv('CloseTarget', undefined, undefined, '20px', '20px', 'Target').show();
	// Position
	CloseTarget.css({position:'relative', top:'-2%', left:'99.1%'});
	// Style
	CloseTarget.addClass('CloseTarget drop-shadow');
	// Marker
	CloseTarget.html("X");
	CloseTarget.click(function()
    {
	    Background.fadeIn();
	    TargetDiv.fadeOut('slow');
	    TargetContent.html(PDFViewer);
    });

	// Create the SlideshowDiv
	InfoDiv = addDiv('Info', '160px', undefined, '100%', '70%').css({border: '0px solid lime', zIndex:1});//.show();
	TextDiv = addDiv('Text', undefined, '0%', '40%', '100%', 'Info').css({border: '0px solid red'}).show();
	ImagesDiv = addDiv('Images', undefined, '40%', '60%', '100%', 'Info').css({border: '0px solid red'}).show();

	// Create VideoDIV
	VideoDiv = addDiv('Video', '160px', undefined, '100%', '70%').css({border: '0px solid lime', zIndex:1});//.show();
	var YouTubePlayerInfo = "<center><div id='YouTubePlayer'></div><br><div id='StopVideoLink'></div></center>";
	var VimeoPlayerInfo = "<center><div id='VimeoPlayer'></div><br><div id='StopVideoLink'></div></center>";

	// Create iFrameDiv
	iFrameDiv = addDiv('iFrame', '152px', undefined, '100%', '71%').css({border: '0px solid lime', zIndex:1});//.show();

	// Show the intro video after 3 seconds of hitting the page
	//videoTimeout = setTimeout(function()
	//{
		VideoDiv.fadeIn(function()
		{
			VideoDiv.html( VimeoPlayerInfo );
			VimeoPlayer('VimeoPlayer', '131046134');
			//VideoDiv.html( YouTubePlayerInfo ); // Set the YouTube Player info, as it is getting replaced when the player activates
			//YouTubePlayer('YouTubePlayer', 'hpaDvtFXPNs');
		});
	//}, 500);

	PiwikTrackContent();
	
	// Catch Resize event
	$(window).resize(function()
	{
	});
}