async function fetchAINews() {
    const apiKey = 'eefc82254e014d96881e251646a55fc3';
    const url = `https://newsapi.org/v2/everything?q="artificial intelligence" OR "AI" OR "robotics" -inurl:(signup login)&sortBy=publishedAt&apiKey=${apiKey}&pageSize=6`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
        if (!data.articles || data.articles.length === 0) {
            throw new Error('No articles returned from API');
        }
        displayNews(data.articles);
    } catch (error) {
        console.error('Error fetching AI news:', error.message);
        displayError(error.message);
    }
}

function displayNews(articles) {
    const newsContainer = document.getElementById('ai-news');
    newsContainer.innerHTML = ''; 

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

function displayError(errorMsg) {
    const newsContainer = document.getElementById('ai-news');
    newsContainer.innerHTML = `<p>Failed to load latest AI news: ${errorMsg}. Please try again later.</p>`;
}

gsap.from('.ai-developments h1', {
    duration: 1.5,
    y: -50,
    opacity: 0,
    ease: 'bounce.out'
});

document.addEventListener('DOMContentLoaded', fetchAINews);
