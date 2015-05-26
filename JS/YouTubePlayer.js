var VIDEO_ID = null;
var TARGET_ID = null;
// This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
	youtubeplayer = new YT.Player(TARGET_ID, {
		height: '500',
		width: '728',
		videoId: VIDEO_ID,
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		}
	});
}

// The API will call this function when the video player is ready.
function onPlayerReady(event) {
	youtubeplayer.setPlaybackQuality('hd1080');
	$('#YouTubePlayer');
	event.target.playVideo();
}

// The API calls this function when the player's state changes.
// The function indicates that when playing a video (state=1),
// the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
	if (event.data == YT.PlayerState.PLAYING && !done) {
		setTimeout(function()
		{
			stopVideo();
			Background.fadeIn();
		}, 85000);
		done = true;
	}
}

function stopVideo()
{
	// Stop the video timeout
	if ( videoTimeout )
	{
		clearTimeout(videoTimeout);
		videoTimeout = null;
	}

	if ( typeof(youtubeplayer) == 'object' )
	{
		youtubeplayer.stopVideo();
		VideoDiv.fadeOut();
	}
}

function YouTubePlayer(TargetID, VideoID)
{
	TARGET_ID = TargetID;
	VIDEO_ID = VideoID;

	// This code loads the IFrame Player API code asynchronously.
	var tag = document.createElement('script');

	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}