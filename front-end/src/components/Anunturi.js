import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/news/News.css";
/* Components */
import Header from "./Header";
import NewsItem from "./Anunturi/Anunt";
import Categories from "./Anunturi/Categories";

const News = () => {
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    try {
      const response = await axios.get('/news/toate');
      setNews(news => [...response.data.news, ...news]);

    } catch (err) {
      console.log(err);
    }
  }

  const handleNews = (news) => {
    setNews([...news]);
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
      <section className="container dark-bg-container">
        <Categories handleNews={handleNews} />
        <div className="news">
          {news.map(({ Id, Title, Content }) => {
            return <NewsItem key={Id} id={Id} title={Title} content={Content} />
          })}
        </div>
      </section>
    </>
  )
}

export default News;