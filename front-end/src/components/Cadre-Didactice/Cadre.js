import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
/* Components */
import Cadru from "./Cadru";
import Tool from "../Admin/Tool";
/* Context */
import { AdminContext } from "../../context/admin-context";

const Cadre = () => {
  const [teachers, setTeachers] = useState([]);
  const isAdmin = useContext(AdminContext);

  const fetchTeachers = async () => {
    try {
      const response = await axios.get("/teachers");
      setTeachers(teachers => [...response.data.teachers, ...teachers]);

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  return (
    <section className="container dark-bg-container">
      {isAdmin &&
        <div className="toolbar">
          <Tool icon='plus' text='Adauga profesor' />
        </div>
      }
      <div className="secondary-container">
        {teachers.map(cadru => {
          return (
            <Cadru
              key={cadru.Id}
              profile={cadru.PathToPicture}
              name={cadru.FullName}
              grade={cadru.Grade}
              title={cadru.Title}
              webPage={cadru.WebPage}
              phone={cadru.Phone}
              fax={cadru.Fax}
              email={cadru.Email}
              isAdmin={isAdmin}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Cadre;