import React, { useState, useEffect } from 'react';
import Cadru from "./Cadru";
import axios from 'axios';

const Cadre = () => {
  const [teachers, setTeachers] = useState([]);

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
    <section className="secondary-container dark-bg-container">
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
          />
        )
      })}
    </section>
  )
}

export default Cadre;