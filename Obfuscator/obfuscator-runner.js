var Settings =
{
    webpage:"http://javascriptobfuscator.com/Javascript-Obfuscator.aspx",
	sourceTextbox:"ctl00_breadcrumbs_TextBox1",
	targetTextbox:"ctl00_breadcrumbs_TextBox2",
	checkBoxes:["ctl00_MainContent_cbMoveStr"],
	obfuscateCommand:"__doPostBack('ctl00$breadcrumbs$Button1','')"
};

var system = require('system');
var page = null, source = null, target = null, written = false, NetworkError = 0, Counter = 0;

if (system.args.length !== 3)
{
	console.log('Usage: phantomjs obfuscator-runner.js source {target}');
	phantom.exit(1);
}
else
{
	page = require('webpage').create();
	source = system.args[1];
	target = system.args[2];

	if (source === "" || source === "${source}")
	{
		phantom.exit(1);
	}
	if (target === "" || target === "${target}")
	{
		console.log("Using source as target");
		target = source;
	}


	console.log("");
	console.log("Attempting to read Settings from http://maps.i-openapps.com/ObfuscatorConfiguration.json");

	page.open("http://MobileMapDemoUser:MapFall20!2@maps.i-openapps.com/ObfuscatorConfiguration.json", function()
	{
		var jsonText = page.plainText;
		Settings = JSON.parse(jsonText);
		console.log("");
		console.log("Retrieved and parsed settings");

		obfuscate();
	});

	var obfuscate = function()
	{
		page.open(Settings.webpage, function (status)
		{
			console.log("");
			console.log("Beginning Obfuscation Process");

			if (status == 'success')
			{
				var fs = require('fs');

				// Read the file
				var reader = fs.open(source, "r");
				var code = reader.read();
				if (reader)
				{
					reader.close();
				}
				console.log("");
				console.log("Finished reading " + source + " file");

				// Place the file's text into the document box for obfuscation ...
				page.evaluate(function (Settings, code)
				{
					document.getElementById(Settings.sourceTextbox).value = code;
				}, Settings, code);
				//page.render("speed.png");
				//phantom.exit();

				console.log("");
				console.log("Setting Parameters ...");
				for ( var i=0; i < Settings.checkBoxes.length; i++ )
				{
					page.evaluate(function (Settings, i)
					{
						document.getElementById(Settings.checkBoxes[i]).checked = false;
					}, Settings, i);
				}
				//page.render("speed.png");
				//phantom.exit();

				page.onResourceRequested = function(requestData, request) {
					if (
						(/http:\/\/.+?\.css/gi).test(requestData['url']) ||
						(/google\.com/ig).test(requestData['url']) ||
						requestData['Content-Type'] == 'text/css'
					)
					{
						//console.log('Redirect to other page aborted.');
						request.abort();
					}
				};

				page.onLoadFinished = function (result)
				{
					// If we have tried this X amount of times, fail
					if (NetworkError == 10)
					{
						console.log("");
						console.error("Too many network errors!");
						phantom.exit(1);
					}

					// Check if the page loaded successfully
					if ( result != 'success')
					{
						if ( NetworkError > 0 )
						{
							console.log("");
							console.log("Network error during loading of page encountered, reloading page ");
						}

						Counter = 0;
						NetworkError++;
						setTimeout(function()
						{
							page.evaluate(function (Settings)
							{
								eval(Settings.obfuscateCommand);
							}, Settings);
						}, 2000);
						return;
					}

					// If we have tried this X amount of times, fail
					if (Counter == 20)
					{
						console.log("");
						console.error("Unsuccessfully attempted to retrieve results!");
						phantom.exit(1);
					}

					// Get the textbox content
					var obfuscated = page.evaluate(function (Settings)
					{
						return document.getElementById(Settings.targetTextbox).value;
					}, Settings);

					// If we didn't get any results, reload the page
					if (obfuscated == "")
					{
						if ( Counter > 0 )
						{
						console.log("");
						console.log("Retrying to receive results ... " + Counter);
						}

						Counter++;
						setTimeout(function()
						{
							page.evaluate(function (Settings)
							{
								//document.getElementById('Button1').click();
								eval(Settings.obfuscateCommand);
							}, Settings);
						}, 2000);
						return;
					}

					// If we made it to here, write the retrived contents into a file
					var fs = require('fs');
					written = true;
					console.log("");
					console.log("Obfuscation result received");

					fs.write(target, obfuscated);
					console.log("");
					console.log("Finished writing " + target + " file");

					console.log("");
					console.log("Obfuscation successfully completed!");

					//page.render("speed.png");
					phantom.exit();
				};

				console.log("");
				console.log("Starting obfuscation ...");

				// Press the obfuscation button
				page.evaluate(function (Settings)
				{
					//document.getElementById('ctl00_breadcrumbs_Button1').click();
					eval(Settings.obfuscateCommand);

					setTimeout(function ()
					{
						console.log("");
						console.error("Timeout waiting for obfuscation!");
						phantom.exit(1);
					}, 120000);
				}, Settings);

				console.log("");
				console.log("Waiting for obfuscation to finish ...");
			}
			else
			{
				console.log("Aborting!");
				phantom.exit(1);
			}
		});
	};
}