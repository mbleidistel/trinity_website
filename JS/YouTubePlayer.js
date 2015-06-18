var VIDEO_ID = null;
var TARGET_ID = null;
var Quality = 480;
var videoTimeout = null;

// This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
	youtubeplayer = new YT.Player(TARGET_ID, {
		height: Quality,
		width: "" + parseInt(Quality * 1.455555555555555556),
		videoId: VIDEO_ID,
		events: {
			'onReady': onPlayerReady,
			'onPlaybackQualityChange': onPlayerPlaybackQualityChange,
			'onStateChange': onPlayerStateChange
		}
	});
}

// The API will call this function when the video player is ready.
function onPlayerReady(event) {
	$('#YouTubePlayer');
	event.target.playVideo();
	$('#StopVideoLink').html("<a onclick='stopYoutubeVideo();' class='CopyrightFont red-hover'>Skip Video</a>");
}

function onPlayerPlaybackQualityChange(event)
{
	event.target.setPlaybackQuality('hd' + Quality)
}
// The API calls this function when the player's state changes.
// The function indicates that when playing a video (state=1),
// the player should play for six seconds and then stop.
function onPlayerStateChange(event) {
	youtubeplayer.setPlaybackQuality('hd' + Quality);
	if (event.data == YT.PlayerState.PLAYING)
	{
	}
	if (event.data == YT.PlayerState.ENDED)
	{
		stopYoutubeVideo();
	}
}

function stopYoutubeVideo()
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
		VideoDiv.fadeOut(function()
		{
			Background.fadeIn(function()
			{
				startBackgroundAnimation();
			});
		});
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