import React, { createContext, useReducer } from 'react';
import { newsReducer } from "../reducers/news-reducer";

export const NewsContext = createContext();
export const NewsDispatchContext = createContext();
export const NewsStateContext = createContext();

export const NewsContextProvider = (props) => {
  const [news, dispatch] = useReducer(newsReducer, []);

  return (
    <NewsContext.Provider>
      <NewsStateContext.Provider value={news}>
        <NewsDispatchContext.Provider value={dispatch}>
          {props.children}
        </NewsDispatchContext.Provider>
      </NewsStateContext.Provider>
    </NewsContext.Provider>
  )
}
