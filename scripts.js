gsap.from(".hero h1", { duration: 1, y: -50, opacity: 0, ease: "power2.out" });
gsap.from(".hero p", { duration: 1, y: 50, opacity: 0, delay: 0.5, ease: "power2.out" });

const particles = document.querySelector(".particles");
for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");
    particle.style.left = Math.random() * 100 + "vw";
    particle.style.top = Math.random() * 100 + "vh";
    particle.style.animationDuration = Math.random() * 3 + 2 + "s";
    particles.appendChild(particle);
}

gsap.from(".timeline-item", {
    duration: 0.8,
    opacity: 0,
    y: 100,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".timeline",
        start: "top 80%",
    }
});

document.querySelectorAll(".number").forEach(number => {
    const target = +number.getAttribute("data-target");
    gsap.to(number, {
        duration: 2,
        innerHTML: target,
        roundProps: "innerHTML",
        ease: "none",
        scrollTrigger: {
            trigger: ".vision",
            start: "top 80%",
        },
        onUpdate: () => number.innerHTML = Math.round(number.innerHTML) + "%"
    });
});

gsap.to(".cta-button", { duration: 1.5, scale: 1.05, repeat: -1, yoyo: true, ease: "power1.inOut" });