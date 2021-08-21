// Assigning all buttons with the class drum to a variable
let drumButtons = document.querySelectorAll(".drum");

// Looping through all drumbuttons
for (let i = 0; i < drumButtons.length; i++) {
// Adding an eventlistener to each button, triggering
// a function when the button is clicked
drumButtons[i].addEventListener("click", function() {
    // Assigning the inner HTML of the button clicked to a variable
    let key = this.innerHTML;
    //Playing a sound when the button is clicked
    playSound(key);
    // Triggering an animation when button is clicked
    animateButton(key);
});

document.addEventListener("keydown", function(event) {
    // Playing a sound when the key is pressed
    playSound(event.key);
    // Triggering an animation the key is pressed
    animateButton(event.key);
});

function playSound(key) {
    // Switching depending on what inner HTML the button clicked has
    switch(key) {
        case "w":
            // Assigning an audio file url (using Audio object) to a variable
            let tom1 = new Audio("sounds/tom-1.mp3");
            // Calling the play method on the audio file
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "k":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "l":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        // In case the button clicked has some other inner html than the
        // cases above, defaulting to log out the inner html
        default:
            console.log(drumButtonInnerHTML);
    }
}}

function animateButton(key) {
    let activeButton = document.querySelector("." +key);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}