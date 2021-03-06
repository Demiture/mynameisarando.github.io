// Arando.club JS File | Non-OG code is marked so //


// Audio Volume //
document.getElementById("music").volume = 0.03;

// Play / Pause //
var x = document.getElementById("music"); 
function playAudio() { 
	x.play(); 
} 
function pauseAudio() { 
	x.pause(); 
} 
// JQuery Hide/Show for extendeded divs //
$(document).ready(function(){
	$("#expand").click(function(){
		$(".extended-box").slideToggle("slow");
	});
});
$(document).ready(function(){
	$("#wp").click(function(){
		$(".oc-container").toggle();
	});
});

// Modal //
var modal = document.getElementById('popup');
var btn = document.getElementById("recommend");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
	modal.style.display = "block";
	modal.classList.add("fade");
}
span.onclick = function() {
	modal.style.display = "none";
}
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}

// CRT Effect Toggle //
$(document).ready(function(){
    $("#crttoggle").click(function(){
        $("body").toggleClass("crt");
    });
});

// Not my code, https://codepen.io/blackjacques/pen/LLQKKJ //
var player = document.getElementById('music'); // id for audio element
var duration; // Duration of audio clip
progressBar  = document.getElementById('progress-bar');
source       = document.getElementById('audioSource');

// Add a listener for the timeupdate event so we can update the progress bar
player.addEventListener('timeupdate', updateProgressBar, false);
			
// Update the progress bar
function updateProgressBar() {
// Work out how much of the media has played via the duration and currentTime parameters
var percentage = Math.floor((100 / player.duration) * player.currentTime);
// Update the progress bar's value
progressBar.value = percentage;
// Update the progress bar's text (for browsers that don't support the progress element)
progressBar.innerHTML = progressBar.title = percentage + '% played';
}
        
function resetPlayer() {
progressBar.value = 0;
//clear the current song
player.src = '';
// Move the media back to the start
player.currentTime = 0;
// Set the play/pause button to 'play'
changeButtonType(btnPlayPause, 'play');
}  