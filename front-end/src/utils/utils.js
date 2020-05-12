import React from 'react';

export const findLinksInParagraph = (paragraph = "", tags) => {
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

export const linkText = (paragraph = "", linkPositions = []) => {
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