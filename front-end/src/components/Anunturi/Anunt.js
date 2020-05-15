import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
/* Utils */
import { findLinksInParagraph, linkText } from "../../utils/utils";
/* Components */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/* Context */
import { AdminContext } from "../../context/admin-context";
import { NewsDispatchContext } from "../../context/news-context";

const NewsItem = ({ id = "", title = "", content = " " }) => {
  const [tags, setTags] = useState([]);
  const { isAdmin } = useContext(AdminContext);
  const dispatch = useContext(NewsDispatchContext);

  useEffect(() => {
    const fetchTagsAndLinks = async () => {
      try {
        const response = await axios.get(`/news/${id}/tags`);
        setTags(tags => [...response.data.tags, ...tags]);
      } catch (err) {
        console.log(err);
      }
    }

    fetchTagsAndLinks();
  }, [id]);

  const handleDelete = async (newsId) => {
    try {
      const token = localStorage.getItem('Token');
      await axios.delete(`/news/${newsId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      dispatch({ type: 'DELETE_ARTICLE', payload: newsId });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <article className={'news-item'}>
      <h4>{title}</h4>
      <div className={'news-desc'}>
        {
          content.split("\n").map((paragraph, index) => {
            const linkPositions = findLinksInParagraph(paragraph, tags);
            const parts = linkText(paragraph, linkPositions);

            return <p key={index}>{
              content.length < 180 ? parts : content.slice(0, 220).concat('...')
            }</p>
          })
        }
      </div>
      <a href={`/anunturi/${id}`} className="read-more">Deschide</a>
      {isAdmin &&
        <div className="card-toolbar">
          <div className='tool delete' onClick={() => handleDelete(id)}>
            <FontAwesomeIcon icon='trash-alt' size="sm" />
            <p>Sterge</p>
          </div>
        </div>
      }
    </article>
  );
}

export default NewsItem;