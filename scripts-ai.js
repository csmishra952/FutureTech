const aiNews = [
    { title: "AI Predicts Climate Patterns with High Accuracy", date: "Feb 2025", description: "New models improve climate prediction accuracy by 30%, aiding global efforts.", url: "https://example.com/climate-ai" },
    { title: "Robots Revolutionize Surgery", date: "Jan 2025", description: "AI-driven robots achieve a 99% success rate in complex surgeries.", url: "https://example.com/robot-surgery" },
    { title: "Quantum AI Breakthrough Unveiled", date: "Mar 2025", description: "First hybrid quantum-AI system deployed, promising faster computations.", url: "https://example.com/quantum-ai" },
    { title: "AI Agents Enhance Productivity", date: "Dec 2024", description: "OpenAI’s o1 model boosts developer efficiency by 55%.", url: "https://example.com/ai-agents" },
    { title: "Robotics in Industry Soars", date: "Nov 2024", description: "50% of industrial tasks now automated with advanced robotics.", url: "https://example.com/robotics-industry" }
];

function displayNews(newsItems) {
    const newsContainer = document.getElementById('ai-news');
    newsContainer.innerHTML = '';

    newsItems.forEach(item => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');
        newsItem.innerHTML = `
            <h3>${item.title}</h3>
            <p><em>${item.date}</em></p>
            <p>${item.description}</p>
            <a href="${item.url}" target="_blank" rel="noopener noreferrer">Read More</a>
        `;
        newsContainer.appendChild(newsItem);
    });

    gsap.from('.news-item', {
        duration: 1.2,
        opacity: 0,
        scale: 0.8,
        stagger: 0.2,
        ease: 'elastic.out(1, 0.5)'
    });
}

gsap.from('.ai-developments h1', {
    duration: 1.5,
    y: -50,
    opacity: 0,
    ease: 'bounce.out'
});

document.addEventListener('DOMContentLoaded', () => displayNews(aiNews));
