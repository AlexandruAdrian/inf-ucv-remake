import React, { useState, useContext } from 'react';
import axios from 'axios';
/* Components */
import TeacherForm from "./TeacherForm";
/* Context */
import { TeachersDispatchContext } from "../../context/teachers-context";

const TeacherAddForm = ({ toggler }) => {
  const [values, setValues] = useState({
    FullName: '',
    Grade: '',
    Title: '',
    WebPage: '',
    Phone: '',
    Fax: '',
    Email: '',
  });
  const [selectedFile, setSelectedFile] = useState(null);

  const dispatch = useContext(TeachersDispatchContext)

  const handleAdd = async (formData) => {
    try {
      const token = localStorage.getItem("Token");
      const result = await axios.post('/teachers', formData, {
        headers: {
          'content-type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      })

      if (!selectedFile) {
        dispatch({ type: 'ADD_TEACHER', payload: result.data.teacher });
      }

      toggler();
    } catch (err) {
      console.log(err);
    }
  }

  return <TeacherForm
    toggler={toggler}
    fetch={handleAdd}
    values={values}
    setValues={setValues}
    selectedFile={selectedFile}
    setSelectedFile={setSelectedFile}
  />
}

export default TeacherAddForm;