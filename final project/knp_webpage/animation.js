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
    var timeline = gsap.timeline();

    // Add zoom animation for the chart
    timeline.to(".graph-container iframe", {
        scale: 1,
        ease: "none",
        duration: 1,
        transformOrigin: "center center",
    }, 0);

    // Simultaneously, adjust the text size or position
    timeline.to(".text-container", {
        scale: 1,
        ease: "none",
        duration: 1,
        transformOrigin: "left top",
    }, 0);

    // Create a ScrollMagic Scene to trigger the animation
    new ScrollMagic.Scene({
        triggerElement: "#rhinoPoachingImpact",
        duration: "10%", // This duration value controls how long the animation part is relevant to the scroll distance.
        triggerHook: 0.5,
        reverse: true
    })
    .setTween(timeline)
    .addTo(controller);
});
