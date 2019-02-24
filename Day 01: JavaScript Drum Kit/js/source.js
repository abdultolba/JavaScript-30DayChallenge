// This event listener will play the corresponding audio file when a key is clicked and will animate it.
window.addEventListener("keydown", (event) => {
    // Retrieve the html audio element based on the key pressed
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`)

    if(!audio) return;              // If the element doesn't exist (keycode not in our data-key set), exit the function.
    audio.currentTime = 0;          // Rewind to the beginning to allow the keys to play repeatedly without lag.
    audio.play();

    key.classList.add('playing');   // Add the class playing to the key to get it an animated effect 
});

function removeTransition(event){
    if(event.propertyName !== "transform") return;  // Skip it if it was not transformed
    this.classList.remove('playing');   // Remove the class playing from the key to remove the animated effects
};

// Retrieve all the elements that transitioned and remove the effects when the transition ends
const keys = document.querySelectorAll(".key"); 
keys.forEach(key => key.addEventListener('transitionend', removeTransition))