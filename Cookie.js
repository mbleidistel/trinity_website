function createCookie(cname, value, days) {
	var date, expires;
	if (days) {
		date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		expires = "; expires="+date.toGMTString();
	} else {
		expires = "";
	}
	document.cookie = cname+"="+value+expires+"; path=/";
}

function getCookie(cname)
{
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++)
	{
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1);
		if (c.indexOf(name) == 0)
			return c.substring(name.length,c.length);
	}
	return null;
}

function deleteCookie(cname)
{
	createCookie(cname, "", -1); // Re-create with days set to -1
}

function checkForReload(name, days)
{
	name = name || 'reload';
	days = days || 1;

	var cookie = getCookie(name);
	if ( !cookie ) // if the cookie does not exist...
	{
		var val = window.confirm("The page is more than " + days + " day" + (days>1?"s":"") + " old and could have changed.\nWould you like to reload it?");
		if ( val == true)
		{
			window.location.reload(true);
			createCookie('reload', 'cached', days); // Leave cookie for 1 day
		}
	}
}