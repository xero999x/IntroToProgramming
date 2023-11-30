// Sets the page to "not clicked"
var clicked = false;
// Listens for the user to click the window, then plays the audio
window.addEventListener("click", (event) => {
    if(!clicked){
        let audioSources = ["Storm.mp3", "Lofi.mp3"];
        // Gives the audio an ID
        let audioElement = document.getElementById("backgroundAudio");
        // Randomize which audio is played from the array, then plays it on a loop.
        audioElement.src = audioSources[Math.floor(Math.random() *audioSources.length)];
        audioElement.loop = true;
        audioElement.play();
        // Sets the page to "clicked"
        clicked = true;
    }
});