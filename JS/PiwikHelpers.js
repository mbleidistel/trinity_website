/**
 * Created by Michael on 15-08-12.
 */
function PiwikTrackContent()
{
	var tracker = Piwik.getAsyncTracker();
	tracker.trackAllContentImpressions();
	tracker.enableLinkTracking(true);
	tracker.enableHeartBeatTimer(10);
};

function PiwikEvent(Category, Action, Name, Value)
{
	if ( Category == undefined )
	{
		console.error('PiwikEvent: No Category defined!');
		return;
	}

	Action = Action || 'Click';

	if ( Name != undefined && Value != undefined)
		_paq.push(['trackEvent', Category, Action, Name, Value]);
	else if ( Name != undefined && Value == undefined)
		_paq.push(['trackEvent', Category, Action, Name]);
	else
		_paq.push(['trackEvent', Category, Action])
}

function PiwikPageView(Title)
{
	if ( Title != undefined )
		_paq.push(['trackPageView', Title]);
	else
		_paq.push(['trackPageView']);
}
