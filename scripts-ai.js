const fallbackNews = [
    { title: "AI Predicts Climate Patterns", date: "Feb 2025", description: "New models improve accuracy by 30%.", url: "#" },
    { title: "Robots Assist in Surgery", date: "Jan 2025", description: "AI-driven precision reaches 99% success rate.", url: "#" },
    { title: "Quantum AI Breakthrough", date: "Mar 2025", description: "First hybrid system deployed.", url: "#" }
];


async function fetchAINews() {
    const apiKey = 'eefc82254e014d96881e251646a55fc3';
    const url = `https://newsapi.org/v2/everything?q="artificial intelligence" OR "AI" OR "robotics" -inurl:(signup login)&sortBy=publishedAt&apiKey=${apiKey}&pageSize=6`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        if (!data.articles || data.articles.length === 0) {
            throw new Error('No articles returned');
        }
        displayNews(data.articles.map(article => ({
            title: article.title,
            date: new Date(article.publishedAt).toLocaleDateString(),
            description: article.description,
            url: article.url
        })));
    } catch (error) {
        console.error('Error fetching AI news:', error.message);
        displayNews(fallbackNews);
    }
}

function displayNews(newsItems) {
    const newsContainer = document.getElementById('ai-news');
    newsContainer.innerHTML = '';

    newsItems.forEach(item => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');
        newsItem.innerHTML = `
            <h3>${item.title || 'Untitled'}</h3>
            <p><em>${item.date || 'Date Unknown'}</em></p>
            <p>${item.description || 'No description available.'}</p>
            <a href="${item.url || '#'}" target="_blank" rel="noopener noreferrer">Read More</a>
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

document.addEventListener('DOMContentLoaded', fetchAINews);
