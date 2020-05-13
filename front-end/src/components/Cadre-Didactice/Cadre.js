import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
/* Components */
import Cadru from "./Cadru";
import Tool from "../Admin/Tool";
import TeacherForm from "../Admin/TeacherForm";
/* Context */
import { AdminContext } from "../../context/admin-context";
import { TeachersStateContext, TeachersDispatchContext } from "../../context/teachers-context";

const Cadre = () => {
  const isAdmin = useContext(AdminContext);
  const teachers = useContext(TeachersStateContext);
  const dispatch = useContext(TeachersDispatchContext);

  const [showForm, setShowForm] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const toggleForm = () => {
    setShowForm(show => !show);
  }

  const toggleFromEdit = () => {
    setShowForm(show => !show);
    setIsEdit(isEdit => !isEdit);
  }

  const handleDelete = async (id, e) => {
    try {
      // Grab token and attach it to http request header
      const token = localStorage.getItem("Token");
      await axios.delete(`/teachers/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      dispatch({ type: 'DELETE_TEACHER', payload: id });


    } catch (err) {
      console.log(`Failed to delete teacher record - ${err.response.data.message}`);
    }
  }

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/teachers");
        dispatch({ type: 'FETCH_TEACHERS', payload: response.data.teachers });

      } catch (err) {
        console.log(err);
      }
    })();
  }, [dispatch]);

  return (
    <section className="container dark-bg-container">
      {isAdmin &&
        <div className="toolbar">
          <div onClick={toggleForm}>
            <Tool icon='plus' text='Adauga profesor' />
          </div>
        </div>
      }
      <div className="secondary-container">
        {teachers.map(cadru => {
          return (
            <Cadru
              key={cadru.Id}
              id={cadru.Id}
              profile={cadru.Avatar}
              name={cadru.FullName}
              grade={cadru.Grade}
              title={cadru.Title}
              webPage={cadru.WebPage}
              phone={cadru.Phone}
              fax={cadru.Fax}
              email={cadru.Email}
              isAdmin={isAdmin}
              handleDelete={handleDelete}
              toggleEdit={toggleFromEdit}
            />
          )
        })}
      </div>
      {showForm && <TeacherForm toggler={toggleForm} isEdit={isEdit} />}
    </section>
  )
}

export default Cadre;