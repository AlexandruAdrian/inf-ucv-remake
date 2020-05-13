import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import "../styles/news/News.css";
/* Components */
import Header from "./Header";
import NewsItem from "./Anunturi/Anunt";
import Categories from "./Anunturi/Categories";
import Tool from './Admin/Tool';
import AddArticle from "./Admin/AddArticle";
/* Context */
import { AdminContext } from "../context/admin-context";
import { NewsStateContext, NewsDispatchContext } from "../context/news-context";

const News = () => {
  const [showForm, setShowForm] = useState(false);

  const isAdmin = useContext(AdminContext);
  const news = useContext(NewsStateContext);
  const dispatch = useContext(NewsDispatchContext);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('/news/toate');
        dispatch({ type: 'FETCH_NEWS', payload: response.data.news });
      } catch (err) {
        console.log(err);
      }
    }

    fetchNews();
  }, [dispatch]);

  const toggleArticleForm = () => {
    setShowForm(form => !form);
  }

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
          {isAdmin && <div onClick={toggleArticleForm}><Tool icon="plus" text="Adauga anunt" /></div>}
          <Categories dispatch={dispatch} />
        </div>
        <div className="news">
          {news.length > 0 ?
            news.map(({ Id, Title, Content }) => {
              return <NewsItem
                key={Id}
                id={Id}
                title={Title}
                content={Content}
                isAdmin={isAdmin}
              />
            }) :
            <p>Momentan nu a fost introdus nici un anunt.</p>
          }
        </div>
      </section>
      {showForm && <AddArticle toggleForm={toggleArticleForm} />}
    </>
  )
}

export default News;