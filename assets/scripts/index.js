const hourHand = document.getElementById("hour");
const minuteHand = document.getElementById("minute");
const secondHand = document.getElementById("second");

rotateClockHands = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const milliSeconds = date.getMilliseconds();

    // Calculating degrees of rotation for clock hands
    hrotation = (30 * hours) + (minutes / 2) + (seconds / 120) + (milliSeconds / 120000);
    mrotation = (6 * minutes) + (seconds / 10) + (milliSeconds / 10000);
    srotation = (6 * seconds) + (6 * milliSeconds / 1000);

    hourHand.style.transform = `rotate(${hrotation}deg)`;
    minuteHand.style.transform = `rotate(${mrotation}deg)`;
    secondHand.style.transform = `rotate(${srotation}deg)`;

    console.log(milliSeconds);
    
}

setInterval(rotateClockHands, 1);