import React, { createContext, useState } from 'react';

export const AdminContext = createContext(false);

export const AdminContextProvider = (props) => {
  const [isAdmin] = useState(() => {
    const token = localStorage.getItem("Token");
    return token ? true : false;
  });

  return (
    <AdminContext.Provider value={isAdmin}>
      {props.children}
    </AdminContext.Provider>
  )
}
