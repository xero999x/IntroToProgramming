var clicked = false;

window.addEventListener("click", (event) => {
    if(!clicked){
        let audioSources = ["Storm.mp3", "Lofi.mp3"];

        let audioElement = document.getElementById("backgroundAudio");

        audioElement.src = audioSources[Math.floor(Math.random() *audioSources.length)];
        audioElement.loop = true;
        audioElement.play();

        clicked = true;
    }
});