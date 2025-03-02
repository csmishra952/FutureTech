// GSAP Animations
gsap.from(".hero h1", { duration: 1.5, y: -100, opacity: 0, ease: "bounce.out" });
gsap.from(".hero p", { duration: 1.5, y: 100, opacity: 0, delay: 0.5, ease: "power3.out" });

// Particles with Random Movement
const particles = document.querySelector(".particles");
for (let i = 0; i < 100; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");
    particle.style.left = Math.random() * 100 + "vw";
    particle.style.top = Math.random() * 100 + "vh";
    particle.style.animationDuration = Math.random() * 4 + 2 + "s";
    particles.appendChild(particle);
    gsap.to(particle, {
        x: Math.random() * 200 - 100,
        y: Math.random() * 200 - 100,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });
}

// Timeline Fly-In
gsap.from(".timeline-item", {
    duration: 1,
    x: () => Math.random() * 400 - 200, // Random horizontal entry
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: { trigger: ".timeline", start: "top 70%" }
});

// Stats Pulse and Count
document.querySelectorAll(".number").forEach(number => {
    const target = +number.getAttribute("data-target");
    gsap.to(number, {
        duration: 3,
        innerHTML: target,
        roundProps: "innerHTML",
        ease: "power1.out",
        scrollTrigger: { trigger: ".vision", start: "top 70%" },
        onUpdate: () => number.innerHTML = Math.round(number.innerHTML) + "%"
    });
    gsap.to(number, { duration: 1.5, scale: 1.2, repeat: -1, yoyo: true, ease: "sine.inOut" });
});

// CTA Holographic Effect
gsap.to(".cta-button", { duration: 1, boxShadow: "0 0 30px #00d4ff", repeat: -1, yoyo: true });
