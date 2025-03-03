async function fetchAINews() {
    const apiKey = 'eefc82254e014d96881e251646a55fc3'; 
    const url = `https://newsapi.org/v2/everything?q="artificial intelligence" OR "AI" OR "robotics" -inurl:(signup login)&sortBy=publishedAt&apiKey=${apiKey}&pageSize=6`; // Fetch 6 recent articles

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        displayNews(data.articles);
    } catch (error) {
        console.error('Error fetching AI news:', error);
        displayError();
    }
}

function displayNews(articles) {
    const newsContainer = document.getElementById('ai-news');
    newsContainer.innerHTML = ''; 

    if (articles.length === 0) {
        newsContainer.innerHTML = '<p>No recent AI news found.</p>';
        return;
    }

    articles.forEach(article => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');
        newsItem.innerHTML = `
            <h3>${article.title || 'Untitled'}</h3>
            <p><em>${new Date(article.publishedAt).toLocaleDateString() || 'Date Unknown'}</em></p>
            <p>${article.description || 'No description available.'}</p>
            <a href="${article.url}" target="_blank" rel="noopener noreferrer">Read More</a>
        `;
        newsContainer.appendChild(newsItem);
    });

    gsap.from('.news-item', {
        duration: 1.2,
        opacity: 0,
        scale: 0.8,
        stagger: 0.2,
        ease: 'elastic.out(1, 0.5)',
        delay: 0.5
    });
}

function displayError() {
    const newsContainer = document.getElementById('ai-news');
    newsContainer.innerHTML = '<p>Failed to load latest AI news. Please try again later.</p>';
}

gsap.from('.ai-developments h1', {
    duration: 1.5,
    y: -50,
    opacity: 0,
    ease: 'bounce.out'
});

document.addEventListener('DOMContentLoaded', fetchAINews);
