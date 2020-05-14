import React, { createContext, useState } from 'react';

export const AdminContext = createContext(false);

export const AdminContextProvider = (props) => {
  const [isAdmin, setIsAdmin] = useState(() => {
    const token = localStorage.getItem("Token");
    return token ? true : false;
  });

  return (
    <AdminContext.Provider value={{ isAdmin, setIsAdmin }}>
      {props.children}
    </AdminContext.Provider>
  )
}
