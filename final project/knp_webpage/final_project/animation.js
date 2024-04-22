document.addEventListener("DOMContentLoaded", function() {
    var controller = new ScrollMagic.Controller();

    // Scene for class toggle for visibility
    new ScrollMagic.Scene({
        triggerElement: "#rhinoPoachingImpact",
        triggerHook: 0.5,
    })
    .setClassToggle("#rhinoPoachingImpact", "visible")
    .addTo(controller);

    // Define a timeline for the zoom and text resize animations
   // Define a timeline for the zoom and text resize animations
var timeline = gsap.timeline();

// Add zoom animation for the chart
timeline.to("#rhinoPoachingImpact iframe", {
    scale: 1.07, // Make sure scale is clearly noticeable
    ease: "none",
    duration: 1,
    transformOrigin: "50% 50%" // Center the zoom effect
});

    // Create a ScrollMagic Scene to trigger the animation
    new ScrollMagic.Scene({
        triggerElement: "#rhinoPoachingImpact",
        duration: window.innerHeight, // Example: set to the height of the viewport
        triggerHook: 0.5,
        reverse: true
    })
    .setTween(timeline)
    .addTo(controller) 
});
