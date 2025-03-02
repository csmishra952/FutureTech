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

gsap.from(".news-item", {
    duration: 1,
    opacity: 0,
    y: 50,
    stagger: 0.2,
    ease: "power2.out"
});
