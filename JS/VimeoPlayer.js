var vimeoPlayer = null;
var playerOrigin = '*';

// Handle messages received from the player
function onMessageReceived(event) {
	// Handle messages from the vimeo player only
	if (!(/^https?:\/\/player.vimeo.com/).test(event.origin)) {
		return false;
	}

	if (playerOrigin === '*') {
		playerOrigin = event.origin;
	}

	var data = JSON.parse(event.data);

	switch (data.event) {
		case 'ready':
			onReady();
			break;

		case 'playProgress':
			onPlayProgress(data.data);
			break;

		case 'pause':
			onPause();
			break;

		case 'finish':
			onFinish();
			break;
	}
}

// Call the API when a button is pressed
$('button').on('click', function() {
	post($(this).text().toLowerCase());
});

// Helper function for sending a message to the player
function post(action, value) {
	var data = {
		method: action
	};

	if (value) {
		data.value = value;
	}

	var message = JSON.stringify(data);
	vimeoPlayer[0].contentWindow.postMessage(data, playerOrigin);
}

function onReady() {
	//status.text('ready');

	$('#StopVideoLink').html("<a onclick='stopVimeoVideo(); PiwikEvent(\"Skip Video\");'  class='CopyrightFont red-hover'>Skip Video</a>");
	//post('addEventListener', 'pause');
	post('addEventListener', 'finish');
	//post('addEventListener', 'playProgress');
	post('play');
}

function onPause() {
	//status.text('paused');
}

function stopVimeoVideo()
{
	$('#vimeo_player').attr('src','');
	VideoDiv.fadeOut(function()
	{
		Background.fadeIn();
		startBackgroundAnimation();
	});
}

function onFinish() {
	//status.text('finished');
	stopVimeoVideo();
	/*
	// Enable this too loop the video
	setTimeout(function()
	{
		post('play');
	}, 500);*/
}

function onPlayProgress(data) {
	//status.text(data.seconds + 's played');
}

function VimeoPlayer(TargetID, VideoID)
{
	$('#' + TargetID).html("<iframe id='vimeo_player' src='https://player.vimeo.com/video/" + VideoID + "?color=ffffff&title=0&byline=0&portrait=0' width='698' height='480' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>")
	vimeoPlayer = $('#vimeo_player');
	// Listen for messages from the player
	if (window.addEventListener) {
		window.addEventListener('message', onMessageReceived, false);
	}
	else {
		window.attachEvent('onmessage', onMessageReceived, false);
	}
}