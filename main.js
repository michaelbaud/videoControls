var player = document.querySelector('#videoPlayer');
var btnPlay = document.querySelector(".btnPlay");
var btnPause = document.querySelector(".btnPause");
var btnReplay = document.querySelector(".btnReplay");
var slideVolume = document.querySelector(".slideVolume");
var btnMute = document.querySelector(".btnMute");
var progressBar = document.querySelector('.progressBar');
var btnFullScreen = document.querySelector(".btnFullScreen");
var block = document.querySelector(".block");
var percent = 0;

btnPlay.addEventListener('click', function() {
	player.play();
	btnPlay.style.display = 'none';
	btnPause.style.display = 'block';
});

btnPause.addEventListener('click', function() {
	player.pause();
	btnPlay.style.display = 'block';
	btnPause.style.display = 'none';
});

btnReplay.addEventListener('click', function() {
	player.currentTime = 0;
});


btnPause.style.display = 'none';

player.addEventListener("timeupdate", function() {
	percent = Math.floor((100 / this.duration) * this.currentTime);
	progressBar.value = percent;
	progressBar.style.color="blue";
});

slideVolume.addEventListener('change', function() {
	player.volume = slideVolume.value;
});

btnMute.addEventListener('click', function() {
	var valueVolume = slideVolume.value;

	if(player.volume > 0) {
		player.volume = 0;
		btnMute.classList.add("red");
	}
	else {
		player.volume = valueVolume;
		btnMute.classList.remove("red");
	}
});

var fullScreen1 = "off";
btnFullScreen.addEventListener("click", function() {
	if(fullScreen1 === "off") {
		videoPlayer.style.width = "99vw";
		videoPlayer.style.maxHeight = "99vh";
		block.style.backgroundColor = "black";
		fullScreen1 = "on";
	}
	else {
		videoPlayer.style.width = "60vw";
		block.style.backgroundColor = "#fff";
		fullScreen1 = "off";
	}
});

