var slides = [
	// "https://unsplash.imgix.net/photo-1422022098106-b3a9edc463af?q=25&amp;fm=jpg&amp;s=127f3a3ccf4356b7f79594e05f6c840e",
	/*"photo-1422022098106-b3a9edc463af",
	"photo-1415871989540-61fe9268d3c8",
	"photo-1414502622871-b90b0bec7b1f",

	"photo-1418065460487-3e41a6c84dc5"*/
	"Squamish2.jpg",
	"Squamish1.jpg"
];

var counter = 0;

(function(counter)
{
	function nextImage()
	{
		var url = $('.cover-image').css('background-image');

		/*var part = url.substr(url.indexOf('https'), url.indexOf('photo')-5) + "/";
		var part1 = url.substr(url.indexOf('?q'));
		part1 = part1.substring(0, part1.indexOf("\")"));

		url = part + slides[counter] + part1;*/
		url = "CoverImages/" + slides[counter];

		//$('<img/>').attr('src', part + slides[counter]).load(function ()
		$('<img/>').attr('src', url).load(function ()
		{
			$(this).remove(); // prevent memory leaks as @benweet suggested
			$('.cover-image').css('background-image', "url('" + url + "')");
			setTimeout(nextImage, 15000);
		});

		counter++;
		if ( counter == slides.length )
			counter = 0;
	};

	setTimeout(function(){
		nextImage();
	},15000); // Disabled

})(counter);