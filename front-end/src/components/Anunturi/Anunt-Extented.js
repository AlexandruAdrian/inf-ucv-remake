import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
/* Components */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../Header";
import EditForm from "../Admin/EditForm";
/* Context */
import { AdminContext } from "../../context/admin-context";
import { NewsStateContext, NewsDispatchContext } from "../../context/news-context";
/* Utils */
import { findLinksInParagraph, linkText } from "../../utils/utils";

const ExtendedArticle = ({ match }) => {
  const [displayEdit, setDisplayEdit] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);

  const { isAdmin } = useContext(AdminContext);
  const article = useContext(NewsStateContext);
  const dispatch = useContext(NewsDispatchContext);

  const { newsId } = match.params;

  useEffect(() => {
    // Fetch article
    const source = axios.CancelToken.source();
    (async () => {
      try {
        setIsLoading(true);
        const result = await axios.get(`/news/article/${newsId}`, {
          cancelToken: source.token
        });
        dispatch({ type: 'ARTICLE', payload: result.data.news[0] });
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    })();

    return () => source.cancel();

  }, [newsId, dispatch]);

  useEffect(() => {
    // Fetch categories
    let source = axios.CancelToken.source();
    (async () => {
      try {
        const response = await axios.get(`/news/${newsId}/categories/`, {
          cancelToken: source.token
        });
        setCategories(cat => [...response.data.categories, ...cat]);
      } catch (err) {
        console.log(err);
      }
    })();

    return () => source.cancel();

  }, [newsId]);

  useEffect(() => {
    // Fetch tags and links
    let source = axios.CancelToken.source();

    (async () => {
      try {
        const response = await axios.get(`/news/${newsId}/tags`, {
          cancelToken: source.token
        });

        setTags(tags => [...response.data.tags, ...tags]);

      } catch (err) {
        console.log(err);
      }
    })();

    return () => source.cancel();
  }, [newsId]);

  const toggleEdit = () => {
    setDisplayEdit(edit => !edit);
  }

  return (
    <>
      <Header
        bg='anunturi-bg'
        hero
        title="Anunturi"
        subtitle=""
      />

      {isAdmin &&
        <div className="card-toolbar">
          <div className='tool edit' onClick={toggleEdit}>
            <FontAwesomeIcon icon='pen' size="sm" />
            <p>Editeaza</p>
          </div>
        </div>
      }
      {!isLoading ? (
        <article className={'extended-news-item'}>
          <h4>{article[0].Title}</h4>
          <div className={'news-desc'}>
            {
              article[0].Content.split("\n").map((paragraph, index) => {
                const linkPositions = findLinksInParagraph(paragraph, tags);
                const parts = linkText(paragraph, linkPositions);

                return <p key={index}>{parts}</p>
              })
            }
          </div>
        </article>
      ) : (<p>Loading...</p>)
      }

      {displayEdit && <EditForm
        toggleEdit={toggleEdit}
        article={article}
        categories={categories}
        setCategories={setCategories}
        tags={tags}
        setTags={setTags}
      />}
    </>
  )
}

export default ExtendedArticle;