// Get the div items containing the clock hands
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


const setDate = () => {
    const now = new Date();

    // Get the current second and set the clock hand appropriately
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    // Get the current minute and set the clock hand appropriately
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes/60) * 360 + 90);
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    // Get the current hour and set the clock hand appropriately
    const hours = now.getHours();
    const hoursDegrees = ((hours/12) * 360 + 90);
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

}

// Call the function every 1000ms (every second)
setInterval(setDate, 1000);