import React from 'react';

const NewsItem = ({ title, description, tags, links }) => {
  const findLinksInParagraph = (paragraph) => {
    const linkPositions = [];
    let startIndex = 0;
    let linkIndex;
    tags.map((tag, tagIndex) => {
      while ((linkIndex = paragraph.indexOf(tag, startIndex)) > -1) {
        linkPositions.push({ start: linkIndex, end: linkIndex + tag.length, link: links[tagIndex] });
        startIndex = linkIndex + tag.length;
      }
    });

    return linkPositions;
  }

  const linkText = (paragraph, linkPositions) => {
    const parts = [];
    let currentIndex = 0;
    linkPositions.forEach(({ start, end, link }) => {
      if (currentIndex < start) {
        parts.push(paragraph.slice(currentIndex, start));
      }
      parts.push(<a key={start} href={link} target="_blank">{paragraph.slice(start, end)}</a>);
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
      {description.map((paragraph, index) => {
        const linkPositions = findLinksInParagraph(paragraph);
        const parts = linkText(paragraph, linkPositions);

        return <p key={index}>{parts}</p>
      })}
    </article>
  );
}

export default NewsItem;