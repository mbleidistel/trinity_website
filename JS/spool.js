function spoolpic(dir, fileextension, targ){
	$.ajax({
		//This will retrieve the contents of the folder if the folder is configured as 'browsable'
		url: dir,
		success: function (data) {
			//List all of selected file extension names in the page
			$(data).find("a:contains(" + fileextension + ")").each(function () {
				var filename = this.href.replace(window.location.host, "").replace("http://", "").replace("/Trinity/", "");
				if (screen.width <= 800) {
					$(targ).cycle('add', "<img src='" + dir + filename + "' style='width:300px; height:200px;'>");
				} else {
					$(targ).cycle('add', "<img src='" + dir + filename + "'>");
				}
			});
		}
	});
}

$(document).ready(function(){	
	spoolpic( "images/title/", ".jpg", "#toppic");
});

function playmovie(){
	var VimeoPlayerInfo = "<center><div id='VimeoPlayer'></div></center>";
	$('#pics').fadeIn(function(){
			$('#pics').html( VimeoPlayerInfo );
			VimeoPlayer('VimeoPlayer', '131046134');
		});
	}