
gsap.registerPlugin(ScrollTrigger);


// Animate the Prize Section Title
gsap.from(".section-title-prize", {
    scrollTrigger: {
        trigger: "#Prize",
        start: "top 80%", // Animation starts when the section comes into view
        end: "bottom 20%",
        scrub: true,
    },
    x: -100,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
});

// Animate the Prize Amount with a Floating Effect
gsap.from(".prize-amount-glow", {
    scrollTrigger: {
        trigger: "#Prize",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
});

// Add a subtle pulse effect to the prize amount after it appears
gsap.to(".prize-amount-glow", {
    textShadow: "0 0 30px rgba(255, 204, 0, 1), 0 0 60px rgba(255, 204, 0, 0.8)",
    repeat: -1,
    yoyo: true,
    duration: 1.5,
    ease: "power1.inOut"
});

// Rules Section Animations
gsap.from(".rules-title", { duration: 1, opacity: 0, y: -50, ease: "power2.out" });
gsap.from(".rules-subtitle", { duration: 1.2, opacity: 0, y: 50, delay: 0.3, ease: "power2.out" });
gsap.from(".rules-list li", {
    duration: 1,
    opacity: 0,
    x: -50,
    stagger: 0.2,
    delay: 0.5,
    ease: "power2.out"
});
