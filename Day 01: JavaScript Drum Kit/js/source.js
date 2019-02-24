window.addEventListener("keydown", (event) => {
    // Retrieve the html audio element based on the key pressed
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    if(!audio) return;          // If the element doesn't exist (keycode not in our data-key set), exit the function.

    audio.currentTime = 0;      // Rewind to the beginning to allow the keys to play repeatedly without lag.
    audio.play();
})