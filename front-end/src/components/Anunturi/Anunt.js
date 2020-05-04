import React from 'react';

const NewsItem = ({ title, description }) => {
  return (
    <article className="news-item">
      <h4>{title}</h4>
      <p>{description}</p>
    </article>
  );
}

export default NewsItem;