import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
/* Components */
import Cadru from "./Cadru";
import Tool from "../Admin/Tool";
import TeacherAddForm from "../Admin/TeacherAddForm";
import TeacherEditForm from "../Admin/TeacherEditForm";
/* Context */
import { AdminContext } from "../../context/admin-context";
import { TeachersStateContext, TeachersDispatchContext } from "../../context/teachers-context";

const Cadre = () => {
  const { isAdmin } = useContext(AdminContext);
  const teachers = useContext(TeachersStateContext);
  const dispatch = useContext(TeachersDispatchContext);

  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editCadru, setEditCadru] = useState({});

  const toggleAddForm = () => {
    setShowAddForm(show => !show);
  }

  const toggleEditForm = (cadru) => {
    setShowEditForm(show => !show);
    setEditCadru({ ...cadru });
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
          <div onClick={toggleAddForm}>
            <Tool icon='plus' text='Adauga profesor' />
          </div>
        </div>
      }
      <div className="secondary-container">
        {teachers.map(cadru => {
          return (
            <Cadru
              key={cadru.Id}
              Id={cadru.Id}
              Avatar={cadru.Avatar}
              FullName={cadru.FullName}
              Grade={cadru.Grade}
              Title={cadru.Title}
              WebPage={cadru.WebPage}
              Phone={cadru.Phone}
              Fax={cadru.Fax}
              Email={cadru.Email}
              isAdmin={isAdmin}
              handleDelete={handleDelete}
              toggleEdit={toggleEditForm}
            />
          )
        })}
      </div>
      {showAddForm && <TeacherAddForm toggler={toggleAddForm} />}
      {showEditForm && <TeacherEditForm toggler={toggleEditForm} cadru={editCadru} setEditCadru={setEditCadru} />}
    </section>
  )
}

export default Cadre;