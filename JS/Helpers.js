function delayedDisplay(DelayInSecs, Callback)
{
	var Timeout = null;
	(function(Timeout, DelayInSecs, Callback)
	{
		Timeout = setTimeout(function()
		{
			clearTimeout( Timeout)
			if ( Callback && typeof(Callback) == 'function' )
				Callback();
		}, DelayInSecs*1000);
	})(Timeout, DelayInSecs, Callback);
}

function getImageObjectArrayEntry()
{
	return {imageURL:null, description:null, link:null, linkTarget:"_blank"};
}

function buildImageObjectArray(URL, Callback)
{
	if ( URL.slice(-1) != '/')
		URL += "/";

	jQuery.getJSON(URL + 'getFiles.php', function(files)
	{
		var images = [];
		for ( var i=0; i < files.length; i++ )
		{
			if ( files[i] == 'getFiles.php')
				continue;

			var image = getImageObjectArrayEntry();
			image.imageURL = URL + files[i];
			image.filename = files[i];
			// If this doesn't have IMG as part of the name, use the name as the description
			if ( files[i].toUpperCase().indexOf('IMG') == -1)
				image.description = files[i].split('.')[0];
			images.push(image);
		}

		if ( Callback && typeof(Callback) == 'function' )
			Callback(images);
	});
}

function createSliceboxSlideshowUL(PathToGetFilesPHP, ParentID)
{
	if ( PathToGetFilesPHP.slice(-1) != '/')
		PathToGetFilesPHP += "/";

	var createHTML = function(ID, ImageObjectArray)
	{
		var html = [];
		html.push("<ul id='" + ID + "' class='sb-slider' style='width:100%;height:100%'>");

		// Create li element
		for ( var i=0; i < ImageObjectArray.length; i++)
		{
			var ImageObject = ImageObjectArray[i];

			var li = "<li>" +
			         (ImageObject.link ? "<a href='" + ImageObject.link + "'" + (ImageObject.linkTarget ? " target='" + ImageObject.linkTarget + "'" : "") + ">" : "") +
			         "<img src='" + ImageObject.imageURL + "'/>" +
			         (ImageObject.link ? "</a>" : "" ) +
			         (ImageObject.description ? "<div class='sb-description'><h3>" + ImageObject.description + "</h3></div>" : "") +
			         "</li>";

			html.push(li);
		}

		// Finish the unsorted list
		html.push("</ul>");

		return html.join('');
	};

	buildImageObjectArray(PathToGetFilesPHP, function(ImageObjectArray)
	{
		// Check if this ID is in use already
		var ID = 'sb-slider';
		var count = $(ID).length;
		if ( count > 0 )
			ID += "_" + count;

		// Create the unsorted list from the files
		$('#' + ParentID).html( createHTML(ID, ImageObjectArray) );

		// Create the animation
		SliceBox = $('#' + ID).slicebox(
		{
            onReady : function() {},
			sequentialRotation : true,
			orientation : 'r',
			//cuboidsRandom : true,
			slicesCount : 15,
			disperseFactor : 10,
			sequentialFactor: 300, // speed of the slice animation between slices
			speed: 500, // speed that it takes one cuboid to rotate
			interval: 8000,
			autoplay: true
		});
	});
}

function createGalleriaSlideshowUL(PathToGetFilesPHP, ParentID)
{
	if ( PathToGetFilesPHP.slice(-1) != '/')
		PathToGetFilesPHP += "/";

	var createHTML = function(ImageObjectArray)
	{
		var height = $('#' + ParentID).height() - 10;

		var html = [];
		html.push("<div id='" + ParentID + "_Galleria' style='height:" + height + "px'>");
		// Create a elements
		for ( var i=0; i < ImageObjectArray.length; i++)
		{
			var ImageObject = ImageObjectArray[i];

			// If this doesn't have IMG as part of the name, use the name as the description
			if ( ImageObject.filename.toUpperCase().indexOf('IMG') == -1)
				ImageObject.description = ImageObject.filename.split('.')[0];

			var imageRow = "<a href='" + ImageObject.imageURL +"'>";
			imageRow += "<img src='" + ImageObject.imageURL + "' data-big='" + ImageObject.imageURL +"' data-title='" + ImageObject.description + "'/>";// data-description='" +  ImageObject.filename + "'/>";
			imageRow += "</a>";

			html.push(imageRow);
		}
		html.push("</div>");

		return html.join('');
	};

	buildImageObjectArray(PathToGetFilesPHP, function(ImageObjectArray)
	{
		// Create the unsorted list from the files
		$('#' + ParentID).html( createHTML(ImageObjectArray) );

		Galleria.loadTheme("JS/classic/galleria.classic.min.js");

		Galleria.run('#' + ParentID + "_Galleria",
		{
			autoplay: 7000,
			transition: 'fadeslide',
			transitionSpeed: 1000,
			_toggleInfo: true,
			thumbPosition: 'center'
		});
	});
}

function addDiv(Name, Top, Left, Width, Height, ParentID)
{
	Width = Width || "";
	if ( Width != "" )
		Width = "width:" + Width + ";";

	Height = Height || "";
	if ( Height != "" )
		Height = "height:" + Height + ";";

	ParentID = typeof(ParentID) == 'undefined' ? Site : ParentID;
	// Check if we need to add # for the ID
	ParentID = $(ParentID).length == 0 ? '#' + ParentID : ParentID;

	var ID = Name.trim().killSpaces().killSpecialChars();
	var count = $('#' + ID).length;
	if ( count > 0 )
		ID += "_" + count;

	$(ParentID).append("<div hidden id='" + ID + "' style='position:absolute;top:" + Top +";left:" + Left + ";" + Width + Height +"' ></div>");

	return $('#' + ID);
}

function addOutlineButton(Text, Top, Left, Width, Height, ParentDiv)
{
	Width = Width || "";
	if ( Width != "" )
		Width = "width:" + Width + ";";

	Height = Height || "";
	if ( Height != "" )
		Height = "height:" + Height + ";";

	ParentDiv = ParentDiv || Site;

	var ID = Text.trim().killSpaces().killSpecialChars();
	var count = $('#' + ID).length;
	if ( count > 0 )
		ID += "_" + count;

	$(ParentDiv).append("<input hidden id='" + ID + "' type='button' class='standardButton outlineButton' style='position:absolute;top:" + Top +";left:" + Left + ";" + Width + Height +"' value='" + Text + "'></input>");

	return $('#' + ID);
}

jQuery.fn.center = function ()
{
	this.css("position","absolute");
	this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + "px");
	this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +	$(window).scrollLeft()) + "px");
	return this;
};

jQuery.fn.vCenter = function ()
{
	this.css("position","absolute");
	this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + "px");
	return this;
};

jQuery.fn.hCenter = function ()
{
	this.css("position","absolute");
	this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px");
	return this;
};

jQuery.fn.centerAnim = function ()
{
	this.css("position","absolute");
	var top = Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + "px";
	var left = Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +	$(window).scrollLeft()) + "px";
	this.animate({top: top, left: left});
	return this;
};

jQuery.fn.vCenterAnim = function ()
{
	this.css("position","absolute");
	var top = Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + "px";
	this.animate({top: top});
	return this;
};

jQuery.fn.hCenterAnim = function ()
{
	this.css("position","absolute");
	var left = Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +	$(window).scrollLeft()) + "px";
	this.animate({left: left});
	return this;
};

/**
 * Prototype trim() onto String Class if not defined
 * @memberOf String.prototype
 */
String.prototype.trim = String.prototype.trim || function trim()
{
	return this.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
};

/**
 * Prototype killSpaces() onto String Class if not defined
 Removes all spaces inside a string, leaving only characters other than space
 * @memberOf String.prototype
 */
String.prototype.killSpaces = function() {
	return this.replace(/\s/g, '');
};

/**
 * Prototype killSpecialChars() onto String Class if not defined
 Removes all special characters inside a string, leaving only regular characters, including space
 * @memberOf String.prototype
 */

String.prototype.killSpecialChars = String().killSpecialChars || function()
{
	return this.replace(/[^\w\s]/gi, '');
};

/**
 * Prototype reduceSpaces() onto String Class if not defined
 Removes extra spaces inside a string, leaving only single strings
 * @memberOf String.prototype
 */
String.prototype.reduceSpaces = function() {
	return this.replace(/\s+/g, ' ');
};

String.prototype.splitIntoFilePathElements = function()
{
	return this.split(/(\\|\/)/g);
};
