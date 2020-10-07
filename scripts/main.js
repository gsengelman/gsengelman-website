const audio = new Audio("music/Welcome Horizons.mp3")

var buttonPlay = document.getElementById("buttonPlay");
buttonPlay.addEventListener('click', function(){
    buttonPlay.children[0].classList.toggle("fa-play-circle")
    buttonPlay.children[0].classList.toggle("fa-pause-circle")
    if(audio.paused)
        audio.play();
    else
        audio.pause();
}, false);




