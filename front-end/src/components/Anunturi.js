import React from 'react';
import "../styles/news/News.css";
/* Components */
import anunturi from "../anunturi.json";
import Header from "./Header";
import NewsItem from "./Anunturi/Anunt";

const News = () => {
  return (
    <>
      <Header
        bg='anunturi-bg'
        hero
        title="Anunturi"
        subtitle=""
      />
      <section className="secondary-container dark-bg-container">
        {anunturi.map(({ title, description, tags, links }, index) => {
          return <NewsItem key={index} title={title} description={description} tags={tags} links={links} />
        })}
      </section>
    </>
  )
}

export default News;