'use-strict';

// Window dimensions (eseless)
let intViewportHeight = window.innerHeight;
let intViewportWidth = window.innerWidth;

// Just for develepement purpose
//console.log(intViewportWidth);
//console.log(intViewportHeight);

// List of images for emotes
let emotes = [
    "./medias/gea.png",
    "./medias/ahaha.jpg",
    "./medias/aymeric.png",
    "./medias/patience.png",
    "./medias/anglade.jpg",
    "./medias/stepan.png",
];

// Audio source to be played
const audio = new Audio('./medias/crabCrave.mp3');

/* Generates the emotes imgs */
const generate = () => {
    let container = document.getElementById("emote-container");

    // Reset all emotes
    container.innerHTML = "";

    for (let i = 0; i < counter.count; i++) {
        
        // Creates img emotes instances
        const newChild = document.createElement("img");
        newChild.className = "emote";
        newChild.src = emotes[Math.floor(Math.random() * emotes.length)];
        newChild.style.position = "absolute";

        rpositionx = Math.floor(Math.random() * 100)
        rpositiony = Math.floor(Math.random() * 100)

        newChild.style.left = `${rpositionx}%`;
        newChild.style.top = `${rpositiony}%`;

        // Add them to the emotes container div
        container.appendChild(newChild);
    }
   
}


// Animation function with GSAP Library
const animation = () => {

    // Check wether an animation is already running
    if (isTweening()) return;

    // Create all the childNodes
    let container = document.getElementById("emote-container");
    generate();

    // If empty stop the audio and abort
    if (container.childNodes.length <= 0) {
        audio.pause();
        audio.currentTime = 0;
        return ;
    };
    
    // Launch the audio if not already playing
    if (audio.paused) {
        audio.play();
    }
    

    // Create a timeline for animation
    const EmoteTimeline = gsap.timeline({onComplete: animation});

    EmoteTimeline
        .from(".emote", {duration: 1, opacity: 0})
        .to(".emote", {
            duration: 8, 
            x: "random(-300, 300)", 
            y: "random(-300, 300)", 
            z: "random(0, 1000)", 
            rotation: "random(-360, 360)", 
            ease: "linear"
        }, "-=1")
        .to(".emote", {duration: 1, opacity: 0}, "-=1");

}

// Simple array function to check wether the animation is running
const isTweening = () => gsap.isTweening('.emote');


