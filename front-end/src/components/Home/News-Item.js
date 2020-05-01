import React from 'react';

const NewsItem = ({item}) => {

  return (
    <li>
      <a href="#">{item.title}</a>
      <p>{item.datetime}</p>
    </li>
  )
}

export default NewsItem;