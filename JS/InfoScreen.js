/**
 * Created by Michael on 15-05-09.
 */
function showImage(Section, imageURL)
{
	// Get the element
	var e =$('#' + Section).find('.largeImage');
	// Show the large image
	e.attr('src', imageURL);
	//
	e.parent().attr('href', imageURL);
}

function createInfoScreenFor(TargetSelector, URL)
{
	var BaseURL = 'Data/Info/' + URL + '/';
	var Target = $(TargetSelector);
	var Text = Target.find('#Text');
	var Images = Target.find('#Images');

	function getFiles(BaseURL, Callback)
	{
		$.getJSON(BaseURL + '/getFiles.php', function(files)
		{
			// Our complete array
			var data = [];

			// Piece of the data
			var piece = {name:"", info:"", images:[]};

			for ( var i=0; i < files.length; i++ )
			{
				var path = files[i];

				if ( ~path.indexOf('getFiles.php') )
					continue;

				if ( !~path.indexOf('/') )
				{
					if (
						piece.name != "" &&
						piece.name != path
					)
					{
						// Save this section, then start a new one
						data.push( piece );
					}

					piece = {name:"", info:"", images:[]};
					piece.name = path;
					continue;
				}

				var folder = encodeURI( path.substr(0, path.indexOf('/')) );
				var file = encodeURI( path.substr(path.indexOf('/')+1) );


				// Do we have the info file?
				if ( file.toLowerCase() == 'info.html' )
				{
					// Fill the info in
					piece.info = BaseURL + folder + '/' + file;
				}
				else {
					// Add the image
					piece.images.push(BaseURL + folder + '/' + file)
				}

				// Fullfill the data with this piece, since we are the end of the array
				if (i+1 == files.length )
					data.push( piece );
			}

			if ( Callback && typeof(Callback) == 'function' )
				Callback(data);
		});

	}

	getFiles(BaseURL, function(data)
	{
		var accordion = [];
		var images = [];

		var textElements = [];
		for ( var i=0; i < data.length; i++ )
		{
			var section = data[i];

			// Create the accordion data
			accordion.push("<h3>" + section.name + "<h3>");
			textElements.push( {name:section.name.killSpaces().killSpecialChars(), url:section.info} );
			accordion.push("<div><p id='" + textElements[i].name + "'></p></div>");

			// Create the image divs
			// All the small images
			var smallImages = "<center><table class='smallImageDivTable'><tr>";
			for (var s=0; s < section.images.length; s++)
			{
				smallImages += "<td><img class='drop-shadow smallImage' src='" + section.images[s] + "' onclick='showImage(\"" + textElements[i].name + "_Images\",\"" + section.images[s] + "\")'></td>";
			}
			smallImages += "</tr></table></center>";
			// The image division itself
			var imageHeight = $('#Images').height() * 75 / 100;
			images.push(
				"<div hidden class='drop-shadow sectionImages' id='" + textElements[i].name + "_Images'>" +
					"<div class='largeImageDiv'>" +
						"<a href='" + section.images[0] + "' target='_blank'><img class='largeImage' style='height:" + imageHeight + "px;' src='" + section.images[0] +"'></a>" +
					"</div>" +
					"<div class='smallImageDiv'>" +
						smallImages +
					"</div>" +
				"</div>"
			);
		}

		// Surround the accordion by a div, so it can be styled into the accordion widget
		/*accordion.unshift("<div id='accordion'>");
		accordion.push("</div>");*/
		accordion.unshift("<div id='accordion'>");
		accordion.push("</div>");

		// Create the accordion widget on the Text side
		Text.html( accordion.join('') );
		// Create the accordion element
		$('#accordion').accordion({
			heightStyle: "fill",
			activate: function( event, ui )
			{
				// Hide all elements
				$('#Images').find('.sectionImages').hide();
				// Show the ones relating to the accordion we clicked on
				$('#' + ui.newHeader[0].outerText.killSpaces().killSpecialChars() + "_Images").show();
			}
		});

		// Load the text elements into the paragraphs
		for ( var i=0; i < textElements.length; i++ )
		{
			$('#' + textElements[i].name).load(textElements[i].url);
		}

		// Add the image div's
		Images.html( images.join('') );
		// Show the first section's images
		$('#' + $('.sectionImages')[0].id).show();
	});
}