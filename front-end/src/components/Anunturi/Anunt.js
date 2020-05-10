import React, { useState, useEffect } from 'react';
import axios from 'axios';
/* Components */
import Tool from "../Admin/Tool";

const NewsItem = ({ id = "", title = "", content = " ", extended, isAdmin }) => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchTagsAndLinks = async () => {
      try {
        const response = await axios.get(`/news/${id}/tags`);
        setTags(tags => [...response.data.tags, ...tags]);
      } catch (err) {
        console.log(err);
      }
    }

    if (extended) {
      fetchTagsAndLinks();
    }
  }, [extended, id]);

  const findLinksInParagraph = (paragraph = "") => {
    const linkPositions = [];
    let startIndex = 0;
    let linkIndex;
    tags.forEach(({ Tag, Link }) => {
      while ((linkIndex = paragraph.indexOf(Tag, startIndex)) > -1) {
        linkPositions.push({ start: linkIndex, end: linkIndex + Tag.length, link: Link });
        startIndex = linkIndex + Tag.length;
      }
    });

    return linkPositions;
  }

  const linkText = (paragraph = "", linkPositions = []) => {
    const parts = [];
    let currentIndex = 0;
    linkPositions.forEach(({ start, end, link }) => {
      if (currentIndex < start) {
        parts.push(paragraph.slice(currentIndex, start));
      }
      parts.push(<a key={start} href={link} target="_blank" rel="noopener noreferrer">{paragraph.slice(start, end)}</a>);
      currentIndex = end;
    });

    if (currentIndex < paragraph.length - 1) {
      parts.push(paragraph.slice(currentIndex));
    }

    return parts;
  }

  return (
    <article className={extended ? 'extended-news-item container white-bg-container' : 'news-item'}>
      <h4>{title}</h4>
      {extended ?
        content.split("\n").map((paragraph, index) => {
          const linkPositions = findLinksInParagraph(paragraph);
          const parts = linkText(paragraph, linkPositions);

          return <p key={index}>{parts}</p>
        })
        :
        <>
          <p>{content.slice(0, 180)}...</p>
          <a href={`/anunturi/${id}`} className="read-more">Citeste mai mult</a>
          {isAdmin &&
            <div className="card-toolbar">
              <Tool icon='pen' text='Editeaza' />
              <Tool icon='trash-alt' text='Sterge' />
            </div>
          }
        </>
      }
    </article>
  );
}

export default NewsItem;