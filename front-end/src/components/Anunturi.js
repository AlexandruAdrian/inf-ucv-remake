import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import "../styles/news/News.css";
/* Components */
import Header from "./Header";
import NewsItem from "./Anunturi/Anunt";
import Categories from "./Anunturi/Categories";
import Tool from "./Admin/Tool";
/* Context */
import { AdminContext } from "../context/admin-context";

const News = () => {
  const [news, setNews] = useState([]);
  const isAdmin = useContext(AdminContext);

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
        <div className="toolbar">
          {isAdmin && <Tool icon="plus" text="Adauga anunt" />}
          <Categories handleNews={handleNews} />
        </div>
        <div className="news">
          {news.map(({ Id, Title, Content }) => {
            return <NewsItem key={Id} id={Id} title={Title} content={Content} isAdmin={isAdmin} />
          })}
        </div>
      </section>
    </>
  )
}

export default News;