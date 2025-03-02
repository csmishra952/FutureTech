const aiDevelopments = [
    { title: "AI Predicts Climate Patterns", date: "Feb 2025", desc: "New models improve accuracy by 30%." },
    { title: "Robots Assist in Surgery", date: "Jan 2025", desc: "AI-driven precision reaches 99% success rate." },
    { title: "Quantum AI Breakthrough", date: "Mar 2025", desc: "First hybrid system deployed." }
];

const newsContainer = document.getElementById("ai-news");
aiDevelopments.forEach(item => {
    const newsItem = document.createElement("div");
    newsItem.classList.add("news-item");
    newsItem.innerHTML = `
        <h3>${item.title}</h3>
        <p><em>${item.date}</em></p>
        <p>${item.desc}</p>
    `;
    newsContainer.appendChild(newsItem);
});

// In scripts-ai.js
gsap.from(".ai-developments h1", { duration: 1.5, y: -50, opacity: 0, ease: "bounce.out" });
gsap.from(".news-item", {
    duration: 1.2,
    opacity: 0,
    scale: 0.8,
    stagger: 0.3,
    ease: "elastic.out(1, 0.5)"
});
