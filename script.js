// HTML variables for hands on the clock
const secondHand = document.getElementById("second-hand")
const minHand = document.getElementById("min-hand")
const hourHand = document.getElementById("hour-hand")

// Function for clock to tick
function clockTicker() {

    // Get time for clock to tick by
    const date =  new Date()
    const seconds = date.getSeconds()/60
    const minutes = date.getMinutes()/60
    const hours = date.getHours()/12

    // Properties for hand rotation
    rotateClockHand(secondHand, seconds)
    rotateClockHand(minHand, minutes)
    rotateClockHand(hourHand, hours)
}

// Tells Hand how much to rotate by
function rotateClockHand(element, rotation) {
    element.style.setProperty('--rotate', rotation * 360)
}

// Ticks clock every second
setInterval(clockTicker, 1000)
