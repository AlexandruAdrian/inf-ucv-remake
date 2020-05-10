import React, { useState, useEffect } from 'react';
import axios from 'axios';
/* Components */
import Header from "../Header";
import NewsItem from "./Anunt";

const ExtendedArticle = ({ match }) => {
  const [article, setArticle] = useState({});
  const { newsId } = match.params;

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const result = await axios.get(`/news/article/${newsId}`);

        setArticle(result.data.news[0]);
      } catch (err) {
        console.log(`Failed to fetch article - ${err}`);
      }
    }

    fetchArticle();
  }, [newsId]);

  return (
    <>
      <Header
        bg='anunturi-bg'
        hero
        title="Anunturi"
        subtitle=""
      />
      <NewsItem
        id={article.Id}
        title={article.Title}
        content={article.Content}
        extended={true}
      />
    </>
  )
}

export default ExtendedArticle;