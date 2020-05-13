import React, { createContext, useReducer } from 'react';
import { teachersReducer } from "../reducers/teachers-reducer";

export const TeachersContext = createContext();
export const TeachersStateContext = createContext();
export const TeachersDispatchContext = createContext();

export const TeachersContextProvider = (props) => {
  const [teachers, dispatch] = useReducer(teachersReducer, []);

  return (
    <TeachersContext.Provider>
      <TeachersStateContext.Provider value={teachers}>
        <TeachersDispatchContext.Provider value={dispatch}>
          {props.children}
        </TeachersDispatchContext.Provider>
      </TeachersStateContext.Provider>
    </TeachersContext.Provider>
  )
}

