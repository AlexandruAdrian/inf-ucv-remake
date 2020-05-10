import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsItem = ({ id, title, content }) => {
  const [tags, setTags] = useState([]);
  const [paragraphs] = useState(content.split("\n"));

  const fetchTagsAndLinks = async () => {
    try {
      const response = await axios.get(`/news/${id}/tags`);
      setTags(tags => [...response.data.tags, ...tags]);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    fetchTagsAndLinks();
  }, []);

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
    <article className="news-item">
      <h4>{title}</h4>
      {paragraphs.map((paragraph, index) => {
        const linkPositions = findLinksInParagraph(paragraph);
        const parts = linkText(paragraph, linkPositions);

        return <p key={index}>{parts}</p>
      })}
    </article>
  );
}

export default NewsItem;