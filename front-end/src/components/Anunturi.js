import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/news/News.css";
/* Components */
import Header from "./Header";
import NewsItem from "./Anunturi/Anunt";

const News = () => {
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    try {
      const response = await axios.get('/news');
      setNews(news => [...response.data.news, ...news]);

    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <>
      <Header
        bg='anunturi-bg'
        hero
        title="Anunturi"
        subtitle=""
      />
      <section className="secondary-container dark-bg-container">
        {news.map(({ Id, Title, Content }) => {
          return <NewsItem key={Id} id={Id} title={Title} content={Content} />
        })}
      </section>
    </>
  )
}

export default News;