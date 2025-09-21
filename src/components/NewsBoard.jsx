import { useState, useEffect } from 'react';
import { NewsItems } from './newItems/NewsItems';

export const NewsBoard = ({ category, searchQuery = '' }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true); // ✅ important
    // const URL = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(`/.netlify/functions/news?category=${category}`)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles || []))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [category]);

  // normalize search query
  const q = (searchQuery || '').trim().toLowerCase();

  const filteredArticles = articles.filter((a) => {
    if (!q) return true; // show all if search is empty
    return !!a.title && a.title.toLowerCase().includes(q);
  });

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">
        Latest <span className="badge bg-gradient">News</span>
      </h3>

      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div className="row g-4">
          {filteredArticles.length === 0 ? (
            <div className="col-12">
              <p className="text-center">
                No articles found{q ? ` for "${searchQuery}"` : ''}.
              </p>
            </div>
          ) : (
            filteredArticles.map((news, index) => (
              <div
                key={news.url || index}
                className="col-sm-12 col-md-6 col-lg-4 d-flex align-items-stretch"
              >
                <NewsItems
                  title={news.title}
                  description={news.description}
                  src={news.urlToImage}
                  url={news.url}
                />
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};
