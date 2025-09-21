import React from 'react';
import './newItems.css';

export const NewsItems = ({ title, description, src, url }) => {
  const defaultImage = "https://plus.unsplash.com/premium_photo-1707080369554-359143c6aa0b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D";

  return (
    <div className="card news-card h-100 shadow-sm">
      <div className="image-wrapper">
        <img
          src={src || defaultImage}
          onError={(e) => { e.target.src = defaultImage; }}
          alt={title}
        />
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title ? title.slice(0, 60) : "Untitled"}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 100) + "..."
            : "Stay updated with the latest news and trending stories from around the world."}
        </p>
        <a href={url} target="_blank" className="btn btn-gradient mt-auto">Read More</a>
      </div>
    </div>
  );
};
